import { HeroCardType, Tags, CardTypes, Spheres, Actions, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/eovin.png'

const Eovin: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.SPIRIT,
    isUnique: true,
    name: 'Эовин',
    tags: [Tags.NOBLE_W, Tags.ROHAN],
    text: [
        `${Actions.ACTION}: Сбросьте 1 карту с руки, чтобы дать Эовин +1${Icons.WILLPOWER} до конца фазы. Этот эффект может быть вызван один раз за раунд каждым игроком`
    ],
    hazardLevel: 9,
    willpower: 4,
    attack: 1,
    defend: 1,
    health: 3,
    image: ImageBack
}

export default Eovin


