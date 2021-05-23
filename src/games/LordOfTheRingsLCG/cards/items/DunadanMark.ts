import {
    Actions, CardTypes, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/danube_mark.png'

const DunadanMark: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Дунаданский знак',
    tags: [Tags.SIGNAL],
    text: [
        'Прикладывается к герою',
        'Владелец получает способность Защитник',
        `${Actions.ACTION}: Потратьте 1 ресурс из запаса владельца, чтобы передать эту карту другому герою`,
    ],
    price: 1,
    image: ImageBack,
}

export default DunadanMark
