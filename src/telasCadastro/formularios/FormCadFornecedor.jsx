import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadFornecedor(props){
    return(
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CNPJ:"
                                className="mb-3"
                            >

                                <Form.Control type="text" placeholder="00.000.000/0001-00" id="cnpj" name="cnpj" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cnpj da empresa!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome:"
                                className="mb-3"
                            >

                                <Form.Control type="text" placeholder="Nome da empresa" id="nomeForn" name="nomeForn" required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome da empresa!</Form.Control.Feedback>
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
                                <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela ..." id="enderecoForn" name="enderecoForn" />
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
                                <Form.Control type="text" placeholder="Nº" id="numeroForn" name="numeroForn" />
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
                                <Form.Control type="text" placeholder="Bairro/Vila..." id="bairroForn" name="bairroForn" />
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
                                <Form.Control type="text" placeholder="Cidade" id="cidadeForn" name="cidadeForn" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
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
                                <Form.Control type="text" placeholder="Bairro/Vila..." id="CepForn" name="CepForn" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CEP!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} offset={5}>
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={4} offset={5}>
                        <Button type="button" variant={"dark"} onClick={()=>{
                            props.exibirFormulario(false)
                        }}>Fornecedores</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}