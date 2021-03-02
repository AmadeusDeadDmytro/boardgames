import { CardTypes, Icons, ItemCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/chain_mail.png'

const ChainMail: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Кольчуга',
    tags: [Tags.ITEM, Tags.ARMOR],
    text: [
        `Прикладывается к персонажу с чертой ${Tags.GNOME} или ${Tags.HOBBIT}`,
        `Владелец получает +1 хит и +1${Icons.SHIELD}`,
    ],
    price: 2,
    image: ImageBack,
}

export default ChainMail
