import { Button, Container, Table, Row, Col } from "react-bootstrap";

export default function TabelaClientes({alternar, home}) {
    return (
        <Container>
            <Row>
                <Col md={6} offset={5}>
                    <Button type="submit" variant={"primary"} onClick={alternar}>Novo Cliente</Button>
                </Col>
                <Col md={6} offset={5}>
                    <Button type="button" variant={"secondary"} onClick={home}>Voltar</Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>000.000.000-00</td>
                        <td>Maria Aparecida Fake</td>
                        <td>Rua das Flores, n° 2569</td>
                        <td>Presidente Prudente/SP</td>
                        <td>19015-000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}