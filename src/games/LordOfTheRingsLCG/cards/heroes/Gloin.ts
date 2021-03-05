import { HeroCardType, Tags, CardTypes, Spheres, Actions } from '../../types/cards'
import ImageBack from '../../images/cards/gloin.png'

const Gloin: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Глоин',
    tags: [Tags.GNOME, Tags.NOBLE],
    text: [
        `${Actions.REACTION}: После того как Глоин получил урон, добавьте в его запас по 1 ресурсу за каждую полученную единицу повреждения`
    ],
    quote: `"Его борода, очень длинная и заплетенная в две толстые косы, была белой. Почти такой же белой, как белоснежные ткани его одежд." - Братство кольца`,
    hazardLevel: 9,
    willpower: 2,
    attack: 2,
    defend: 1,
    health: 4,
    image: ImageBack
}

export default Gloin


