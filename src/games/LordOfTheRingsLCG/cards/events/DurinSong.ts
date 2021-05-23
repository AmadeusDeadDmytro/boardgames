import {
    Actions, CardTypes, EventCardType, Icons, Spheres, Tags,
} from '../../types/cards'
import ImageBack from '../../images/cards/durin_song.png'

const DurinSong: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Песнь Дурина',
    tags: [Tags.SONG],
    text: [
        `${Actions.ACTION}: Выберите героя с чертой ${Tags.GNOME}. Выбранный герой получает +2${Icons.ATTACK}, +2${Icons.SHIELD} и +2${Icons.WILLPOWER} до конца раунда`,
    ],
    price: 1,
    image: ImageBack,
}

export default DurinSong
