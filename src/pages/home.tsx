import React from 'react'
import styled from 'styled-components'
import Colors from '../styles/theme'

const HomePage = () => {
    return (
        <div>
            <Title>Выберите игру</Title>
        </div>
    )
}

export const Title = styled.h1`
  color: ${Colors.basic.primary};
  font-size: 48px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`

export default HomePage