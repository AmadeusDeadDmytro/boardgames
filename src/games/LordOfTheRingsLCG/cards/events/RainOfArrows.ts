import { Actions, CardTypes, EventCardType } from '../../types/cards'
import ImageBack from '../../images/cards/rain_of_arrows.png'

const RainOfArrows: EventCardType = {
    type: CardTypes.EVENT,
    name: 'Дождь из стрел',
    text: [
        `${Actions.ACTION}: Закройте персонажа со способностью Дальнобойный под вашим контролем, чтобы выбрать игрока. Нанесите по 1 повреждению каждому противнику в зоне этого игрока`
    ],
    price: 1,
    quote: `"Смертоносный ливень из стрел, падавших столь же часто как потоки дождя, обрушился на крепостные стены. Со свистом стрелы впивались в людей." - Две Твердыни`,
    image: ImageBack
}

export default RainOfArrows


