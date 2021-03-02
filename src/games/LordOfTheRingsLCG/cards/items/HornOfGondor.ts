import { Actions, CardTypes, ItemCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/horn_of_godor.png'

const HornOfGondor: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Рог Гондора',
    tags: [Tags.ITEM, Tags.ARTIFACT],
    text: [
        `Прикладывается к герою. Ограничение`,
        `${Actions.REACTION}: После того как чей-либо персонаж покидает игру, владелец получает 1 ресурс`
    ],
    quote: `"Нескоро придется тебе вновь трубить в рог, Боромир. Не раньше, чем доберетесь до границ Гондора, да в минуту большой опасности." - Эрлонд, Братство Кольца`,
    price: 1,
    image: ImageBack,
}

export default HornOfGondor
