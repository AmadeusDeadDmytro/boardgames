import {
    CardTypes, Icons, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/broken_sword.png'

const BrokenSword: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Сломанный меч',
    tags: [Tags.ARTIFACT],
    text: [
        'Прикладывается к герою',
        `Владелец получает символ ресурсов ${Icons.LEADERSHIP}`,
        `Если владелец - Арагорн, каждый персонаж под вашим контролем получает +1 ${Icons.WILLPOWER}`,
    ],
    price: 3,
    image: ImageBack,
}

export default BrokenSword
