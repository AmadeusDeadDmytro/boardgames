import { Tags, Actions, Icons, EventCardType } from '../../types/cards'

import React from 'react'
import styled from 'styled-components'
import JsxParser from 'react-jsx-parser'
import COLORS from '../../constants/Colors'

//Icons
import SwordTransparent from '../../images/icons/Sword-transparent.png' // 15% transparency
import Sword from '../../images/icons/Sword.png'
import Willpower from '../../images/icons/Willpower.png'
import Axes from '../../images/icons/Axes.png'
import Shield from '../../images/icons/Shield.png'
import SwordBlack from '../../images/icons/Sword_black.png'

const Template = ({ card }: {card: EventCardType}) => {

    const replaceTextByText = (array: Array<string>, text: string): string => {
        array.forEach(el => {
            text = text.replace(el, `<b><i>${el}</i></b>`)
        })
        return text
    }

    const replaceTextByIcon = (array: Array<string>, text: string): string => {
        const iconTactics = `<img src="${SwordBlack}" style="height: 14px; display: inline;" alt=''/>`
        const iconAttack = `<img src="${Axes}" style="height: 14px; display: inline;" alt=''/>`
        const iconShield = `<img src="${Shield}" style="height: 14px; display: inline;" alt=''/>`
        array.forEach(el => {
            if (el === 'Tactics') {
                text = text.replace(el, iconTactics)
            } else if (el === 'Attack') {
                text = text.replace(el, iconAttack)
            } else if (el === 'Shield') {
                text = text.replace(el, iconShield)
            }
        })
        return text
    }

    const renderText = (text: string): JSX.Element => {
        const tagsArr: Array<string> = Object.values(Tags)
        const actionsArr: Array<string> = Object.values(Actions)
        const spheresArr: Array<string> = Object.values(Icons)

        text = replaceTextByText(tagsArr, text)
        text = replaceTextByText(actionsArr, text)
        text = replaceTextByIcon(spheresArr, text)

        return <JsxParser jsx={text}/>
    }

    return (
        <Card>
            <CardTop back={card.image}>
                <CardNameBlock>
                    {card.name}
                </CardNameBlock>
                <FillElement1/>
                <CardIconBlock>
                    <CardIcon src={Sword}/>
                </CardIconBlock>
                <CardPriceBlock>
                    {card.price}
                </CardPriceBlock>
            </CardTop>
            <CardBottom>
                <CardAllTextsBlock>
                    <CardTagBlock>
                        {card.tags && card.tags.map((tag) => `${tag}. `)}
                    </CardTagBlock>
                    <CardTextBlock>
                        {card.text && card.text.map((text, index) => {
                            return <CardText key={index}>{renderText(text)}</CardText>
                        })}
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
    margin-top: 10px;
    position: relative;
`
const CardBottom = styled.div`
    height: 180px;
    width: 100%;
    background-color: ${COLORS.LIGHT_ONE};
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 25px 10px 0;
    border: 3px solid ${COLORS.LIGHT_TWO};
    background-image: url(${SwordTransparent});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90px;
    position: relative;
`
const CardNameBlock = styled.div`
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 255px;
    height: 40px;
    line-height: 34px;
    background-color: ${COLORS.LIGHT_THREE};
    font-family: 'Delius', cursive;
    font-size: 19px;
    border: 3px solid ${COLORS.LIGHT_TWO};
    padding-left: 12px;
    border-radius: 20px;
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
  top: 0px;
  background: ${COLORS.DARK_ONE};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  user-select: none;
  z-index: 2;
  border: 3px solid ${COLORS.LIGHT_TWO};
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
