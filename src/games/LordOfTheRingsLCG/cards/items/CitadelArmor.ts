import { CardTypes, ItemCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/citadel_armor.png'

const CitadelArmor: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Доспех Цитадели',
    tags: [Tags.ITEM, Tags.ARMOR],
    text: [
        `Прикладывается к герою. Ограничение`,
        `Владелец получает +4 хита`
    ],
    quote: `"Ступай в оружейную и оденься как подобает стражу Цитадели." - Денетор, Возвращение Короля`,
    price: 4,
    image: ImageBack,
}

export default CitadelArmor
