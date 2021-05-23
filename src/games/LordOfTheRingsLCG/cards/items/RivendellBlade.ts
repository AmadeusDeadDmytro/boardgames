import {
    CardTypes, Icons, ItemCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/rivendells_blade.png'

const RivendellBlade: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Клинок из Ривенделла',
    tags: [Tags.ITEM, Tags.WEAPON],
    text: [
        `Прикладывается к персонажу с чертой ${Tags.NOLDOR} или ${Tags.WOOD_ELF}. Ограничения`,
        `Когда владелец атакует противника, этот противник получает -2${Icons.SHIELD} до конца фазы`,
    ],
    price: 1,
    image: ImageBack,
}

export default RivendellBlade
