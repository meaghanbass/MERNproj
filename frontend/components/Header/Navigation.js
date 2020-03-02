import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavLink from "react-bootstrap/NavLink";
import { APP_NAME } from "../../config";
import { signout, isAuth } from "../../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Navigation = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link href="/"><a>{APP_NAME}</a></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Don't uncomment this section unless you've read the documentation below. */}
                    {/* <Nav className="ml-auto">
                        <Link href="/">Home</Link>
                        {!isAuth() && (
                            <>
                            <Link href="/signin">Signin</Link>
                            <Link href="/signup">Signup</Link>
                            </>
                        )}

                        {isAuth() && (
                            <Link onClick={() => signout(() => Router.replace(`/signin`))}>
                                Signout
                            </Link>
                        )}

                        {isAuth() && isAuth().role === 0 && (
                            <Link href="/user">
                                {`${isAuth().name}'s Dashboard`}
                            </Link>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                            <Link href="/admin">
                                {`${isAuth().name}'s Dashboard`}
                            </Link>
                        )}
                    </Nav> */}

                    {/* PLEASE DON'T CHANGE THIS. There was a change in how Next.js handles links which impacts routing as well.
                    Refer to https://nextjs.org/docs/api-reference/next/router before you change anything. */}
                    <Nav className="ml-auto">
                        <Link href="/"><a>Home</a></Link>

                        <Link href="/blogs"><a>Blogs</a></Link>

                        {!isAuth() && (
                        <>
                        <Link href="/signin"><a>Signin</a></Link>
                        <Link href="/signup"><a>Signup</a></Link>
                        </>
                        )}

                        {isAuth() && (
                        <NavLink onClick={() => signout(() => Router.replace(`/signin`))}>
                            Signout
                        </NavLink>
                        )}

                        {isAuth() && isAuth().role === 0 && (
                        <Link href="/user"><a>
                            {`${isAuth().name}'s Dashboard`}
                            </a></Link>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                        <Link href="/admin"><a>
                            {`${isAuth().name}'s Dashboard`}
                            </a></Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Navigation;