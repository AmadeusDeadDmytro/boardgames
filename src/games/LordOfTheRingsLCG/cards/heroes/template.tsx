import { HeroCardType, Tags, Actions, Icons } from '../../types/cards'

import React from 'react'
import styled from 'styled-components'
import JsxParser from 'react-jsx-parser'

//Icons - 15% transparency
import SwordTransparent from '../../images/icons/Sword-transparent.png'
import Sword from '../../images/icons/Sword.png'
import Willpower from '../../images/icons/Willpower.png'
import Axes from '../../images/icons/Axes.png'
import Shield from '../../images/icons/Shield.png'
import SwordBlack from '../../images/icons/Sword_black.png'

const Template = ({ card }: {card: HeroCardType}) => {

    const replaceTextByText = (array: Array<string>, text: string): string => {
        array.forEach(el => {
            text = text.replace(el, `<b><i>${el}</i></b>`)
        })
        return text
    }

    const replaceTextByIcon = (array: Array<string>, text: string): string => {
        const iconTactics = `<img src="${SwordBlack}" style="width: 10px; display: inline-block; margin: 0 2px;" alt=''/>`
        array.forEach(el => {
            if (el === 'Tactics') {
                text = text.replace(el, iconTactics)
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
                <CharacteristicsBlock>
                    <HazardLevelBlock>{card.hazardLevel}</HazardLevelBlock>
                    <StatsBlock>
                        <StatsCard>
                            <StatsText>{card.willpower}</StatsText>
                            <StatsIcon src={Willpower}/>
                        </StatsCard>
                        <StatsCard>
                            <StatsText>{card.attack}</StatsText>
                            <StatsIcon src={Axes}/>
                        </StatsCard>
                        <StatsCard>
                            <StatsText>{card.defend}</StatsText>
                            <StatsIcon src={Shield}/>
                        </StatsCard>
                    </StatsBlock>
                    <HealthBlock>{card.health}</HealthBlock>
                </CharacteristicsBlock>
            </CardTop>
            <CardBottom>
                <CardAllTextsBlock>
                    <CardNameBlock>
                        <CardName>
                            {card.name}
                        </CardName>
                        <CardTagBlock>
                            {card.tags && card.tags.map((tag) => `${tag}. `)}
                        </CardTagBlock>
                    </CardNameBlock>
                    <CardTextBlock>
                        {card.text && card.text.map((text, index) => {
                            return <CardText key={index}>{renderText(text)}</CardText>
                        })}
                    </CardTextBlock>
                    <CardQuoteBlock></CardQuoteBlock>
                </CardAllTextsBlock>
                <CardTypeBlock>
                    {card.type}
                </CardTypeBlock>
                <FillElement1/>
                <CardIconBlock>
                    <CardIcon src={Sword}/>
                </CardIconBlock>
            </CardBottom>
        </Card>
    )
}

const COLORS = {
    DARK_ONE: '#100f0a',
    DARK_TWO: '#644d23',
    LIGHT_ONE: '#ebe6b8',
    LIGHT_TWO: '#966f14',
    BLUE_ONE: '#6b60ef',
    RED_ONE: '#e20000'
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
    background-position: 50px -10px;
    width: 100%;
    border-left: 5px solid ${COLORS.LIGHT_TWO};
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
    padding: 0 10px;
    border: 3px solid ${COLORS.LIGHT_TWO};
    background-image: url(${SwordTransparent});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90px;
    position: relative;
`
const CardNameBlock = styled.div`
    width: 80%;
    text-align: center;
    margin-bottom: 5px;
`
const CardTagBlock = styled.i`
    display: block;
    margin-top: 5px;
    font-weight: bold;
    user-select: none;
    font-size: 13px;
`
const CardTextBlock = styled.div``
const CardQuoteBlock = styled.div``
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
const CardName = styled.p`
    line-height: 25px;
    margin: 0;
    font-family: 'Delius', cursive;
    font-size: 20px;
    user-select: none;
    position: relative;
    border: 3px solid ${COLORS.LIGHT_TWO};
    border-top: 0;
    border-radius: 0 0 25px 25px;
`
const CardText = styled.p`
    margin: 0 0 10px 0;
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
  left: 0;
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
  left: 0;
  bottom: 0;
  background: ${COLORS.LIGHT_TWO};
  width: 20px;
  height: 20px;
  user-select: none;
`
const CharacteristicsBlock = styled.div`
  position: absolute;
  left: 5px;
`
const HealthBlock = styled.div`
  font-family: 'Verdana', serif;
  border-radius: 50%;
  border: 3px solid ${COLORS.DARK_TWO};
  width: 50px;
  height: 50px;
  color: ${COLORS.RED_ONE};
  text-align: center;
  line-height: 44px;
  font-size: 26px;
  user-select: none;
  margin-top: 5px;
`
const StatsBlock = styled.div`
  background: ${COLORS.LIGHT_TWO};
  width: 50px;
  height: 120px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
`
const StatsText = styled.span`
  font-family: 'Verdana', serif;
  font-style: italic;
  font-size: 24px;
  user-select: none;
`
const StatsIcon = styled.img`
  width: 25px;
`
const HazardLevelBlock = styled.div`
  font-family: 'Verdana', serif;
  border-radius: 50%;
  border: 3px solid ${COLORS.DARK_TWO};
  width: 50px;
  height: 50px;
  color: ${COLORS.BLUE_ONE};
  text-align: center;
  line-height: 44px;
  font-size: 26px;
  user-select: none;
  margin-bottom: 5px;
`
const StatsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Template
