import { Actions, AllyCardType, CardTypes, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/landroval.png'

const Landraval: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: true,
    name: 'Ландроваль',
    tags: [Tags.THING, Tags.EAGLE],
    text: [
        `Защитник. Не может иметь ограниченых `,
        `${Actions.REACTION}: После того как герой уничтожен, верните Ландроваля в руку хозяина, чтобы возродить этого героя и ввести его в игру с 1 жетоном повреждений (раз в игру)`,
    ],
    price: 5,
    willpower: 1,
    attack: 3,
    defend: 1,
    health: 4,
    image: ImageBack
}

export default Landraval


