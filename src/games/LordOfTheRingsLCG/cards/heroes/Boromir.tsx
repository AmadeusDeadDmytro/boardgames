import {
    Actions, CardTypes, HeroCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/boromir.png'

const Boromir: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.TACTICS,
    isUnique: true,
    name: 'Боромир',
    tags: [Tags.GONDOR, Tags.NOBLE, Tags.WARRIOR],
    text: [
        `${Actions.ACTION}: Повысьте свою угрозу на 1, чтобы открыть Боромира`,
        `${Actions.ACTION}: Сбросьте Боромира, чтобы нанести 2 повреждения каждому врагу в зоне любого игрока`,
    ],
    hazardLevel: 11,
    willpower: 1,
    attack: 3,
    defend: 2,
    health: 5,
    image: ImageBack,
}

export default Boromir
