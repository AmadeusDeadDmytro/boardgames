import {
    Actions, AllyCardType, CardTypes, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/sentry_bruinen.png'

const SentryBruinen: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: false,
    name: 'Часовой Бруинена',
    tags: [Tags.NOLDOR, Tags.WARRIOR],
    text: [
        'Защитник',
        'Часовой Бруинена не закрывается, будучи объявленным защищающимся',
        `${Actions.SPECIAL}: После атаки, в которой он являлся защищающимся, сбросьте либо его, либо 1 карту с руки`,
    ],
    price: 2,
    willpower: 0,
    attack: 1,
    defend: 2,
    health: 2,
    image: ImageBack,
}

export default SentryBruinen
