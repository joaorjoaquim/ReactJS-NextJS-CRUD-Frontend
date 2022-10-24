import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Form } from './styles';

function Login() {
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            alert('Login');
        } catch (err) {
            alert('erro: ' + err);
        }
    };

    return (
        <Container>
            <Form>
                <h1>Login</h1>
                <Input
                    name="email"
                    placeholder="Digite o seu e-mail"
                    onChange={handleChange}
                    type="email"
                />
                <Input
                    name="password"
                    placeholder="Digite a sua senha"
                    onChange={handleChange}
                    type="password"
                />
                <Button type="submit" text="Entrar!" onClick={handleSubmit} />
                <div>
                    <p>Não possui conta?</p>
                    <a>Registrar</a>
                </div>
            </Form>
        </Container>
    );
}

export default Login;
