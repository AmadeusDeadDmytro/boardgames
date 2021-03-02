import { Actions, CardTypes, Icons, ItemCardType, Spheres } from '../../types/cards'
import ImageBack from '../../images/cards/keep_countig.png'

const KeepCounting: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    name: 'Продолжай считать',
    text: [
        `Прикладывается к герою. Не более 1 копии на героя`,
        `Владелец получает +1${Icons.ATTACK} за каждый жетон ресурса на другой копии этой карты сверх количества таких жетонов на этой карте`,
        `${Actions.SPECIAL}: После того как владелец участвует в атаке, которая уничтожает противника, положите 1 жетон ресурса на эту карту`,
    ],
    price: 0,
    image: ImageBack,
}

export default KeepCounting
