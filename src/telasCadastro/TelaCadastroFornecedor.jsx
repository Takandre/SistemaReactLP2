import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { useState } from "react";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";

export default function TelaCadastroFornecedor(props){
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaFornecedores, setListaFornecedores] = useState([]); 
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        cnpj:'',
        nome:'',
        endereco:'',
        numero:'',
        bairro:'',
        cidade:'',
        uf:'SP',
        cep:'',
        status:'Ativa',
        contato:''
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadFornecedor exibirFormulario={setExibirFormulario}
                                                          listaFornecedores={listaFornecedores}
                                                          setListaFornecedores={setListaFornecedores}
                                                          fornecedorParaEdicao={fornecedorParaEdicao}
                                                          setFornecedorParaEdicao={setFornecedorParaEdicao}
                                                          modoEdicao={modoEdicao}
                                                          setModoEdicao={setModoEdicao}
                                        />
                                        :
                                       <TabelaFornecedores exibirFormulario={setExibirFormulario}
                                                           listaFornecedores={listaFornecedores}
                                                           setListaFornecedores={setListaFornecedores}
                                                           fornecedorParaEdicao={fornecedorParaEdicao}
                                                           setFornecedorParaEdicao={setFornecedorParaEdicao}
                                                           modoEdicao={modoEdicao}
                                                           setModoEdicao={setModoEdicao}

                                        />
                }
            </Pagina>
        </Container>
    );
}