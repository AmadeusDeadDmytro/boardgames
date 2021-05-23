import {
    Actions, AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/gondorian_spearman.png'

const GondorianSpearman: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Гондорский копейщик',
    tags: [Tags.GONDOR, Tags.WARRIOR],
    text: [
        'Защитник',
        `${Actions.REACTION}: После того как Гондорский копейщик объявлен защищающимся, нанесите 1 повреждение атакующему противнику`,
    ],
    quote: '"Собралось больше тысячи. Поднятые их копья, походили на колышащийся лес." - Две Твердыни',
    price: 2,
    willpower: 0,
    attack: 1,
    defend: 1,
    health: 1,
    image: ImageBack,
}

export default GondorianSpearman
