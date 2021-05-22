import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/new_friendship.png'

const NewFriendship: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Новая дружба',
    text: [
        `${Actions.REACTION}: После того как другой игрок сыграл предмет на героя под вашим контролем, выберите одно:`,
        `- этот игрок открывает 1 из своих героев`,
        `- этот игрок берет 1 карту`,
        `- этот игрок снижает свою угрозу на 2`
    ],
    price: 0,
    image: ImageBack
}

export default NewFriendship


