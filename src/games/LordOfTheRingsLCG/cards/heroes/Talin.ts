import { CardTypes, HeroCardType, Spheres, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/talin.png'

const Talin: HeroCardType = {
    type: CardTypes.HERO,
    sphere: Spheres.TACTICS,
    name: 'Талин',
    tags: [Tags.GNOME, Tags.WARRIOR],
    text: [
        `Когда Талин отправлен на квест, нанесите по 1 повреждению каждому противнику, положенному в РС из КС в фазу Квеста (до срабатывания их эффектов появления). Этот эффект не действует, если противник &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;положен в РС без эффектов появления`,
    ],
    hazardLevel: 9,
    willpower: 1,
    attack: 2,
    defend: 2,
    health: 4,
    image: ImageBack
}

export default Talin


