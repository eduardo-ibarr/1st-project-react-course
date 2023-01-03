import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin-top: 50px;
    background-color: white;
`;

const User = styled.div`
    margin: 10px 0 10px 0;
    border-radius: 5px;
    border: 1px solid #c8c5cc;

    p {
        margin-left: 10px;
    }
`;

const styles = {
    Container,
    User,
};

export default styles;
