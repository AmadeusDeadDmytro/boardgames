import { AdventureCardsType, PlayerCardsType } from '../types/cards'

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
import Glorfindel from './heroes/Glorfindel'
import Dwalin from './heroes/Dwalin'
import Elanor from './heroes/Elanor'
import Dungir from './heroes/Dungir'
import Eovin from './heroes/Eovin'
import FrodoBeggins from './heroes/FrodoBeggins'
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
import SignalLights from './events/SignalLights'
import BeatifulPlace from './events/BeatifulPlace'
import Giltoniel from './events/Giltoniel'
import OutOfSight from './events/OutOfSight'
import ElrondsCouncil from './events/ElrondsCouncil'
import NewFriendship from './events/NewFriendship'
import IgnoringTheDrakness from './events/IgnoringTheDrakness'
import IncredibleSpeed from './events/IncredibleSpeed'
import WeAreNotSleeping from './events/WeAreNorSleeping'
import CavalryThrow from './events/CavalryThrow'
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
import Messenger from './allies/Messenger'
import CitadelKeeper from './allies/CitadelKeeper'
import LongbeardedOldman from './allies/LongbeardedOldman'
import Erestor from './allies/Erestor'
import DunadanWanderer from './allies/DunadanWanderer'
import DunadanObserver from './allies/DunadanObserver'
import WellaimedTook from './allies/WellaimedTook'
import CitadelGuard from './allies/CitadelGuard'
import Faramir from './allies/Faramir'
import SonOfArnor from './allies/SonOfArnor'
import BrockIronFist from './allies/BrockIronFist'
import LongbeardOrcSlayer from './allies/LongbeardOrcSlayer'
import ArcherOfTheSilverStream from './allies/ArcherOfTheSilverStream'
import SnowStreamScout from './allies/SnowStreamScout'
// ADVENTURES
import ExceedingAllExpectations from './adventures/concentration_in_osgiliath/ExceedingAllExpectations'
import RangerIthilien from './target/RangerIthilien'
import ConcentrationInOsgiliath from './danger/ConcentrationInOsgiliath'
import DarkPursuit from './danger/DarkPursuit'
import CutOff from './danger/CutOff'

export const PlayerCards: PlayerCardsType = {
    TacticHeroesDeck: [
        Beregond,
        Hama,
        Elladan,
        Boromir,
        Talin,
        Legolas,
        Gimli,
        BrandSonBain,
    ],
    TacticEventsDeck: [
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
        CircularDefense,
    ],
    TacticItemsDeck: [
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
        CitadelArmor,
    ],
    TacticAllyDeck: [
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
        FiledByTheLordOfTheWind,
    ],
    LeadershipHeroDeck: [
        BoromirLeadership,
        Elrohir,
        Gloin,
        Teodred,
        Aragorn,
        PrinceImrahil,
        DainIronHeel,
    ],
    LeadershipEventDeck: [
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
        Lunch,
    ],
    LeadershipItemDeck: [
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
        CelebrianStone,
    ],
    LeadershipAllyDeck: [
        Messenger,
        CitadelKeeper,
        LongbeardedOldman,
        Erestor,
        DunadanWanderer,
        DunadanObserver,
        WellaimedTook,
        CitadelGuard,
        Faramir,
        SonOfArnor,
        BrockIronFist,
        LongbeardOrcSlayer,
        ArcherOfTheSilverStream,
        SnowStreamScout,
    ],
    SpiritHeroDeck: [
        Glorfindel,
        Dwalin,
        Elanor,
        Dungir,
        Eovin,
        FrodoBeggins,
    ],
    SpiritEventDeck: [
        SignalLights,
        BeatifulPlace,
        Giltoniel,
        OutOfSight,
        ElrondsCouncil,
        NewFriendship,
        IgnoringTheDrakness,
        IncredibleSpeed,
        WeAreNotSleeping,
        CavalryThrow,
        // TODO: Complete this list
    ],
}
// TODO: SPIRIT ITEMS AND ALLYS
// TODO: LORE CARDS

export const AdventureCards: AdventureCardsType = {
    concentration_in_osgiliath: {
        adventureCards: [
            ExceedingAllExpectations,
        ],
        cards: [
            RangerIthilien,
            ConcentrationInOsgiliath,
            ConcentrationInOsgiliath,
            ConcentrationInOsgiliath,
            DarkPursuit,
            DarkPursuit,
            CutOff,
            CutOff,
            CutOff,
            CutOff
        ],
    },
    // TODO: OTHER ADVENTURES
}
