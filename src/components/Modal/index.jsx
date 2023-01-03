import React from "react";
import { Button } from "../Button";
import styles from "./styles";

export const Modal = ({ handleStatus, text }) => {
    return (
        <styles.Container>
            <styles.Modal>
                <h2>Aviso</h2>
                <p>{text}</p>
                <Button onClick={handleStatus} text="Ok" type="button" />
            </styles.Modal>
        </styles.Container>
    );
};
