import { CardTypes, AllyCardType, Tags, Actions } from '../../types/cards'
import ImageBack from '../../images/cards/trolls_hunter.png'

const TrollHunter: AllyCardType = {
    type: CardTypes.ALLY,
    name: 'Охотник на троллей',
    tags: [Tags.NOLDOR, Tags.SCOUT],
    text: [
        'Дальнобойный',
        `Охотник на троллей не закрывается при атаке`,
        `${Actions.SPECIAL}: После того как Охотник на троллей атакует, сбросьте  из игры, либо сбросьте 1 карту с руки`
    ],
    price: 2,
    willpower: 0,
    attack: 2,
    defend: 1,
    health: 2,
    image: ImageBack
}

export default TrollHunter


