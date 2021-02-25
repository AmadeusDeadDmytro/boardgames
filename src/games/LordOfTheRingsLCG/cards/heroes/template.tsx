import { HeroCardTemplateType, Tags } from '../../types/cards'

import React from 'react'
import styled from 'styled-components'

const Template = ({ name, tags, text }: HeroCardTemplateType) => {
    return (
        <Card>
            <CardTop></CardTop>
            <CardBottom>
                <CardNameBlock>
                    <CardName>{name}</CardName>
                    <CardTagBlock>
                        {tags && tags.map((tag) => `${tag}. `)}
                    </CardTagBlock>
                </CardNameBlock>
                <CardTextBlock>
                    {text &&
                        text.map((text, index) => <CardText>{text}</CardText>)}
                </CardTextBlock>
                <CardQuoteBlock></CardQuoteBlock>
                <CardTypeBlock></CardTypeBlock>
            </CardBottom>
        </Card>
    )
}

const Card = styled.div`
    width: 320px;
    height: 450px;
    background: #100f0a;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`
const CardTop = styled.div`
    width: 100%;
    flex: 1;
`

const CardBottom = styled.div`
    height: 180px;
    width: 100%;
    background: #ebe6b8;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`
const CardNameBlock = styled.div`
    height: 30px;
    width: 80%;
    border: 5px solid #966f14;
    border-top: 0;
    text-align: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`
const CardTagBlock = styled.i`
    display: block;
    margin-top: 5px;
    font-weight: bold;
    user-select: none;
`
const CardTextBlock = styled.div``
const CardQuoteBlock = styled.div``
const CardTypeBlock = styled.div``

const CardName = styled.p`
    line-height: 25px;
    margin: 0;
    font-family: 'Delius', cursive;
    font-size: 20px;
    text-transform: uppercase;
    user-select: none;
`
const CardText = styled.p`
    margin: 0 0 10px 0;
    line-height: 14px;
    font-size: 13px;
`

export default Template
