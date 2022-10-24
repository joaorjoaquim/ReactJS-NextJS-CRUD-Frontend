import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Form } from './styles';

function Login() {
    const [loading, setLoading] = useState();

    const handleChange = (event) => {
        console.log(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            alert('Login');
            setLoading(false);
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
                    <a href="http://localhost:3000">Registrar</a>
                </div>
            </Form>
        </Container>
    );
}

export default Login;
