import React, { useState } from 'react'
import styled from 'styled-components'
import Theme from '../styles/theme'
import { observer } from 'mobx-react'
import { mainStore } from '../store/mainStore'
import { GameCard, Modal } from '../components'
import { Navbar, GameModeModalContent, AdventureModalContent } from '../modules'
import { GAMES } from '../constants/gameConstants'

const HomePage = () => {
    const { settings, game, base } = mainStore
    const [modalStep, setModalStep] = useState(1)

    const renderModalContent = (step: number) => {
        switch (step){
        case 1:
        {
            return <GameModeModalContent nextStep={() => setModalStep(2)}/>
        }
        case 2:
        {
            return <AdventureModalContent />
        }
        default: {
            return <>empty</>
        }
        }
    }

    const handleGameClick = (game: string) => {
        mainStore.setCurrentGame(game)
        mainStore.setModal(true)
    }

    const resetPreGameSettings = () => {
        mainStore.setPreGameSettings({
            gameMode: '',
            maxPlayers: 0,
            adventure: ''
        })
        setModalStep(1)
    }

    return (
        <div>
            {
                base.modal && (
                    <Modal
                        theme={settings.theme}
                        title="Преднастройки игры"
                        backClick={modalStep > 1 ? () => setModalStep(prev => prev - 1) : null}
                        onClose={resetPreGameSettings}
                    >
                        {renderModalContent(modalStep)}
                    </Modal>
                )
            }
            <Navbar theme={settings.theme}/>
            <Title theme={settings.theme}>Выберите игру</Title>
            <Container>
                {Object.keys(GAMES).map((game) => (
                    <GameCard
                        theme={settings.theme}
                        image={GAMES[game].image}
                        onClick={() => handleGameClick(game)}
                    />
                ))}
            </Container>
        </div>
    )
}

const Container = styled.div`
  padding: 0 50px;
`

const Title = styled.h1<{ theme: string }>`
  color: ${({ theme }) => Theme[theme].primary};
  font-size: 48px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`

export default observer(HomePage)