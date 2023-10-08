import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadCategoria(props){
    const categoriaVazio = {
        nome:'',
        descricao:'',
    };
    const estadoInicialCategoria = props.categoriaParaEdicao;
    const [categoria, setCategoria] = useState(estadoInicialCategoria);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setCategoria({...categoria,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            if(!props.modoEdicao){
                props.setListaCategoria([...props.listaCategoria, categoria]);
            }
            else{
                props.setListaCategoria([...props.listaCategoria.filter((itemCategoria)=>itemCategoria.nome !== categoria.nome),categoria]);
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazio);
            }
            setCategoria(estadoInicialCategoria);
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return(
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome"
                                className="mb-3"
                                >

                                    <Form.Control
                                        type="text"
                                        placeholder="Nome" 
                                        id="nome" 
                                        name="nome" 
                                        value={categoria.nome}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Descrição"
                                className="mb-3"
                                >

                                    <Form.Control
                                        type="text"
                                        placeholder="Descrição"
                                        id="descricao"
                                        name="descricao"
                                        value={categoria.descricao}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe a descrição!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                        }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}