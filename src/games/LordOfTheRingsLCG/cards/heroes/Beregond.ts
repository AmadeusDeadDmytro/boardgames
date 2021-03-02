import { HeroCardType, Tags, CardTypes, Spheres } from '../../types/cards'
import ImageBack from '../../images/cards/beregond.png'

const Beregond: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.TACTICS,
    name: 'Берегонд',
    tags: [Tags.GONDOR, Tags.WARRIOR],
    text: [
        'Защитник',
        `Стоимость предметов с чертой ${Tags.WEAPON} или ${Tags.ARMOR}, играемых на Берегонда, уменьшается на 2`,
    ],
    hazardLevel: 10,
    willpower: 0,
    attack: 1,
    defend: 4,
    health: 4,
    image: ImageBack
}

export default Beregond


