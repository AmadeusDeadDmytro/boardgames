import {
    Actions, CardTypes, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/dunadan_stock.png'

const DunadanStock: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Дунаданский запас',
    tags: [Tags.ITEM],
    text: [
        'Прикладывается к герою',
        'Владелец получает способность Дальнобойный',
        `${Actions.ACTION}: Потратьте 1 ресурс из запаса владельца, чтобы передать эту карту другому герою`,
    ],
    price: 2,
    image: ImageBack,
}

export default DunadanStock
