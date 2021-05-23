import {
    Actions, CardTypes, ItemCardType, Spheres, Tags, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/dunadan_mission.png'

const DunadanMission: ItemCardType = {
    type: CardTypes.ITEM,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Дунаданское поручение',
    tags: [Tags.SIGNAL],
    text: [
        'Прикладывается к герою',
        `Владелец получает способность +1${Icons.WILLPOWER}`,
        `${Actions.ACTION}: Потратьте 1 ресурс из запаса владельца, чтобы передать эту карту другому герою`,
    ],
    price: 2,
    image: ImageBack,
}

export default DunadanMission
