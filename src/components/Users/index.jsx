import React from "react";
import styles from "./styles";

export const Users = ({ users }) => {
    return (
        <styles.Container>
            {users.map((user, i) => {
                return (
                    <styles.User>
                        <p>{`${user.name} (${user.age} anos de idade)`}</p>
                    </styles.User>
                );
            })}
        </styles.Container>
    );
};
