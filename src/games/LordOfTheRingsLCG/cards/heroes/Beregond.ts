import { HeroCardType, Tags, CardTypes } from '../../types/cards'
import ImageBack from '../../images/cards/beregond.png'

const Beregond: HeroCardType = {
    type: CardTypes.HERO,
    name: 'Берегонд',
    tags: [Tags.GONDOR, Tags.WARRIOR],
    text: [
        'Защитник',
        `Уменьшите на 2 стоимость предметов с чертой ${Tags.WEAPON} или ${Tags.ARMOR}, играемых на Берегонда`,
    ],
    hazardLevel: 10,
    willpower: 0,
    attack: 1,
    defend: 4,
    health: 4,
    image: ImageBack
}

export default Beregond


