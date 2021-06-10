import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { mainStore } from '../../../store/mainStore'
import { Navbar } from '../../../modules'
import styled from 'styled-components'
import Theme from '../../../styles/theme'

const Playground = (): ReactElement => {
    const { settings, game } = mainStore
    const fullScreenHandle = useFullScreenHandle();

    return (
        <FullScreen handle={fullScreenHandle}>
            <Navbar theme={settings.theme}/>
        </FullScreen>
    )
}




export default observer(Playground)