import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategoria from "./formularios/FormCadCategorias";
import TabelaCategoria from "./tabelas/TabelaCategorias";
import { useState } from "react";

export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCategoria, setListaCategoria] = useState([]);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        nome:'',
        desricao:''
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadCategoria exibirFormulario={setExibirFormulario} 
                                                         listaCategoria={listaCategoria}
                                                         setListaCategoria={setListaCategoria}
                                                         categoriaParaEdicao={categoriaParaEdicao}
                                                         setCategoriaParaEdicao={setCategoriaParaEdicao}
                                                         modoEdicao={modoEdicao}
                                                         setModoEdicao={setModoEdicao}
                                                         /> 
                                     : 
                                      <TabelaCategoria exibirFormulario={setExibirFormulario} 
                                                       listaCategoria={listaCategoria}
                                                       setListaCategoria={setListaCategoria}
                                                       categoriaParaEdicao={categoriaParaEdicao}
                                                       setCategoriaParaEdicao={setCategoriaParaEdicao}
                                                       modoEdicao={modoEdicao}
                                                       setModoEdicao={setModoEdicao}
                                                       />
                }
            </Pagina>
        </Container>
    )
}