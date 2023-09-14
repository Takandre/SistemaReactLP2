import TelaMenu from "./telasCadastro/TelaMenu";
import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroFornecedor from "./telasCadastro/TelaCadastroFornecedor";
import Tela404 from "./telasCadastro/Tela404";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/clientes" element={<TelaCadastroCliente/>}/>
          <Route path="/fornecedores" element={<TelaCadastroFornecedor/>}/>
          <Route path="/" element={<TelaMenu/>} />
          <Route path="*" element={<Tela404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
