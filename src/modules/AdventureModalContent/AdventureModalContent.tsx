import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { Adventure } from '../../components'
import { mainStore } from '../../store/mainStore'
import { PropTypes } from './AdventureModalContentType'
import { GAMES, MODES } from '../../constants/gameConstants'
import styled from 'styled-components'
import Theme from '../../styles/theme'
import { useHistory } from 'react-router-dom'

const AdventureModalContent = ({ nextStep }: PropTypes): ReactElement => {
    const { settings, game } = mainStore

    let history = useHistory()

    const handleClick = (adventure: string) => {
        mainStore.setPreGameSettings({
            adventure,
        })

        if (nextStep) {
            nextStep()
        } else {
            history.push('/lord_of_the_ring')
        }
    }

    return (
        <>
            <Title theme={settings.theme}>Сценарий</Title>
            {
                GAMES[game.current].parts.map((part, idx) => (
                    <Adventure
                        title={part}
                        theme={settings.theme}
                        onClick={() => handleClick(part)}
                        disable={false}
                    />
                ))
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

export default observer(AdventureModalContent)