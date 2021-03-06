import React, { useState } from 'react'
import styled from 'styled-components'
import { EventCardType, Spheres } from '../../types/cards'
import COLORS from '../../constants/Colors'

import { getSphereIcon, renderText } from '../helpers'

// Icons

const Template = ({ card }: {card: EventCardType}) => {
    const [icons] = useState(getSphereIcon(card.sphere))

    return (
        <Card>
            <CardTop back={card.image}>
                <CardNameBlock>
                    {card.name}
                </CardNameBlock>
                <FillElement1 />
                <CardIconBlock>
                    <CardIcon src={icons[0]} />
                </CardIconBlock>
                <CardPriceBlock>
                    {card.price}
                </CardPriceBlock>
            </CardTop>
            <CardBottom background={icons[1]} large={card.sphere === Spheres.SPIRIT}>
                <CardAllTextsBlock>
                    <CardTagBlock>
                        {card.tags && card.tags.map((tag) => `${tag}. `)}
                    </CardTagBlock>
                    <CardTextBlock>
                        {card.text && card.text.map((text, index) => <CardText key={index}>{renderText(text)}</CardText>)}
                    </CardTextBlock>
                    <CardQuoteBlock>{card.quote}</CardQuoteBlock>
                </CardAllTextsBlock>
                <CardTypeBlock>
                    {card.type}
                </CardTypeBlock>
            </CardBottom>
        </Card>
    )
}

const Card = styled.div`
    width: 320px;
    height: 450px;
    background: ${COLORS.DARK_ONE};
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: ${COLORS.DARK_ONE};
    font-family: 'Verdana', serif;
`
const CardTop = styled.div<{back: string}>`
    background-image: ${({ back }) => back && `url(${back})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 40px -10px;
    width: 100%;
    height: 240px;
    margin-top: 0;
    position: relative;
    border-radius: 10px;
`
const CardBottom = styled.div<{background: string, large: boolean}>`
    height: 190px;
    width: 100%;
    background-color: ${COLORS.LIGHT_ONE};
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px 0;
    border: 3px solid ${COLORS.LIGHT_TWO};
    background-image: url(${({ background }) => background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${({ large }) => (large ? '120px' : '75px')};
    position: relative;
    box-shadow: inset 0 0 11px 2px ${COLORS.BLUE_ONE};
`
const CardNameBlock = styled.div`
    text-align: center;
    position: absolute;
    left: -100px;
    bottom: 100px;
    width: 240px;
    height: 40px;
    line-height: 34px;
    background-color: ${COLORS.LIGHT_THREE};
    transform: rotate(-90deg);
    font-family: 'Delius', cursive;
    font-size: 19px;
    border: 3px solid ${COLORS.LIGHT_TWO};
    padding-left: 12px;
    border-top-right-radius: 10px;
`

const CardTextBlock = styled.div`
  width: 100%;
  margin-top: 5px;
`

const CardTypeBlock = styled.div`
  text-transform: lowercase;
  font-family: 'Delius', cursive;
  font-size: 16px;
  border: 3px solid ${COLORS.LIGHT_TWO};
  border-bottom: 0;
  border-radius: 25px 25px 0 0;
  padding: 0 30px;
  height: 20px;
  line-height: 17px;
  user-select: none;
`
const CardText = styled.p`
    margin: 0 0 5px 0;
    line-height: 14px;
    font-size: 12px;
    user-select: none;
`
const CardAllTextsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CardIconBlock = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${COLORS.DARK_ONE};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid ${COLORS.LIGHT_TWO};
`
const CardIcon = styled.img`
  width: auto;
  height: 25px;
`
const FillElement1 = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background: ${COLORS.LIGHT_TWO};
  width: 40px;
  height: 20px;
  user-select: none;
`
const CardPriceBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: -20px;
  background: ${COLORS.LIGHT_TWO};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  user-select: none;
  z-index: 2;
  border: 5px solid ${COLORS.DARK_TWO};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.LIGHT_ONE};
  text-align: center;
  line-height: 34px;
  font-size: 20px;
`

const CardQuoteBlock = styled.div`
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  font-style: italic;
`
const CardTagBlock = styled.i`
    display: block;
    font-weight: bold;
    user-select: none;
    font-size: 13px;
    position: absolute;
    top: 5px;
`
export default Template
