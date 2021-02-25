import { HeroCardType, Tags } from '../../types/cards'

const Beregond: HeroCardType = {
    name: 'Берегонд',
    tags: [Tags.GONDOR, Tags.WARRIOR],
    text: [
        'Защитник',
        `Уменьшите на 2 стоимость довесков с чертой ${Tags.WEAPON} или ${Tags.ARMOR}, играемых на Берегонда`,
    ],
}

export default Beregond
