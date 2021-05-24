import { CardTypes, AdventureCardType, Tags, Adventures } from '../../../types/cards'
import AdventureImage from '../../../images/cards/exceeding_in_osgiliath.png'

const ExceedingAllExpectations: AdventureCardType = {
    type: CardTypes.ADVENTURE,
    title: 'Превосходя все ожидания',
    adventure: Adventures.CONCENTRATION_IN_OSGILIATH,
    description: `
        Тревожные вести о повышенной активности орков в районе Итилиена вынуждают вас направиться на разведку. Войдя в Осгилиат и переправившись через реку, вы видите, 
        как к окраинам города по Маргульськой дороге спускается орда захватчиков, первосходящая все ожидания
    `,
    text: [
        `${Tags.PREPARATION}: Найдите в колоде столкновения 12 карт с чертой ${Tags.SCOUT} и положите по 3 на игрока (по одной с разным названием) в район средоточения.
        Уберите из игры Короля-колдуна. Затем замешайте оставшиеся карты с чертой ${Tags.SCOUT} назад в колоду столкновений`,
    ],
    image: AdventureImage,
}

export default ExceedingAllExpectations
