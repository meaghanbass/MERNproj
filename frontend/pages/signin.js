import Layout from "../components/Layout";
import SignInComponent from "../components/Auth/SignInComponent";

const SignIn = () => {
    return (
        <Layout>
            <h3 className="text-center">Sign in</h3>
            <SignInComponent />
        </Layout>
    );
}

export default SignIn;