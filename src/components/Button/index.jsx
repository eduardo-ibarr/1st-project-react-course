import React from "react";

import styles from "./styles";

export const Button = ({ text, type, onClick }) => {
    return (
        <styles.Button type={type} onClick={onClick}>
            {text}
        </styles.Button>
    );
};
