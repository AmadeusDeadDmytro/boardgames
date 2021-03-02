import { CardTypes, Icons, ItemCardType, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/gnomish_ax.png'

const GnomishAx: ItemCardType = {
    type: CardTypes.ITEM,
    name: 'Гномий топор',
    tags: [Tags.ITEM, Tags.WEAPON],
    text: [
        `Прикладывается к герою. Ограничение`,
        `Владелец получает +1${Icons.ATTACK} (или +2, если владелец имеет черту ${Tags.GNOME})`
    ],
    quote: `"Ты главное лук держи наготове, а топор у меня завсегда под рукой." - Гимли, Две Твердыни`,
    price: 2,
    image: ImageBack,
}

export default GnomishAx
