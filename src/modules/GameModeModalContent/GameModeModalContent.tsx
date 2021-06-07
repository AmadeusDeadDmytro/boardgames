import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { GameMode } from '../../components'
import { mainStore } from '../../store/mainStore'
import { PropTypes } from './GameModeModalContentTypes'

const GameModeModalContent = ({ }: PropTypes): ReactElement => {
    const { settings } = mainStore

    return (
        <>
            <GameMode title="Соло игра" description="Играть в одиночку" theme={settings.theme} />
            <GameMode title="Игра с другом" description="Играть вместе с другом" theme={settings.theme} disable />
            <GameMode title="Игра с ИскИном" description="Играть с ИИ в качестве напарника" theme={settings.theme} disable />
            {/* TODO: More game modes (friend, ai) */}
        </>
    )
}

export default observer(GameModeModalContent)