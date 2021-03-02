import { Actions, CardTypes, EventCardType, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/quick_blow.png'

const QuickBlow: EventCardType = {
    type: CardTypes.EVENT,
    name: 'Быстрый удар',
    text: [
        `${Actions.REACTION}: После того как персонаж объявлен защищающимся, нанесите 2 повреждения атакующему противнику`],
    price: 2,
    quote: `"Ее удар был молниеносным и смертельным." - Возвращение Короля`,
    image: ImageBack,
}

export default QuickBlow
