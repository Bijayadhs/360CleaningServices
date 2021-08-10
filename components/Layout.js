import Footer from "./Footer";
import Header from "./Header";
import Head from 'next/head';


const Layout = (props) => {
    return (
        <div className=''>
            <Head>
                <title>360 Cleaning Services</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
