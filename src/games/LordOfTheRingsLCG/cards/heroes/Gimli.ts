import { CardTypes, HeroCardType, Tags, Icons, Spheres } from '../../types/cards'
import ImageBack from '../../images/cards/gimli.png'

const Gimli: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.TACTICS,
    isUnique: true,
    name: 'Гимли',
    tags: [Tags.GNOME, Tags.NOBLE, Tags.WARRIOR],
    text: [
        `Если у Гимли не полное здоровье, он получает +1${Icons.ATTACK} за каждое повреждение`,
    ],
    quote: `"Люди много говорят перед тем, чтобы что-то сделать. Топор в моих руках уже дрожит от нетерпения." - Две Твердыни`,
    hazardLevel: 11,
    willpower: 2,
    attack: 2,
    defend: 2,
    health: 5,
    image: ImageBack
}

export default Gimli


