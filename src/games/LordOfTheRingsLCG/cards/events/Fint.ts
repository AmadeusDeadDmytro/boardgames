import { Actions, CardTypes, EventCardType, Icons, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/fint.png'

const Fint: EventCardType = {
    type: CardTypes.EVENT,
    name: 'Финт',
    text: [
        `${Actions.ACTION_IN_BATTLE}: Выберите противника в зоне любого игрока. Выбранный противник не может атаковать этого игрока в текущей фазе`
    ],
    price: 1,
    quote: `"Несколько отважных людей выстроились в ряд перед ними, чтобы создать видимость сопротивления, и многие из них пали, давая остальным возможность отступить" - Хоббит`,
    image: ImageBack
}

export default Fint


