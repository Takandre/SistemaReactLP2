import { Button, Container, Table, Row, Col } from "react-bootstrap";

export default function TabelaClientes(props){
    const listaCli = props.listaCliente;
    let tabelaCli=`
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
    `;
    for (let i=0; i<listaCli.length; i++){
        tabelaCli += `
        <tbody>
            <tr>
                <td>${listaCli[i].cpf}</td>
                <td>${listaCli[i].nome}</td>
                <td>${listaCli[i].endereco}/${listaCli[i].numero}</td>
                <td>${listaCli[i].cidade}/${listaCli[i].uf}</td>
                <td>${listaCli[i].cep}</td>
            </tr>
        </tbody>
        `
    }

    function exibirTabela(){
        console.log(tabelaCli);
        return{__html: tabelaCli};
    }

    return (
        <Container>
            <Row>
                <Col md={6} offset={5}>
                    <Button type="submit" variant={"primary"} onClick={() =>{
                        props.exibirFormulario(true)
                    }}>Novo Cliente</Button>
                </Col>
            </Row>
            <Table striped bordered hover dangerouslySetInnerHTML={exibirTabela()}>
            </Table>
        </Container>
    );
}