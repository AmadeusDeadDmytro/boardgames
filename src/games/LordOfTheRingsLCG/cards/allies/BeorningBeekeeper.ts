import {
    Actions, AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/beorning_beekeeper.png'

const BeorningBeekeeper: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Беорнинг-пчеловод',
    tags: [Tags.BEORNING],
    text: [
        `${Actions.ACTION}: Сбросьте Беорнинга-пчеловода, чтобы нанести 1 повреждение каждому противнику в районе средоточения`,
    ],
    quote: '"Мы уже близко, - сказал Гендальф. - Мы как раз на краю его пасеки." - Хоббит',
    price: 4,
    willpower: 1,
    attack: 2,
    defend: 1,
    health: 3,
    image: ImageBack,
}

export default BeorningBeekeeper
