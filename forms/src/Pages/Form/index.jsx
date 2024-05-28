import React, { useState, useEffect } from "react";
import { FormContainer, DataContainer } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

const Form = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [cidade, setCidade] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaValida, setSenhaValida] = useState(true);
    const [mostrarDados, setMostrarDados] = useState(false);

    const validarSenha = (senha) => {
        return senha.length >= 6;
    };

    useEffect(() => {
        setSenhaValida(validarSenha(senha));
    }, [senha]); 

    const handleSubmit = (event) => {
        event.preventDefault();
        setMostrarDados(true);
    };

    const handleReset = () => {
        setNome("");
        setEmail("");
        setIdade("");
        setCidade("");
        setSenha("");
        setSenhaValida(true);
        setMostrarDados(false);
    };

    return (
        <>
            {!mostrarDados && (
                <FormContainer onSubmit={handleSubmit}>
                    <Input
                        Text="Nome:"
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                    <Input
                        Text="E-mail:"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        Text="Idade:"
                        type="number"
                        placeholder="Digite sua idade"
                        value={idade}
                        onChange={(event) => setIdade(event.target.value)}
                    />
                    <Input
                        Text="Cidade:"
                        type="text"
                        placeholder="Digite sua cidade"
                        value={cidade}
                        onChange={(event) => setCidade(event.target.value)}
                    />
                    <Input
                        Text="Senha:"
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    />
                    {!senhaValida && <p>A senha deve ter pelo menos 6 caracteres.</p>}
                    <Button Text="Enviar" disabled={!nome || !email || !idade || !cidade || !senhaValida} />
                </FormContainer>
            )}
            {mostrarDados && (
                <DataContainer>
                    <h2>Dados do Formulário:</h2>
                    <p><strong>Nome:</strong> {nome}</p>
                    <p><strong>E-mail:</strong> {email}</p>
                    <p><strong>Idade:</strong> {idade}</p>
                    <p><strong>Cidade:</strong> {cidade}</p>
                    <Button Text="Voltar" onClick={handleReset} />
                </DataContainer>
            )}
        </>
    );
};

export { Form };
