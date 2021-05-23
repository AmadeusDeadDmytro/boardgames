import {
    Actions, CardTypes, EventCardType, Icons, Spheres,
} from '../../types/cards'
import ImageBack from '../../images/cards/heroic_death.png'

const HeroicDeath: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Героическая смерть',
    text: [
        `${Actions.REACTION}: После того как карта союзника покидает игру, игрок, контролировавший этого союзника, берет 2 карты из своей колоды`,
    ],
    quote: '"Он пал, защищая хоббитов, пока я был на вершине холма." - Арагорн, Две Твердыни',
    price: 1,
    image: ImageBack,
}

export default HeroicDeath
