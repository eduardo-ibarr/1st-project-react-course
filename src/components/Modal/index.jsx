import React from "react";
import styles from "./styles";

export const Modal = ({ handleStatus, text }) => {
    return (
        <styles.Container>
            <styles.Modal>
                <h2>Aviso</h2>
                <p>{text}</p>
                <button onClick={handleStatus}>Ok</button>
            </styles.Modal>
        </styles.Container>
    );
};
