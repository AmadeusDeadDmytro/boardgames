import {
    CardTypes, Icons, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/clear_leadership.png'

const ClearLeadership: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Четкое руководство',
    text: [
        `Прикладывается к ${Icons.LEADERSHIP} герою`,
        `Каждый персонаж с чертой ${Tags.GNOME} получает +1 хит`,
    ],
    price: 2,
    image: ImageBack,
}

export default ClearLeadership
