import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/timely_assistance.png'

const TimelyAssistance: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Своевременная помощь',
    text: [
        'Скрытность 3',
        `${Actions.ACTION}: Посмотрите 5 верхних карт своей колоды, выберите из них 1 союзника и положите его в руку. Замешайте остальные карты обратно в колоду`,
    ],
    price: 4,
    image: ImageBack,
}

export default TimelyAssistance
