import {
    HeroCardType, Tags, CardTypes, Spheres, Icons,
} from '../../types/cards'
import ImageBack from '../../images/cards/boromir_leader.png'

const BoromirLeadership: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.LEADERSHIP,
    isUnique: true,
    name: 'Боромир',
    tags: [Tags.GONDOR, Tags.WARRIOR, Tags.NOBLE],
    text: [
        `Пока в запасе Боромира есть хотя бы 1 ресурс, все союзники с чертой ${Tags.GONDOR} получают +1${Icons.ATTACK}`,
    ],
    hazardLevel: 11,
    willpower: 1,
    attack: 3,
    defend: 2,
    health: 5,
    image: ImageBack,
}

export default BoromirLeadership
