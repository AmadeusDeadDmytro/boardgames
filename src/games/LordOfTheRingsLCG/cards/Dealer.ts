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
import HeavyBlow from './events/HeavyBlow'
import HailOfStones from './events/HailOfStones'
import HiddenFlow from './events/HiddenFlow'
import KazadKazad from './events/KazadKazad'
import Fint from './events/Fint'
import FastLunge from './events/FastLunge'
import EaglesFly from './events/EaglesFly'
import RainOfArrows from './events/RainOfArrows'
import ForestOfSpears from './events/ForestOfSpears'
import MeneldorsFlight from './events/MeneldorsFlight'
import QuickBlow from './events/QuickBlow'
import ToTheEaglesNest from './events/ToTheEaglesNest'
import SkillWithBlades from './events/SkillWithBlades'
import CircularDefense from './events/CircularDefense'
import SpearOfTheCitadel from './items/SpearOfTheCitadel'
import ChainMail from './items/ChainMail'
import RivendellBow from './items/RivendellBow'
import RivendellBlade from './items/RivendellBlade'
import KeepCounting from './items/KeepCounting'
import DwarrowdelphAx from './items/DwarrowdelphAx'
import BornInHeaven from './items/BornInHeaven'
import Teaser from './items/Teaser'
import GnomishAx from './items/GnomishAx'
import BladeOfGondolin from './items/BladeOfGondolin'
import EaglesSupport from './items/EaglesSupport'
import HornOfGondor from './items/HornOfGondor'
import CitadelArmor from './items/CitadelArmor'
import RammasDefender from './allies/RammasDefender'
import TrollHunter from './allies/TrollHunter'
import EreborWarmaster from './allies/EreborWarmaster'
import SentryBruinen from './allies/SentryBruinen'
import VeteranOfNanduhirion from './allies/VeteranOfNanduhirion'
import Beorn from './allies/Beorn'
import Landraval from './allies/Landraval'
import SwordFightingVeteran from './allies/SwordFightingVeteran'
import GondorianSpearman from './allies/GondorianSpearman'
import HorseArcher from './allies/HorseArcher'
import WingedGuardian from './allies/WingedGuardian'
import EaglesOfTheMistyMountains from './allies/EaglesOfTheMistyMountains'
import DescendantOfThorondor from './allies/DescendantOfThorondor'
import BeorningBeekeeper from './allies/BeorningBeekeeper'
import FiledByTheLordOfTheWind from './allies/FiledByTheLordOfTheWind'

export const HeroesDeck: Array<ICard> = [
    Beregond,
    Hama,
    Elladan,
    Boromir,
    Talin,
    Legolas,
    Gimli,
    BrandSonBain,
]
export const EventsDeck: Array<ICard> = [
    BehindStrongWalls,
    AimedShot,
    HeavyBlow,
    HailOfStones,
    HiddenFlow,
    KazadKazad,
    Fint,
    FastLunge,
    EaglesFly,
    RainOfArrows,
    ForestOfSpears,
    MeneldorsFlight,
    QuickBlow,
    ToTheEaglesNest,
    SkillWithBlades,
    CircularDefense
]
export const ItemsDeck: Array<ICard> = [
    SpearOfTheCitadel,
    ChainMail,
    RivendellBow,
    RivendellBlade,
    KeepCounting,
    DwarrowdelphAx,
    BornInHeaven,
    Teaser,
    GnomishAx,
    BladeOfGondolin,
    EaglesSupport,
    HornOfGondor,
    CitadelArmor
]

export const AllyDeck: Array<ICard> = [
    RammasDefender,
    TrollHunter,
    EreborWarmaster,
    SentryBruinen,
    VeteranOfNanduhirion,
    Beorn,
    Landraval,
    SwordFightingVeteran,
    GondorianSpearman,
    HorseArcher,
    WingedGuardian,
    EaglesOfTheMistyMountains,
    DescendantOfThorondor,
    BeorningBeekeeper,
    FiledByTheLordOfTheWind
]