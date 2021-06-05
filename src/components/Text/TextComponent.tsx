import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Theme from '../../styles/theme'
import { mainStore } from '../../store/mainStore'
import { TextProps } from './TextTypes'

const TextComponent = ({ children, className }: TextProps): ReactElement => {
    const { settings } = mainStore

    return (
        <Link theme={settings.theme} className={className}>
            {children}
        </Link>
    )
}

export const Link = styled.p<{ theme: string }>`
  color: ${({ theme }) => Theme[theme].primary};
`


export default observer(TextComponent)