
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
    return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column FLEX={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
                <UserInfo percentual={35} nome="Pablo Henrrique" image="https://avatars.githubusercontent.com/u/451845"/>
            </Column>
        </Container>
    </>
    )
}

export {Feed}