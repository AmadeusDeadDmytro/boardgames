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
import BoromirLeadership from './heroes/Boromir_leadership'
import Elrohir from './heroes/Elrohir'
import Gloin from './heroes/Gloin'
import Teodred from './heroes/Teodred'
import Aragorn from './heroes/Aragorn'
import PrinceImrahil from './heroes/PrinceImrahil'
import DainIronHeel from './heroes/DainIronHeel'
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
import MutuallyBeneficialUnion from './events/MutuallyBeneficialUnion'
import RichesOfGondor from './events/RichesOfGondor'
import Teamwork from './events/Teamwork'
import FreshFootprints from './events/FreshFootprints'
import GraveMadeOfStones from './events/GraveMadeOfStones'
import ReachTheEnd from './events/ReachTheEnd'
import TakeTheInitiative from './events/TakeTheInitiative'
import TimelyAssistance from './events/TimelyAssistance'
import DurinSong from './events/DurinSong'
import OnlyForward from './events/OnlyForward'
import Rearguard from './events/Rearguard'
import PartingGifts from './events/PartingGIfts'
import CaughtTheDawn from './events/CaughtTheDawn'
import CampfireStories from './events/CampfireStories'
import Vigilance from './events/Vigilance'
import CommonCause from './events/CommonCause'
import HeroicDeath from './events/HeroicDeath'
import CovertAttack from './events/CovertAttack'
import ForGondor from './events/ForGondor'
import UnbendingDetermination from './events/UnbendingDetermination'
import Lunch from './events/Lunch'
// ITEMS
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
import ClearLeadership from './items/ClearLeadership'
import PathOfFate from './items/PathOfFate'
import BrokenSword from './items/BrokenSword'
import NarviBelt from './items/NarviBelt'
import DunadanMark from './items/DunadanMark'
import DunadanStock from './items/DunadanStock'
import DunadanMission from './items/DunadanMission'
import StewardOfGondor from './items/StewardOfGondor'
import DunadanWarning from './items/DunadanWarning'
import DunadanLabel from './items/DunadanLabel'
import CelebrianStone from './items/CelebrianStone'

// ALLIES
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

export const TacticHeroesDeck: Array<ICard> = [
    Beregond,
    Hama,
    Elladan,
    Boromir,
    Talin,
    Legolas,
    Gimli,
    BrandSonBain,
]
export const TacticEventsDeck: Array<ICard> = [
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
export const TacticItemsDeck: Array<ICard> = [
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

export const TacticAllyDeck: Array<ICard> = [
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

export const LeadershipHeroDeck: Array<ICard> = [
    BoromirLeadership,
    Elrohir,
    Gloin,
    Teodred,
    Aragorn,
    PrinceImrahil,
    DainIronHeel
]

export const LeadershipEventDeck: Array<ICard> = [
    MutuallyBeneficialUnion,
    RichesOfGondor,
    Teamwork,
    FreshFootprints,
    GraveMadeOfStones,
    ReachTheEnd,
    TakeTheInitiative,
    TimelyAssistance,
    DurinSong,
    OnlyForward,
    Rearguard,
    PartingGifts,
    CaughtTheDawn,
    CampfireStories,
    Vigilance,
    CommonCause,
    HeroicDeath,
    CovertAttack,
    ForGondor,
    UnbendingDetermination,
    Lunch
]

export const LeadershipItemDeck: Array<ICard> = [
    ClearLeadership,
    PathOfFate,
    BrokenSword,
    NarviBelt,
    DunadanMark,
    DunadanStock,
    DunadanMission,
    StewardOfGondor,
    DunadanWarning,
    DunadanLabel,
    CelebrianStone
]