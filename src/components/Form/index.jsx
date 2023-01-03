import React, { useState } from "react";
import { Button } from "../Button";
import styles from "./styles";

export const Form = ({ setUsers, setStatus }) => {
    const [name, setName] = useState();
    const [age, setAge] = useState();

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name && !age) {
            setStatus(() => {
                return {
                    invalid: true,
                    message: "Todos os campos devem ser preenchidos.",
                };
            });

            return;
        }

        if (!name) {
            setStatus(() => {
                return {
                    invalid: true,
                    message: "Nome inválido, preencha novamente.",
                };
            });

            return;
        }

        if (!age) {
            setStatus(() => {
                return {
                    invalid: true,
                    message: "Idade inválida, preencha novamente.",
                };
            });

            return;
        }

        setUsers((current) => {
            return [
                ...current,
                {
                    name,
                    age,
                },
            ];
        });
    };

    return (
        <styles.Form onSubmit={handleSubmit}>
            <styles.Input>
                <h3>Nome</h3>
                <input type="text" value={name} onChange={handleChangeName} />
            </styles.Input>
            <styles.Input>
                <h3>Idade</h3>
                <input type="text" value={age} onChange={handleChangeAge} />
            </styles.Input>
            <br />
            <Button type="submit" text="Adicionar Usuário" />
        </styles.Form>
    );
};
