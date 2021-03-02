import { Actions, CardTypes, Icons, ItemCardType } from '../../types/cards'
import ImageBack from '../../images/cards/spears_of_the_citadel.png'

const CircularDefense: ItemCardType = {
    type: CardTypes.ITEM,
    name: 'Копье Цитадели',
    text: [
        `Прикладывается к ${Icons.TACTICS} персонажу. Ограничение`,
        `Не более 1 на персонажа`,
        `${Actions.REACTION}: После того как владелец объявлен защищающимся, нанесите 1 повреждение атакующему противнику`
    ],
    price: 2,
    image: ImageBack,
}

export default CircularDefense