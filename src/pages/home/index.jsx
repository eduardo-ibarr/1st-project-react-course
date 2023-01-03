import React, { useState } from "react";

import { Form } from "../../components/Form";
import { Modal } from "../../components/Modal";
import { Users } from "../../components/Users";

import styles from "./styles";

export const Home = () => {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState({
        invalid: false,
    });

    const handleStatus = () => {
        setStatus((current) => {
            return {
                ...current,
                invalid: false,
            };
        });
    };

    return (
        <>
            <styles.Container>
                <styles.Content>
                    <Form setUsers={setUsers} setStatus={setStatus} />

                    {users.length > 0 && <Users users={users} />}
                </styles.Content>
            </styles.Container>

            {status.invalid && (
                <Modal handleStatus={handleStatus} text={status.message} />
            )}
        </>
    );
};
