import { Button, Container, Table, Row, Col } from "react-bootstrap";

export default function TabelaFornecedor({alternar, home}) {
    return (
        <Container>
            <Row>
                <Col md={6} offset={5}>
                    <Button type="submit" variant={"primary"} onClick={alternar}>Novo Fornecedor</Button>
                </Col>
                <Col md={6} offset={5}>
                    <Button type="button" variant={"secondary"} onClick={home}>Voltar</Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CNPJ</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00.000.000/0001-00</td>
                        <td>Produções CO.</td>
                        <td>Rua Factorial, n° 321</td>
                        <td>Presidente Venceslau/SP</td>
                        <td>19535-700</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}