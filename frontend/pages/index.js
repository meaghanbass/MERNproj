import Layout from "../components/Layout";
import Carousel from 'react-bootstrap/Carousel'

const Index = () => {
    return (
        <Layout>
            <h2>index page</h2>






            <Carousel style={{height: `500px`, width: `300px`, border: `1px solid gray`}}>
                <Carousel.Item style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>Hello</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>Здравствуйте</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>مرحبا</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>Բարեւ Ձեզ</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>добры дзень</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>你好</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>Ahoj</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>Bonjour</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>Hallo</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>שלום</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item fade={true} style={{height: `500px`}}>
                    <Carousel.Caption style={{color: `black`}}>
                    <h3>سلام</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>












        </Layout>
    )
}

export default Index;