import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px;
    background: #fff;
    border-radius: 6px;
    padding: 20px;
`;

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3c369c;
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    gap: 30px 0px;

    h1 {
        color: white;
        font-size: 20px;
        font-weight: light;
    }

    p {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    a {
        color: white;
        font-size: 14px;
    }
`;
