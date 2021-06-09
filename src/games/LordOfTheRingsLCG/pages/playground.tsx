import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { mainStore } from '../../../store/mainStore'
import { Navbar } from '../../../modules'

const Playground = (): ReactElement => {
    const { settings, game } = mainStore

    return (
        <>
            <div>test is game</div>
            <Navbar theme={settings.theme}/>
        </>
    )
}


export default observer(Playground)