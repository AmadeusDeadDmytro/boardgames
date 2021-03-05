import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/take_the_initiative.png'

const TakeTheInitiative: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Взять инициативу',
    text: [
        `${Actions.ACTION}: Сбросьте верхнюю карту своей колоды. Если первонаяальная стоимость сброшенной карты равна или больше числа персонажей под вашим контролем, возьмите 2 карты и нанесите 2 повреждения любому противнику`
    ],
    price: 0,
    image: ImageBack,
}

export default TakeTheInitiative
