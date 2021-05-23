import {
    Actions, CardTypes, ItemCardType, Spheres, Tags, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/celebrian_stone.png'

const CelebrianStone: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Камень Келебриана',
    tags: [Tags.ARTIFACT, Tags.ITEM],
    text: [
        'Прикладывается к герою. Ограничение',
        `Владелец получает +2${Icons.WILLPOWER}`,
        `Если владелец - Арагорн, он дополнительно получает символ ресурсов ${Icons.SPIRIT}`,
    ],
    price: 2,
    image: ImageBack,
}

export default CelebrianStone
