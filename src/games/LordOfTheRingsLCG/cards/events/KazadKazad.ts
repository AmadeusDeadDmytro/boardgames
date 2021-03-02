import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/kazad_kazad.png'

const KazadKazad: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Казад! Казад!',
    text: [
        `${Actions.ACTION}: Выберите персонажа с чертой ${Tags.GNOME}. До конца фазы выбранный персонаж получает +3${Icons.ATTACK}`
    ],
    price: 0,
    quote: `"С яростным криком, отразившимся от утесов, Гимли спрыгнул со стены. 'Казад! Казад!' Он нашёл работу для своей секиры." - Две Твердыни`,
    image: ImageBack
}

export default KazadKazad


