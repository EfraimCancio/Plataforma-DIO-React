
import Banner01 from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, TextContent, Title, TitleHighLight, Banner } from './styles';

const Home = () => {
    return (
    <>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br/>
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <Banner src={Banner01} alt="Imagem Principal" />
            </div>
        </Container>
        
    </>
    )
}

export {Home}