import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProduto(props){
    function excluirProduto(produto) {
        if (window.confirm('Deseja realmente excluir esse produto?')) {
            props.setListaProduto(
                props.listaProduto.filter((itemLista => itemLista.codigo !== produto.codigo))
            );
        }
    }

    function editarProduto(produto){
        props.setProdutoParaEdicao(produto);
        props.setModoEdicao(true);
        props.exibirFormulario(true);
    }
    return(
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Produto</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Estoque</th>
                        <th>Preço de compra</th>
                        <th>Preço de venda</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaProduto.map((produto) => {
                            return (<tr key={produto.codigo}>
                                <td>{produto.codigo}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.categoria}</td>
                                <td>{produto.estoque}</td>
                                <td>{produto.precoCompra}</td>
                                <td>{produto.precoVenda}</td>
                                <td>
                                    <Button variant="danger" onClick={() => {
                                        excluirProduto(produto);
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-trash"
                                            viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>
                                    </Button> {' '}
                                    <Button  onClick={()=>{
                                        editarProduto(produto);
                                        }
                                    }variant="warning">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-pencil-square"
                                            viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </Button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}