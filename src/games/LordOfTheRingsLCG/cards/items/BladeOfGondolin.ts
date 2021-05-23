import {
    Actions, CardTypes, Icons, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/blade_of_gondolin.png'

const BladeOfGondolin: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Клинок Гондолина',
    tags: [Tags.ITEM, Tags.WEAPON],
    text: [
        'Прикладывается к герою. Ограничение',
        `Владелец получает +1${Icons.ATTACK}, когда аткует противника с чертой ${Tags.ORC}`,
        `${Actions.REACTION}: После того как атака владельца уничтожает противника, увеличьте прогрес на 1`,
    ],
    price: 1,
    image: ImageBack,
}

export default BladeOfGondolin
