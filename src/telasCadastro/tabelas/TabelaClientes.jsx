import { Button, Container, Table, Row, Col } from "react-bootstrap";

export default function TabelaClientes(props) {

    function excluirCliente(cliente) {
        if (window.confirm('Deseja realmente excluir esse cliente?')) {
            props.setListaCliente(props.listaCliente.filter((itemLista => itemLista.cpf !== cliente.cpf)));
        }
    }

    return (
        <Container>
            <Row>
                <Col md={6} offset={5}>
                    <Button type="submit" variant={"primary"} onClick={() => {
                        props.exibirFormulario(true)
                    }}>Novo Cliente</Button>
                </Col>
            </Row>
            <Table>
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
                <tbody>
                    {
                        props.listaCliente.map((cliente) => (<tr key={cliente.cpf}>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.endereco + ", n " + cliente.numero}</td>
                            <td>{cliente.bairro}</td>
                            <td>{cliente.cidade + "/" + cliente.uf}</td>
                            <td>{cliente.cep}</td>
                            <td>
                                <Button variant="danger" onClick={() => {
                                    excluirCliente(cliente);
                                }}>

                                </Button>
                            </td>
                        </tr>))
                    
                }
                </tbody>
            </Table>
        </Container>
    );
}