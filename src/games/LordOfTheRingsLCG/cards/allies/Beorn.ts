import {
    Actions, AllyCardType, CardTypes, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/beorg.png'

const Beorn: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    isUnique: true,
    name: 'Беорн',
    tags: [Tags.BEORNING, Tags.WARRIOR],
    text: [
        `${Actions.ACTION}: Беори получает +5${Icons.ATTACK} до конца фазы. В конце фазы, в которой был вызван этот эффект, замешайте Беорга в колоду (раз в раунд)`,
    ],
    quote: '"Я не нуждаюсь в ваших услугах, благодарю... Но я полагаю, что вы нуждаетесь в моих" - Хоббит',
    price: 6,
    willpower: 1,
    attack: 3,
    defend: 3,
    health: 6,
    image: ImageBack,
}

export default Beorn
