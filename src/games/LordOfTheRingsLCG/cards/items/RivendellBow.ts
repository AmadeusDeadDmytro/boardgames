import { CardTypes, Icons, ItemCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/riverdells_bow.png'

const RivendellBow: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    name: 'Лук из Ривенделла',
    tags: [Tags.ITEM, Tags.WEAPON],
    text: [
        `Прикладывается к персонажу с чертой ${Tags.NOLDOR} или ${Tags.WOOD_ELF} или к Арагорну. Не более 1 копии на персонажа`,
        `Владелец получает способноть дальнобойный`,
        `Если у владельца первоначально есть указанная способность, то он получает +1${Icons.ATTACK} при дальнобойной атаке`
    ],
    price: 1,
    image: ImageBack,
}

export default RivendellBow
