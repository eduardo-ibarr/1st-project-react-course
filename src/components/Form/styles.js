import styled from "styled-components";

const Input = styled.div`
    h3 {
        margin-bottom: 5px;
        width: 100%;
    }

    input {
        width: 98.5%;
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
`;

const styles = {
    Input,
    ButtonSubmit,
    Form,
};

export default styles;
