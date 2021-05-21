import { HeroCardType, Tags, CardTypes, Spheres, Actions, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/dungir.png'

const Dungir: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.SPIRIT,
    isUnique: true,
    name: 'Дунгир',
    tags: [Tags.ROHAN, Tags.WARRIOR],
    text: [
        `Атакуя в одиночку, эта карта может выбрать своей целью противника, находящегося в районе средоточения, и получить +1${Icons.ATTACK} к этой атаке`
    ],
    hazardLevel: 8,
    willpower: 1,
    attack: 2,
    defend: 1,
    health: 4,
    image: ImageBack
}

export default Dungir


