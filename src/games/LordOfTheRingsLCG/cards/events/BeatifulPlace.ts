import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/beatiful_place.png'

const BeatifulPlace: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.SPIRIT,
    isUnique: false,
    name: 'Живописное место',
    text: [
        `${Actions.REACTION}: После того как локация, у которой нет победных очков, исследована и покидает игру, положите ее на верх колоды столкновений`,
    ],
    price: 1,
    image: ImageBack,
}

export default BeatifulPlace
