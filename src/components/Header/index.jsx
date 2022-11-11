import React from 'react';
import Logo from '../../assets/logo.png';
import { Button } from '../Button';
import { 
    Container,
    DIO,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <DIO src={Logo} alt="Logo da dio"/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>                      
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/451845"/>
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Enrar"/>
                            <Button title="cadastrar"/>
                        </>
                    )}
                    {/* <MenuRight href="#">Home</MenuRight>
                    <Button title="Enrar"/>
                    <Button title="cadastrar"/> */}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }