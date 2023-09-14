import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedor from "./tabelas/TabelaFornecedores";
import { useState } from "react";

export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(true);
    return (
        <Container>
            <Pagina>
                {
                    //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                    //e a visualização do registros já cadastrados.
                    exibirFormulario ? 
                    <FormCadFornecedor exibirFormulario={setExibirFormulario}/> : 
                    <TabelaFornecedor exibirFormulario={setExibirFormulario}/>
                }
            </Pagina>
        </Container>
    )
}