import {
    Actions, AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/longbearded_orc_slayer.png'

const LongbeardOrcSlayer: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Убийца орков',
    tags: [Tags.GNOME, Tags.WARRIOR],
    text: [
        `${Actions.REACTION}: Когда эта карта входит в игру, нанесите 1 повреждение каждому противнику с чертой ${Tags.ORC} в игре`,
    ],
    price: 4,
    willpower: 0,
    attack: 2,
    defend: 1,
    health: 3,
    image: ImageBack,
}

export default LongbeardOrcSlayer
