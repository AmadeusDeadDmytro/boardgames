import {
    HeroCardType, Tags, CardTypes, Spheres, Actions,
} from '../../types/cards'
import ImageBack from '../../images/cards/glorfindel.png'

const Glorfindel: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.SPIRIT,
    isUnique: true,
    name: 'Глорфиндел',
    tags: [Tags.NOLDOR, Tags.NOBLE, Tags.WARRIOR],
    text: [
        `${Actions.SPECIAL}: После того как эта карта закрывается, чтобы направиться на квест, повысьте свою угрозу на 1`,
    ],
    hazardLevel: 5,
    willpower: 3,
    attack: 3,
    defend: 1,
    health: 5,
    image: ImageBack,
}

export default Glorfindel
