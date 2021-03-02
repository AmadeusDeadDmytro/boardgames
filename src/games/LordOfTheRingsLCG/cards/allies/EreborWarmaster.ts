import { AllyCardType, CardTypes, Icons, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/erenbord_warmaster.png'

const EreborWarmaster: AllyCardType = {
    type: CardTypes.ALLY,
    sphere: Spheres.TACTICS,
    name: 'Эреборский мастер',
    tags: [Tags.GNOME, Tags.WARRIOR],
    text: [
        `Эреборский мастер получает по +1${Icons.ATTACK} за каждого другого союзника с чертой ${Tags.GNOME} под вашим контролем`
    ],
    price: 3,
    willpower: 0,
    attack: 1,
    defend: 1,
    health: 2,
    image: ImageBack
}

export default EreborWarmaster


