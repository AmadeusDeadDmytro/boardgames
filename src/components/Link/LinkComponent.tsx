import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Theme from '../../styles/theme'
import { mainStore } from '../../store/mainStore'
import { LinkProps } from './LinkTypes'
import { Link } from 'react-router-dom'

const LinkComponent = ({ children, className, href }: LinkProps): ReactElement => {
    const { settings } = mainStore

    return (
        <SLink to={'/' + href} theme={settings.theme} className={className}>
            {children}
        </SLink>
    )
}

export const SLink = styled(Link)<{ theme: string }>`
  text-decoration: underline;
  color: ${({ theme }) => Theme[theme].medium};
  transition: all .2s linear;

  &:hover {
    transition: all .2s linear;
    color: ${({ theme }) => Theme[theme].primary};
    text-decoration: none;
  }
`


export default observer(LinkComponent)