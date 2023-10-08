import { Container, Table } from "react-bootstrap";
import Pagina from "../templates/Pagina";

export default function TelaCompras(props){
    return(
        <Container>
            <Pagina>
                <p>Tabela de Compras</p>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
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