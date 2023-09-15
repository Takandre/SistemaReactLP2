import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(true);
    const [listaCliente, setListaCliente] = useState([]);
    const [clienteParaEdicao, setClienteParaEdicao] = useState({
        cpf:'',
        nome:'',
        endereco:'',
        numero:'',
        bairro:'',
        cidade:'',
        uf:'SP',
        cep:'',
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <Container>
            <Pagina>
                {
                    //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                    //e a visualização do registros já cadastrados.
                    exibirFormulario ? <FormCadCliente exibirFormulario={setExibirFormulario}
                                                       listaCliente={setListaCliente}
                                                       setListaCliente={setListaCliente}
                                                       setClienteParaEdicao={setClienteParaEdicao}
                                                       setModoEdicao={setModoEdicao}
                                                       />
                    :
                    <TabelaClientes exibirFormulario={setExibirFormulario}
                                    listaCliente={listaCliente}
                                    setListaCliente={setListaCliente}/>
                }
            </Pagina>
        </Container>
    )
}