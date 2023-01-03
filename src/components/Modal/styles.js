import styled from "styled-components";

const Container = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const Modal = styled.div`
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    width: 40%; /* Could be more or less, depending on screen size */
    border-radius: 10px;
`;

const styles = {
    Container,
    Modal,
};

export default styles;
