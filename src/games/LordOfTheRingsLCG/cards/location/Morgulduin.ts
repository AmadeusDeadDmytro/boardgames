import {
    Tags, CardTypes, Adventures, LocationCardType, Actions,
} from '../../types/cards'
import ImageBack from '../../images/cards/morgulduin.png'

const Morgulduin: LocationCardType = {
    type: CardTypes.LOCATION,
    isUnique: false,
    name: 'Моргулдуин',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.EAST_COAST, Tags.DESECRATED],
    dangerPower: 1,
    searchDifficult: 3,
    text: [
        `Пока эта карта является активно локацией, она получает ${Actions.SPECIAL}: Когда персонаж отправляется на квест, нанесите ему 1 повреждение`,
    ],
    shadowEffect: [
        `${Tags.SHADOW_EFFECT}: Если игроки ещё не пересекли Андуин, верните активную локацию в район средоточения. Эта карта становиться активной локацией`
    ],
    image: ImageBack,
};

export default Morgulduin;
