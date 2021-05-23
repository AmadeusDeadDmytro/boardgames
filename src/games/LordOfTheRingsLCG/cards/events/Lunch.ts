import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/lunch.png'

const Lunch: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Второй завтрак',
    text: [
        `${Actions.ACTION}: Каждый игрок возвращает верхнюю карту довеска из своего сброса в руку`,
    ],
    quote: '"...на самом деле, он как раз садился за прекрасный небольшой второй завтра в столовой..." - Фродо Бэггинс, Две Твердыни',
    price: 1,
    image: ImageBack,
}

export default Lunch
