import { HeroCardType, Tags, CardTypes, Spheres, Actions } from '../../types/cards'
import ImageBack from '../../images/cards/aragorn.png'

const Aragorn: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Арагорн',
    tags: [Tags.DUNADAN, Tags.NOBLE, Tags.RANGER],
    text: [
        `Защитник`,
        `${Actions.REACTION}: После того как Арагорн отправлен на квест, потратьте 1 ресурс из его запаса, чтобы открыть его`
    ],
    quote: `"Если своей жизнью или смертю я сумею спасти вас, то сделаю это" - Братство кольца`,
    hazardLevel: 12,
    willpower: 2,
    attack: 3,
    defend: 2,
    health: 5,
    image: ImageBack
}

export default Aragorn


