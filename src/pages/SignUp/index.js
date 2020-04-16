import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '~/components/Input';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
    alert(JSON.stringify(data));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
