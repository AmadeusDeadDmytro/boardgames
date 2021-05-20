import { Actions, CardTypes, Icons, ItemCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/narvi_belt.png'

const NarviBelt: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Пояс Нарви',
    tags: [Tags.ITEM],
    text: [
        `Прикладывается к герою с чертой ${Tags.GNOME}`,
        `${Actions.ACTION}: Закройте Пояс Нарви, чтобы владелец получил ${Icons.LEADERSHIP}, ${Icons.SPIRIT}, ${Icons.ATTACK} или ${Icons.LORE} символ ресурсов до конца фазы`
    ],
    price: 2,
    image: ImageBack,
}

export default NarviBelt
