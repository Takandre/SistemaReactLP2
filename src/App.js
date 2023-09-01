import { Container, Alert, Row, Col, Button } from "react-bootstrap";
import Pagina from "./templates/Pagina";
import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroFornecedor from "./telasCadastro/TelaCadastroFornecedor";



import { useState } from "react";

function App() {

  const [pagina, setPagina] = useState(0);

  function paginaHome(){
    setPagina(0);
  }

  function paginaCliente(){
    setPagina(1);
  }

  function paginaFornecedor(){
    setPagina(2);
  }

  function paginaProduto(){
    setPagina(3);
  }

  function paginaCategoria(){
    setPagina(4);
  }

  if(pagina === 0){
    return(
      <div className="App">
        <Pagina>
          <Container>
            <Alert variant="light">
                <h3>Seja Bem-vindo!</h3>
                <h5>Realizar cadastros:</h5>
                <Row>
                    <Col md={3} offset={5}>
                        <Button onClick={paginaCliente}>Cliente</Button>
                    </Col>
                    <Col md={3} offset={5}>
                        <Button onClick={paginaFornecedor}>Fornecedor</Button>
                    </Col>
                    <Col md={3} offset={5}>
                        <Button onClick={paginaProduto}>Produto</Button>
                    </Col>
                    <Col md={3} offset={5}>
                        <Button onClick={paginaCategoria}>Categoria</Button>  
                    </Col>
                </Row>
            </Alert>
          </Container>
        </Pagina>
      </div>
    );
  }
  else if(pagina === 1){
    return (
      <div className="App">
        <TelaCadastroCliente props={paginaHome}/>
      </div>
    );
  }
  else if(pagina === 2){
    return (
      <div className="App">
        <TelaCadastroFornecedor props={paginaHome}/>
      </div>
    );
  }
  else if(pagina === 3){
    return (
      <div className="App">
        <p>tela 3 / Produto</p>
      </div>
    );
  }
  //pagina == 4
  else{
    return (
      <div className="App">
        <p>tela 4 / categoria</p>
      </div>
    );
  }
    
}

export default App;
