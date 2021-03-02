import { CardTypes, AllyCardType, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/rammas_defender.png'

const RammasDefender: AllyCardType = {
    type: CardTypes.ALLY,
    name: 'Защитник Раммаса',
    tags: [Tags.GNOME, Tags.NOBLE, Tags.WARRIOR],
    text: [
        `Если у Гимли не полное здоровье, он получает +1${Icons.ATTACK} за каждое повреждение`,
    ],
    quote: `"Люди много говорят перед тем, чтобы что-то сделать. Топор в моих руках уже дрожит от нетерпения." - Две Твердыни`,
    price: 2,
    willpower: 0,
    attack: 1,
    defend: 4,
    health: 1,
    image: ImageBack
}

export default RammasDefender


