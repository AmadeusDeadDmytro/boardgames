import {
    Tags, CardTypes, Adventures, LocationCardType, Actions,
} from '../../types/cards'
import ImageBack from '../../images/cards/watch_emin_arnen.png'

const WatchEminArnen: LocationCardType = {
    type: CardTypes.LOCATION,
    isUnique: false,
    name: 'Дозор Эмин-Арнен',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    tags: [Tags.EAST_COAST, Tags.HIGHLANDS],
    dangerPower: 2,
    searchDifficult: 5,
    text: [
        `Первый в ход противник с чертой ${Tags.SCOUT}, взятый из колоды столкновений, получает особенность Обреченный 2 и наплыв`,
    ],
    shadowEffect: [],
    image: ImageBack,
    quote: 'И пожаловал Арагорн Фарамиру княжество Итилиен во владение, да повелел поселиться в столице тех земель, что возвышались на холмах Эмин-Арнен, - Возвращение Короля'
};

export default WatchEminArnen;
