import { Helmet, HelmetProvider } from "react-helmet-async";

const SignUp = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="TicketDorm, create an account and a universe of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals." />
                <title>SignUp | TicketDorm</title>
                </Helmet>
            <main>
            </main>
        </HelmetProvider>
    );
};

export default SignUp;