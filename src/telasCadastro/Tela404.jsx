import { Container, Alert } from "react-bootstrap";
import Pagina from "../templates/Pagina";


export default function Tela404(props){
    return(
        <Container>
            <Pagina>
                <Alert variant="danger">
                    O sistema não oferece acesso a essa pagina.
                    Utilize o Menu para acessar as opções válidas.
                </Alert>
            </Pagina>
        </Container>
    );
}