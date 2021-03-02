import { Actions, CardTypes, Icons, ItemCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/spears_of_the_citadel.png'

const SpearOfTheCitadel: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    name: 'Копье Цитадели',
    tags: [Tags.ITEM, Tags.WEAPON],
    text: [
        `Прикладывается к ${Icons.TACTICS} персонажу. Ограничение`,
        `Не более 1 на персонажа`,
        `${Actions.REACTION}: После того как владелец объявлен защищающимся, нанесите 1 повреждение атакующему противнику`
    ],
    price: 2,
    image: ImageBack,
}

export default SpearOfTheCitadel
