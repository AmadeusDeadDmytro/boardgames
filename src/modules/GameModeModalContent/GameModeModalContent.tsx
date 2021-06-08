import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { GameMode } from '../../components'
import { mainStore } from '../../store/mainStore'
import { PropTypes } from './GameModeModalContentTypes'
import { GAMES, MODES } from '../../constants/gameConstants'
import styled from 'styled-components'
import Theme from '../../styles/theme'

const GameModeModalContent = ({ nextStep }: PropTypes): ReactElement => {
    const { settings, game } = mainStore

    const handleClick = (gameMode: string, maxPlayers: number) => {
        mainStore.setPreGameSettings({
            gameMode,
            maxPlayers
        })
        nextStep()
    }

    return (
        <>
            <Title theme={settings.theme}>Режим игры</Title>
            {
                Object.keys(MODES).map((mode, idx) => {
                    if (GAMES[game.current].modes.includes(mode)) {
                        return (
                            <GameMode
                                title={MODES[mode].name}
                                description={MODES[mode].description}
                                theme={settings.theme}
                                onClick={() => handleClick(mode, MODES[mode].players)}
                            />
                        )
                    }
                    return null
                })
            }
        </>
    )
}

const Title = styled.div<{ theme: string }>`
  width: 100%;
  text-align: center;
  line-height: 30px;
  font-size: 24px;
  color: ${({ theme }) => Theme[theme].dark};
`

export default observer(GameModeModalContent)