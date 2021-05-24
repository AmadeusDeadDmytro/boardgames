import React from 'react'
import styled from 'styled-components'
import { TargetCardType } from '../../types/cards'
import COLORS from '../../constants/Colors'
import { getSetIcon, renderText } from '../helpers'

// Icons
import Unique from '../../images/icons/Unique.png'
import ShadowEffect from '../../images/icons/shadow_effect.png'

const Template = ({ card }: {card: TargetCardType}) => (
    <Card>
        <CardTop back={card.image}>
            <CardNameBlock>
                <CardName>
                    {card.isUnique && <UniqueImage src={Unique} />}
                    {card.name}
                </CardName>
            </CardNameBlock>
            <SetIcon src={getSetIcon(card.adventure)}/>
        </CardTop>
        <CardBottom>
            <CardAllTextsBlock>
                <CardTagBlock>
                    {card.tags && card.tags.map((tag) => `${tag}. `)}
                </CardTagBlock>
                <CardTextContainer>
                    <CardTextBlock>
                        {card.text && card.text.map((text, index) => <CardText key={index}>{renderText(text)}</CardText>)}
                    </CardTextBlock>
                    {card.shadowEffect.length ? <ShadowIcon src={ShadowEffect}/> : ''}
                    <ShadowEffectText>
                        {card.shadowEffect && card.shadowEffect.map((text, index) => <CardText key={index}>{renderText(text)}</CardText>)}
                    </ShadowEffectText>
                </CardTextContainer>
            </CardAllTextsBlock>
            <CardTypeBlock>
                {card.type}
            </CardTypeBlock>
        </CardBottom>
    </Card>
)

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
    background-position: 0 0;
    width: 100%;
    height: 220px;
    margin-top: 0;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const CardBottom = styled.div`
    height: 210px;
    width: 100%;
    background-color: ${COLORS.LIGHT_THREE};
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border: 3px solid ${COLORS.DARK_ONE};
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    box-shadow: inset 0 0 11px 2px ${COLORS.RED_ONE};
`
const CardNameBlock = styled.div`
    width: 220px;
    text-align: center;
    margin: 0 auto;
    transform: rotate(-90deg);
    position: absolute;
    top: 100px;
    left: -90px;
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
  height: 40%;
`
const CardTypeBlock = styled.div`
  text-transform: lowercase;
  font-family: 'Delius', cursive;
  font-size: 16px;
  border: 3px solid ${COLORS.DARK_ONE};
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
    border: 3px solid ${COLORS.DARK_ONE};
    background: ${COLORS.GRAY_THREE}
`
const CardText = styled.p`
    margin: 0 0 5px 0;
    line-height: 14px;
    font-size: 12px;
    user-select: none;
`
const ShadowEffectText = styled(CardText)`
  font-style: italic;
  min-height: 40%;
`
const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const CardAllTextsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const UniqueImage = styled.img`
  display: inline;
  width: 15px;
  height: 15px;
  margin: -5px 3px 0 0;
`

const ShadowIcon = styled.img`
  max-width: 100%;
  margin-top: -5px;
`

const SetIcon = styled.img`
  width: 70px;
  position: absolute;
  right: 0;
  bottom: 0;
`

export default Template
