import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { GameMode } from '../../components'
import { mainStore } from '../../store/mainStore'
import { PropTypes } from './GameModeModalContentTypes'

const GameModeModalContent = ({ }: PropTypes): ReactElement => {
    const { settings } = mainStore

    return (
        <>
            <GameMode title="Соло игра" description="Попытаться пройти приключение в одиночку" theme={settings.theme} />
            {/* TODO: More game modes (friend, ai) */}
        </>
    )
}

export default observer(GameModeModalContent)