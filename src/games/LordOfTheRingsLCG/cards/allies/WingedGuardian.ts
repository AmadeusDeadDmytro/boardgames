import { Actions, AllyCardType, CardTypes, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/winged_guardian.png'

const WingedGuardian: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Крылатый хранитель',
    tags: [Tags.THING, Tags.EAGLE],
    text: [
        `Защитник. Не может иметь ограниченных довесков`,
        `${Actions.SPECIAL}: После атаки противника, эта карта является защищающимся, заплатите 1${Icons.TACTICS} ресурс или сбросьте карту Крылатый охотник`
    ],
    price: 2,
    willpower: 0,
    attack: 0,
    defend: 4,
    health: 1,
    image: ImageBack
}

export default WingedGuardian


