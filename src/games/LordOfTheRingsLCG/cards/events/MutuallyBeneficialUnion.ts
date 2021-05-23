import {
    Actions, CardTypes, EventCardType, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/mutually_benefits_union.png'

const MutuallyBeneficialUnion: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Взаимовыгодный союз',
    text: [
        `${Actions.ACTION}: До конца фазы каждая карта в игре с чертой ${Tags.GONDOR} получает черту ${Tags.ROHAN}, и каждая карта в игре с чертой ${Tags.ROHAN} получает черту ${Tags.GONDOR}`,
    ],
    price: 0,
    image: ImageBack,
}

export default MutuallyBeneficialUnion
