import React from 'react'
import styled from 'styled-components'
import { EnemyCardType } from '../../types/cards'
import COLORS from '../../constants/Colors'
import { getSetIcon, renderText } from '../helpers'

// Icons
import DangerPower from '../../images/icons/danger_power.png'
import Axes from '../../images/icons/Axes.png'
import Shield from '../../images/icons/Shield.png'
import Unique from '../../images/icons/Unique.png'
import ShadowEffect from '../../images/icons/shadow_effect.png'

const Template = ({ card }: {card: EnemyCardType}) => (
    <Card>
        <CardTop back={card.image}>
            <CardNameBlock>
                <CardName>
                    {card.isUnique && <UniqueImage src={Unique} />}
                    {card.name}
                </CardName>
            </CardNameBlock>
            <CharacteristicsBlock>
                <DangerPowerBlock>{card.collisionProbability}</DangerPowerBlock>
                <StatsBlock>
                    <StatsCard>
                        <StatsText>{card.dangerPower}</StatsText>
                        <StatsIcon src={DangerPower} />
                    </StatsCard>
                    <StatsCard>
                        <StatsText>{card.attack}</StatsText>
                        <StatsIcon src={Axes} />
                    </StatsCard>
                    <StatsCard>
                        <StatsText>{card.defend}</StatsText>
                        <StatsIcon src={Shield} />
                    </StatsCard>
                </StatsBlock>
                <HealthBlock>{card.health}</HealthBlock>
            </CharacteristicsBlock>
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
                        <CardQuoteBlock>{card.quote}</CardQuoteBlock>
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
    background: ${COLORS.RED_TWO};
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
    background-position: 0 10px;
    width: 100%;
    height: 240px;
    margin-top: 0;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const CardBottom = styled.div`
    height: 220px;
    width: 100%;
    background-color: ${COLORS.GRAY_THREE};
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
`
const CardNameBlock = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto;
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
  border: 3px solid ${COLORS.RED_TWO};
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
    border: 3px solid ${COLORS.RED_TWO};
    border-top: 0;
    background: ${COLORS.GRAY_THREE}
`
const CardText = styled.p`
    margin: 0;
    line-height: 12px;
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
const CharacteristicsBlock = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`
const HealthBlock = styled.div`
  font-family: 'Verdana', serif;
  border-radius: 50%;
  border: 3px solid ${COLORS.RED_TWO};
  width: 40px;
  height: 40px;
  color: ${COLORS.RED_ONE};
  text-align: center;
  line-height: 34px;
  font-size: 22px;
  user-select: none;
  margin-top: 0;
  margin-left: 3px;
  background-color: ${COLORS.DARK_ONE_TRANSPARENT};
`
const DangerPowerBlock = styled.div`
  font-family: 'Verdana', serif;
  border-radius: 50%;
  border: 3px solid ${COLORS.RED_TWO};
  width: 40px;
  height: 40px;
  color: ${COLORS.RED_ONE};
  text-align: center;
  line-height: 34px;
  font-size: 22px;
  user-select: none;
  margin-top: 0;
  margin-left: 3px;
  background-color: ${COLORS.DARK_ONE_TRANSPARENT};
`

const StatsBlock = styled.div`
  background: ${COLORS.GRAY_THREE};
  border: 3px solid ${COLORS.RED_TWO};
  border-top-width: 0;
  width: 46px;
  height: 120px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
const CardQuoteBlock = styled.div`
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  font-style: italic;
  margin-top: 10px;
`

export default Template
