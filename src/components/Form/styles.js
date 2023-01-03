import styled from "styled-components";

const Input = styled.div`
    h3 {
        margin-bottom: 5px;
        width: 100%;
    }

    input {
        width: 97.5%;
        line-height: 2rem;
        border-radius: 5px;
        border: 1px solid #c8c5cc;
        padding-left: 10px;
    }
`;

const ButtonSubmit = styled.button`
    margin-top: 30px;
`;

const Form = styled.form`
    margin-top: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    background-color: white;
`;

const styles = {
    Input,
    ButtonSubmit,
    Form,
};

export default styles;
