import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin-top: 50px;
`;

const User = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 5px;

    p {
        margin-left: 10px;
    }
`;

const styles = {
    Container,
    User,
};

export default styles;
