import {
    CardTypes, Icons, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/path_of_fate.png'

const PathOfFate: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Путь судьбы',
    tags: [Tags.STATUS],
    text: [
        'Прикладывается к локации. Не более 1 копии на колоду',
        'Герои не закрываются при атаке, защите или когда направляются на квест пока эта локация является активной',
    ],
    price: 4,
    image: ImageBack,
}

export default PathOfFate
