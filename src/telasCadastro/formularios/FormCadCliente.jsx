import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadCliente({alternar, home}) {
    //atributos deste objeto devem estar associados aos inputs do formulário.
    const estadoInicialCliente = {
        cpf:'',
        nome:'',
        endereco:'',
        numero:'',
        bairro:'',
        cidade:'',
        uf:'SP',
        cep:'',
    }
    const [cliente, setCliente]= useState(estadoInicialCliente);


    //e de elemento
    function manipularMudancas(e){
        const componente = e.currentTarget;
        setCliente({...cliente,[componente.name]:componente.value});
    }

    const [formValidado, setFormValidado] = useState(false)

    function manipularSubmissao(e){
        const form = e.currentTarget;
        if(form.checkValidity()){
            //todos os campos preenchidos
            // mandar dados para backend
            //limpar formulário
            
            //reiniciar o estado do componente
            setCliente(estadoInicialCliente);
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }
        
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form novalidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CPF:"
                                className="mb-3"
                            >

                                <Form.Control 
                                type="text"
                                placeholder="000.000.000-00"
                                id="cpf"
                                name="cpf"
                                value={cliente.cpf}
                                onChange={manipularMudancas}
                                required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cpf!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome Completo:"
                                className="mb-3"
                            >
                                <Form.Control 
                                type="text"
                                placeholder="Informe o nome completo"
                                id="nome"
                                name="nome"
                                value={cliente.nome}
                                onChange={manipularMudancas}
                                required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control
                                type="text"
                                placeholder="Avenida/Rua/Alameda/Viela ..."
                                id="endereco"
                                name="endereco"
                                value={cliente.endereco}
                                onChange={manipularMudancas}
                                required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Número"
                                className="mb-3"
                            >
                                <Form.Control
                                type="text"
                                placeholder="Nº"
                                id="numero"
                                name="numero"
                                value={cliente.numero}
                                onChange={manipularMudancas}
                                required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Bairro:"
                                className="mb-3"
                            >
                                <Form.Control
                                type="text"
                                placeholder="Bairro/Vila..."
                                id="bairro"
                                name="bairro"
                                value={cliente.bairro}
                                onChange={manipularMudancas}
                                required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Cidade"
                                className="mb-3"
                            >
                                <Form.Control
                                type="text"
                                placeholder="Cidade"
                                id="cidade"
                                name="cidade"
                                value={cliente.cidade}
                                onChange={manipularMudancas}
                                required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:" 
                        value={cliente.uf} 
                        onChange={manipularMudancas}>
                            <Form.Select aria-label="Unidades Federativas brasileiras">
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control type="text"
                                placeholder="cep"
                                id="cep"
                                name="cep"
                                value={cliente.cep}
                                onChange={manipularMudancas}
                                required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cep!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} offset={5}>
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={4} offset={5}>
                        <Button type="button" variant={"dark"} onClick={alternar}>Tabela</Button>
                    </Col>
                    <Col md={4} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={home}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}