import { Actions, CardTypes, EventCardType, Icons, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/kazad_kazad.png'

const KazadKazad: EventCardType = {
    type: CardTypes.EVENT,
    name: 'Казад! Казад!',
    text: [
        `${Actions.ACTION}: Выберите персонажа с чертой ${Tags.GNOME}. До конца фазы выбранный персонаж получает +3${Icons.ATTACK}`
    ],
    price: 0,
    image: ImageBack
}

export default KazadKazad


