import React, { useState } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { Container, Form } from './styles';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    //const [loading, setLoading] = useState();
    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log('Form', form);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            navigate('../home', { replace: true });
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
                    <Link to="/">Registrar</Link>
                </div>
            </Form>
        </Container>
    );
}

export default Login;
