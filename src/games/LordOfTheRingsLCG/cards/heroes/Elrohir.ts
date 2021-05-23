import {
    HeroCardType, Tags, CardTypes, Spheres, Icons, Actions,
} from '../../types/cards'
import ImageBack from '../../images/cards/elrohir.png'

const Elrohir: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Элрохир',
    tags: [Tags.NOLDOR, Tags.NOBLE, Tags.RANGER],
    text: [
        `Элрохир получает +2${Icons.SHIELD}, пока Элладан в игре`,
        `${Actions.REACTION}: После того как Элрохир объявлен защищающимся, заплатите 1 ресурс из его запаса, чтобы  открыть его`,
    ],
    hazardLevel: 10,
    willpower: 2,
    attack: 2,
    defend: 1,
    health: 4,
    image: ImageBack,
}

export default Elrohir
