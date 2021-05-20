import { Actions, CardTypes, ItemCardType, Spheres, Tags, Icons } from '../../types/cards'
import ImageBack from '../../images/cards/dunadan_warning.png'

const DunadanWarning: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Дунаданское оповещение',
    tags: [Tags.SIGNAL],
    text: [
        `Прикладывается к герою`,
        `Владелец получает +1${Icons.SHIELD}`,
        `${Actions.ACTION}: Потратьте 1 ресурс из запаса владельца, чтобы передать эту карту другому герою`
    ],
    price: 1,
    image: ImageBack,
}

export default DunadanWarning
