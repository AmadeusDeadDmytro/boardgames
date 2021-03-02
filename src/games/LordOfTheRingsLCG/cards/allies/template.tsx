import { AllyCardType } from '../../types/cards'

import React from 'react'
import styled from 'styled-components'
import COLORS from '../../constants/Colors'
import { renderText } from '../helpers'

//Icons
import SwordTransparent from '../../images/icons/Sword-transparent.png' // 15% transparency
import Sword from '../../images/icons/Sword.png'
import Willpower from '../../images/icons/Willpower.png'
import Axes from '../../images/icons/Axes.png'
import Shield from '../../images/icons/Shield.png'
import SwordBlack from '../../images/icons/Sword_black.png'
import Unique from '../../images/icons/Unique.png'

const Template = ({ card }: {card: AllyCardType}) => {


    return (
        <Card>
            <CardTop back={card.image}>
                <CharacteristicsBlock>
                    <PriceBlock>{card.price}</PriceBlock>
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
                <FillElement1/>
                <CardIconBlock>
                    <CardIcon src={Sword}/>
                </CardIconBlock>
            </CardTop>
            <CardBottom>
                <CardAllTextsBlock>
                    <CardNameBlock>
                        <CardName>
                            {card.isUnique &&  <UniqueImage src={Unique}/>}
                            {card.name}
                        </CardName>
                    </CardNameBlock>
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
`
const CardTagBlock = styled.i`
    display: block;
    margin-top: 5px;
    font-weight: bold;
    user-select: none;
    font-size: 13px;
    margin-bottom: 5px;
`
const CardTextBlock = styled.div`
  width: 100%;
`
const CardQuoteBlock = styled.div`
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  font-style: italic;
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
const CardName = styled.p`
    line-height: 22px;
    margin: 0;
    font-family: 'Delius', cursive;
    font-size: 18px;
    user-select: none;
    position: relative;
    border: 3px solid ${COLORS.LIGHT_TWO};
    border-top: 0;
    border-radius: 0 0 25px 25px;
    background: ${COLORS.LIGHT_THREE}
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
  width: 100%;
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
const CharacteristicsBlock = styled.div`
  position: absolute;
  left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 10px;
`
const HealthBlock = styled.div`
  font-family: 'Verdana', serif;
  border-radius: 50%;
  border: 3px solid ${COLORS.DARK_TWO};
  width: 40px;
  height: 40px;
  color: ${COLORS.RED_ONE};
  text-align: center;
  line-height: 34px;
  font-size: 22px;
  user-select: none;
  margin-top: 5px;
`
const StatsBlock = styled.div`
  background: ${COLORS.LIGHT_TWO};
  width: 40px;
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
  font-size: 20px;
  user-select: none;
`
const StatsIcon = styled.img`
  width: 18px;
`
const PriceBlock = styled.div`
  font-family: 'Verdana', serif;
  border-radius: 50%;
  border: 3px solid ${COLORS.LIGHT_TWO};
  width: 40px;
  height: 40px;
  color: ${COLORS.LIGHT_ONE};
  text-align: center;
  line-height: 34px;
  font-size: 22px;
  user-select: none;
  margin-bottom: 5px;
`
const StatsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const UniqueImage = styled.img`
  display: inline;
  width: 15px;
  height: 15px;
  margin: -5px 3px 0 0;
`

export default Template
