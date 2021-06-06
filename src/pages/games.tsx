import React from 'react'
import styled from 'styled-components'
import Theme from '../styles/theme'
import { observer } from 'mobx-react'
import { mainStore } from '../store/mainStore'
import GameCard from '../components/GameCard/GameCard'
import LordOfTheRingImage from '../assets/images/gameCards/the-lord-of-the-rings-lcg-f.jpg'

const HomePage = () => {
    const { settings, game } = mainStore

    return (
        <div>
            <Title theme={settings.theme}>Выберите игру</Title>
            <Container>
                <GameCard theme={settings.theme} image={LordOfTheRingImage} onClick={() => { console.log('start game') }}/>
            </Container>
        </div>
    )
}

const Container = styled.div`
  padding: 0 50px;
`

const Title = styled.h1<{ theme: string }>`
  color: ${({ theme }) => theme ? Theme[theme].primary : ''};
  font-size: 48px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`

export default observer(HomePage)