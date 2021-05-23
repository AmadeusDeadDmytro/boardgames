import {
    Actions, CardTypes, EventCardType, Icons, Spheres,
} from '../../types/cards'
import ImageBack from '../../images/cards/common_cause.png'

const CommonCause: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Общее дело',
    text: [
        `${Actions.ACTION}: Закройте героя под вашим контролем, чтобы открыть другого выбранного героя любого игрока`,
    ],
    quote: '"Мы устроим такую погоню, о которой, как о чуде, будут рассказывать все три народа: эльфы, гномы и люди." - Арагорн, Две Твердыни',
    price: 0,
    image: ImageBack,
}

export default CommonCause
