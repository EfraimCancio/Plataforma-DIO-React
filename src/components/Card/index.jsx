import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, ImageBackground, Content, PostInfo, UserInfo, UserPicture, HasInfo } from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture />
                <div>
                    <h4>Pablo Henrrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito durante o curso de html e css no bootcamp dio Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp />
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };