const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { userSchema, validateForm } = require("../utils/joi.schemas");
const UserModel = require("../models/user.model");

const userValidateForm = validateForm(userSchema);

const { saltRounds } = process.env;

class UserController {

    async auth(req, res) {
        const { email, password } = req.body;

        try {
            const user = await UserModel.find({ email });

            if (!user) {
                throw new Error("User not exists");
            }

            const compareResult = await bcrypt.compare(password, user.password);

            if (!compareResult) {
                throw new Error("Invalid Password");
            }

            delete user.password;

            const token = jwt.sign({ ...user._doc }, process.env.JWT_SECRET_KEY);
            res.send({ token });
        } catch (error) {
            res.status(400).send({ message: "Invalide login or password" });
        }
    }

    async store(req, res) {
        try {
            userValidateForm(req.body);

            const { email, password } = req.body;

            if (password) {
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(password, salt);

                req.body.password = hash;
            }

            const user = await UserModel.find({ email });

            if (user.length != 0) {
                return res.status(400).send({ message: "Email already exists" });
            }

            const newUser = await UserModel.create(req.body);

            res.send({ user: newUser })

        } catch (error) {
            res.status(400).send({ message: "Invalid fields", error: error.message })
        }
    }

    async update(req, res) {
        const {
            params: { id },
            body,
        } = req;

        try {
            userValidateForm(req.body);

            if (body.password) {
                const { password } = body;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(password, salt);

                body.password = hash;
            }

            const user = await UserModel.findOneAndUpdate(id, body).lean();

            res.send({
                user: {
                    ...user,
                    ...body,
                },
            });
        } catch (error) {
            res.status(400).send({ message: "Cannot update" })
        }
    }

    async remove(req, res) {
        const { id } = req.params;

        try {
            const user = await UserModel.findByIdAndDelete(id);
            if (user) {
                res.send({ message: "User removed" });
            }
            throw new Error("User not exist");
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    async me(req, res) {
        res.send({ loggedUser: req.headers.loggedUser });
    }
}

module.exports = new UserController();