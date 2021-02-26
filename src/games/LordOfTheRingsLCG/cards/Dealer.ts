import { ICard } from '../types/cards'

// HEROES
import Beregond from './heroes/Beregond'
import Hama from './heroes/Hama'
import Elladan from './heroes/Elladan'
import Boromir from './heroes/Boromir'
import Talin from './heroes/Talin'
import Legolas from './heroes/Legolas'
import Gimli from './heroes/Gimli'
import BrandSonBain from './heroes/BrandSonBain'
// EVENTS
import BehindStrongWalls from './events/BehindStrongWalls'
import AimedShot from './events/AimedShot'

export const HeroesDeck: Array<ICard> = [Beregond, Hama, Elladan, Boromir, Talin, Legolas, Gimli, BrandSonBain]
export const EventsDeck: Array<ICard> = [BehindStrongWalls, AimedShot]


