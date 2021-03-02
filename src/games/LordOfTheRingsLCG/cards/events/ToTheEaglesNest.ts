import { Actions, CardTypes, EventCardType, Tags } from '../../types/cards'
import ImageBack from '../../images/cards/to_the_eagles_nest.png'

const ToTheEaglesNest: EventCardType = {
    type: CardTypes.EVENT,
    name: 'В орлиное гнездо',
    text: [
        `${Actions.REACTION}: После того как союзник уничтожен, закройте 1 персонажа с чертой ${Tags.EAGLE}, чтобы переместить покидающего игру союзника из сброса в руку его владельца`],
    price: 2,
    quote: `"Бледные пики гор приближались. Залиттые лунным светом, острые выступы скал выделялись на фоне черных теней." - Хоббит`,
    image: ImageBack,
}

export default ToTheEaglesNest
