import {
    Actions, CardTypes, Icons, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/dwarrowdelph_ax.png'

const DwarrowdelphAx: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Дварроуделфская секира',
    tags: [Tags.ITEM, Tags.WEAPON],
    text: [
        `Прикладывается к персонажу с чертой ${Tags.GNOME}. Ограничение`,
        `Владелец получает +1${Icons.ATTACK}`,
        `${Actions.REACTION}: После атаки владельца, нанесите 1 повреждение атакуемому противнику`,
    ],
    price: 1,
    image: ImageBack,
}

export default DwarrowdelphAx
