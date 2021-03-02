import { CardTypes, AllyCardType, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/rammas_defender.png'

const RammasDefender: AllyCardType = {
    type: CardTypes.ALLY,
    name: 'Защитник Раммаса',
    tags: [Tags.GONDOR, Tags.WARRIOR],
    price: 2,
    willpower: 0,
    attack: 1,
    defend: 4,
    health: 1,
    image: ImageBack
}

export default RammasDefender


