import { HeroCardType, Tags, CardTypes, Spheres, Actions } from '../../types/cards'
import ImageBack from '../../images/cards/teodred.png'

const Teodred: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Теодред',
    tags: [Tags.NOBLE, Tags.ROHAN, Tags.WARRIOR],
    text: [
        `${Actions.REACTION}: После того как Теодред отправлен на квест, выберите героя, отправленного на квест, и добавьте 1 ресурс в его запас`
    ],
    quote: `"Еще не всевластен мрак в Средиземье. Мужайся, повелитель Мустагрима..." - Гендальф, Две Твердыни`,
    hazardLevel: 8,
    willpower: 1,
    attack: 2,
    defend: 1,
    health: 4,
    image: ImageBack
}

export default Teodred


