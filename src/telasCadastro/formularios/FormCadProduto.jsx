import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadProduto(props){
    const produtoVazio = {
        codigo:'',
        nome:'',
        categoria:'',
        estoque:'',
        precoCompra:'',
        precoVenda:''
    };
    const estadoInicialProduto = props.produtoParaEdicao;
    const [produto, setProduto] = useState(estadoInicialProduto);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setProduto({...produto,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            if(!props.modoEdicao){
                props.setListaProduto([...props.listaProduto,produto]);
            }
            else{
                props.setListaProduto([...props.listaProduto.filter((itemProduto)=>itemProduto.codigo !== produto.codigo),produto]);
                props.setModoEdicao(false);
                props.setProdutoParaEdicao(produtoVazio);
            }
            setProduto(estadoInicialProduto);
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
                                label="Código:"
                                className="mb-3"
                                >

                                <Form.Control 
                                    type="number" 
                                    placeholder="00" 
                                    id="codigo" 
                                    name="codigo" 
                                    min="1"
                                    value={produto.codigo}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o codigo!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                                >

                                <Form.Control 
                                    type="text" 
                                    placeholder="Nome" 
                                    id="nome" 
                                    name="nome" 
                                    value={produto.nome}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <Form.Group>
                            <FloatingLabel
                                label="Categoria:"
                                className="mb-3"
                                >

                                <Form.Control 
                                    type="text" 
                                    placeholder="Categoria" 
                                    id="categoria" 
                                    name="categoria" 
                                    value={produto.categoria}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <FloatingLabel
                                label="Estoque:"
                                className="mb-3"
                                >

                                <Form.Control 
                                    type="number" 
                                    placeholder="00" 
                                    id="estoque" 
                                    name="estoque" 
                                    min="0"
                                    value={produto.estoque}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o estoque!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Preço de Compra:"
                                className="mb-3"
                                >

                                <Form.Control 
                                    type="number" 
                                    placeholder="00.00" 
                                    id="precoCompra" 
                                    name="precoCompra" 
                                    min="0.00"
                                    step="0.01"
                                    value={produto.precoCompra}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preço de compra!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Preço de Venda:"
                                className="mb-3"
                                >

                                <Form.Control 
                                    type="number" 
                                    placeholder="00.00" 
                                    id="precoVenda" 
                                    name="precoVenda" 
                                    min="0.01"
                                    step="0.01"
                                    value={produto.precoVenda}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preço de compra válido!</Form.Control.Feedback>
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