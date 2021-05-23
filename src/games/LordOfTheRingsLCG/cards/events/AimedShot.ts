import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/aimed_shot.png'

const AimedShot: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Прицельный выстрел',
    text: [
        `${Actions.ACTION}: Закройте персонажа под вашим контролем со способностью дальнобойный чтобы он немедленно провел атаку против противника в районе средоточения. Эта атака получает +1${Icons.ATTACK}`,
    ],
    price: 1,
    image: ImageBack,
}

export default AimedShot
