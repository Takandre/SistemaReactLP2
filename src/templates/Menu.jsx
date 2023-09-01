import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Menu({}) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item>Clientes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Fornecedores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Produtos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Categorias</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item>Pedido de Compra</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Vendas</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}