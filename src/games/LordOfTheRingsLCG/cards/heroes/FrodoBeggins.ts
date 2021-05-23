import {
    HeroCardType, Tags, CardTypes, Spheres, Actions, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/frodo_beggins.png'

const FrodoBeggins: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.SPIRIT,
    isUnique: true,
    name: 'Фродо Беггинс',
    tags: [Tags.HOBBIT],
    text: [
        `${Actions.REACTION}: После того как этой карте нанесен урон, отмените полученные им повреждения и вместо этого поднимите свою угрозу на количество отмененных повреждений (раз за фазу)`,
    ],
    hazardLevel: 7,
    willpower: 2,
    attack: 1,
    defend: 2,
    health: 2,
    image: ImageBack,
}

export default FrodoBeggins
