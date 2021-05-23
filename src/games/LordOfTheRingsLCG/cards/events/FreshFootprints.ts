import {
    Actions, CardTypes, EventCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/fresh_footprints.png'

const FreshFootprints: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Свежие следы',
    text: [
        `${Actions.REACTION}: После того как вы положили карту противника в район средоточения, нанесите 1 повреждение этомк противнику. Игроки игнорируют этого противника при проверках столкновения в этом раунде`,
    ],
    price: 1,
    image: ImageBack,
}

export default FreshFootprints
