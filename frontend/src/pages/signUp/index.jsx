import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../../utils/api';

const SignUpPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pasword: '',
    confirmPassword: '',
  });

  const onChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const {
      firstName, lastName, email, password, confirmPassword,
    } = form;

    const newForm = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      if (password === confirmPassword) {
        await axios.post('/user', newForm);
        toast.info('Successful registration');
      } else {
        toast.error('Password and confirmation must be equal');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Form className="m-4" onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" name="firstName" value={form.name} onChange={onChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Last name" name="lastName" value={form.name} onChange={onChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={form.name} onChange={onChange} />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={form.name} onChange={onChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder=" Confirm password" name="confirmPassword" value={form.name} onChange={onChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignUpPage;
