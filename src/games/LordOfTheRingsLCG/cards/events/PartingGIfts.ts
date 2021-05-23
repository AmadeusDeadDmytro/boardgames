import {
    Actions, CardTypes, EventCardType, Icons, Spheres,
} from '../../types/cards'
import ImageBack from '../../images/cards/parting_gifts.png'

const PartingGifts: EventCardType = {
    type: CardTypes.EVENT,
    sphere: Spheres.LEADERSHIP,
    isUnique: false,
    name: 'Прощальные подарки',
    text: [
        `${Actions.ACTION}: Переместите любое количество ресурсов из запаса ${Icons.LEADERSHIP} героя в запас любого другого героя`,
    ],
    quote: '"Внутри холл был завален множеством свертков, тюков и даже небольшими предметами мебели" - Братство кольца',
    price: 0,
    image: ImageBack,
}

export default PartingGifts
