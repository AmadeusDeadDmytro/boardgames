import { Actions, CardTypes, EventCardType, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/unbending_determination.png'

const UnbendingDetermination: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Железная решимость',
    text: [
        `${Actions.ACTION}: Откройте всех персонажей в игре`
    ],
    quote: `"Если туда ведет единственный путь, я должен его пройти. И буль что будет." - Фродо Бэггинс, Две Твердыни`,
    price: 5,
    image: ImageBack,
}

export default UnbendingDetermination
