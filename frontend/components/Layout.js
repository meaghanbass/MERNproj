import Container from "react-bootstrap/Container";
import Header from "../components/Header/Header";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <p>footer</p>
        </>
    );
};

export default Layout;