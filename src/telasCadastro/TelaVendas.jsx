import { Container, Table } from "react-bootstrap";
import Pagina from "../templates/Pagina";

export default function TelaVendas(props){
    return(
        <Container>
            <Pagina>
                <p>Tabela de Vendas</p>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Data</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                </Table>
            </Pagina>
        </Container>
    );
}