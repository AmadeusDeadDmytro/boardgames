import { Actions, CardTypes, HeroCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/elladan.png'

const Elladan: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.TACTICS,
    isUnique: true,
    name: 'Элладан',
    tags: [Tags.NOLDOR, Tags.NOBLE, Tags.Ranger],
    text: [
        `Элладан получит +2 ${Icons.ATTACK} пока Элрохир в игре`,
        `${Actions.REACTION}: После того как Элладан объявлен атакующим, потратьте 1 ресурс из его запаса чтобы открыть его`,
    ],
    hazardLevel: 10,
    willpower: 2,
    attack: 1,
    defend: 2,
    health: 4,
    image: ImageBack
}

export default Elladan


