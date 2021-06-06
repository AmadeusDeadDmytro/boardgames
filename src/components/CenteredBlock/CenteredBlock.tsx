import React, { ReactElement } from 'react'
import styled from 'styled-components'

import {CenteredBlockTypeProps} from './CenteredBlockTypes'

const CenteredBlock = ({ children }: CenteredBlockTypeProps): ReactElement => <Block>{children}</Block>

const Block = styled.div`
    margin: 0 auto;
    width: fit-content;
`

export default CenteredBlock