import {
    Actions, CardTypes, ItemCardType, Spheres, Tags, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/dunadan_label.png'

const DunadanLabel: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Дунаданская метка',
    tags: [Tags.SIGNAL],
    text: [
        'Прикладывается к герою',
        `Владелец получает +1${Icons.ATTACK}`,
        `${Actions.ACTION}: Потратьте 1 ресурс из запаса владельца, чтобы передать эту карту другому герою`,
    ],
    price: 1,
    image: ImageBack,
}

export default DunadanLabel
