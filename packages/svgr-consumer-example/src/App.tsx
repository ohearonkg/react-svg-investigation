import React from "react";
import "./App.css";
import {
  Activity,
  AlarmFill,
  Alarm,
  AlignBottom,
  AlignCenter,
  AlignEnd,
  AlignMiddle,
  AlignStart,
  AlignTop,
  Alt,
  AppIndicator,
  Apple,
  ArchiveFill,
  Archive,
  Arrow90DegDown,
  Arrow90DegLeft,
  Arrow90DegRight,
  Arrow90DegUp,
  ArrowBarDown,
  ArrowBarLeft,
  ArrowBarRight,
  ArrowBarUp,
  ArrowClockwise,
  ArrowCounterclockwise,
  ArrowDownCircleFill,
  ArrowDownCircle,
  ArrowDownLeftCircleFill,
  ArrowDownLeftCircle,
  ArrowDownLeftSquareFill,
  ArrowDownLeftSquare,
  ArrowDownLeft,
  ArrowDownRightCircleFill,
  ArrowDownRightCircle,
  ArrowDownRightSquareFill,
  ArrowDownRightSquare,
  ArrowDownRight,
  ArrowDownShort,
  ArrowDownSquareFill,
  ArrowDownSquare,
  ArrowDown,
  ArrowDownUp,
  ArrowLeftCircleFill,
  ArrowLeftCircle,
  ArrowLeftRight,
  ArrowLeftShort,
  ArrowLeftSquareFill,
  ArrowLeftSquare,
  ArrowLeft,
  ArrowRepeat,
  ArrowReturnLeft,
  ArrowReturnRight,
  ArrowRightCircleFill,
  ArrowRightCircle,
  ArrowRightShort,
  ArrowRightSquareFill,
  ArrowRightSquare,
  ArrowRight,
  ArrowsAngleContract,
  ArrowsAngleExpand,
  ArrowsCollapse,
  ArrowsExpand,
  ArrowsFullscreen,
  ArrowsMove,
  ArrowThroughHeartFill,
  ArrowThroughHeart,
  ArrowUpCircleFill,
  ArrowUpCircle,
  ArrowUpLeftCircleFill,
  ArrowUpLeftCircle,
  ArrowUpLeftSquareFill,
  ArrowUpLeftSquare,
  ArrowUpLeft,
  ArrowUpRightCircleFill,
  ArrowUpRightCircle,
  ArrowUpRightSquareFill,
  ArrowUpRightSquare,
  ArrowUpRight,
  ArrowUpShort,
  ArrowUpSquareFill,
  ArrowUpSquare,
  ArrowUp,
  AspectRatioFill,
  AspectRatio,
  Asterisk,
  At,
  AwardFill,
  Award,
  BackspaceFill,
  BackspaceReverseFill,
  BackspaceReverse,
  Backspace,
  Back,
  Badge3DFill,
  Badge3D,
  Badge4KFill,
  Badge4K,
  Badge8KFill,
  Badge8K,
  BadgeAdFill,
  BadgeAd,
  BadgeArFill,
  BadgeAr,
  BadgeCcFill,
  BadgeCc,
  BadgeHdFill,
  BadgeHd,
  BadgeSdFill,
  BadgeSd,
  BadgeTmFill,
  BadgeTm,
  BadgeVoFill,
  BadgeVo,
  BadgeVrFill,
  BadgeVr,
  BadgeWcFill,
  BadgeWc,
  BagCheckFill,
  BagCheck,
  BagDashFill,
  BagDash,
  BagFill,
  BagHeartFill,
  BagHeart,
  BagPlusFill,
  BagPlus,
  Bag,
  BagXFill,
  BagX,
  BalloonFill,
  BalloonHeartFill,
  BalloonHeart,
  Balloon,
  BandaidFill,
  Bandaid,
  Bank2,
  Bank,
  BarChartFill,
  BarChartLineFill,
  BarChartLine,
  BarChartSteps,
  BarChart,
  Basket2Fill,
  Basket2,
  Basket3Fill,
  Basket3,
  BasketFill,
  Basket,
  BatteryCharging,
  BatteryFull,
  BatteryHalf,
  Battery,
  Behance,
  BellFill,
  BellSlashFill,
  BellSlash,
  Bell,
  Bezier2,
  Bezier,
  Bicycle,
  BinocularsFill,
  Binoculars,
  BlockquoteLeft,
  BlockquoteRight,
  Bluetooth,
  BodyText,
  BookFill,
  BookHalf,
  BookmarkCheckFill,
  BookmarkCheck,
  BookmarkDashFill,
  BookmarkDash,
  BookmarkFill,
  BookmarkHeartFill,
  BookmarkHeart,
  BookmarkPlusFill,
  BookmarkPlus,
  BookmarksFill,
  BookmarkStarFill,
  BookmarkStar,
  Bookmarks,
  Bookmark,
  BookmarkXFill,
  BookmarkX,
  Bookshelf,
  Book,
  BoomboxFill,
  Boombox,
  BootstrapFill,
  BootstrapReboot,
  Bootstrap,
  BorderAll,
  BorderBottom,
  BorderCenter,
  BorderInner,
  BorderLeft,
  BorderMiddle,
  BorderOuter,
  BorderRight,
  BorderStyle,
  BorderTop,
  Border,
  BorderWidth,
  BoundingBoxCircles,
  BoundingBox,
  Box2Fill,
  Box2HeartFill,
  Box2Heart,
  Box2,
  BoxArrowDownLeft,
  BoxArrowDownRight,
  BoxArrowDown,
  BoxArrowInDownLeft,
  BoxArrowInDownRight,
  BoxArrowInDown,
  BoxArrowInLeft,
  BoxArrowInRight,
  BoxArrowInUpLeft,
  BoxArrowInUpRight,
  BoxArrowInUp,
  BoxArrowLeft,
  BoxArrowRight,
  BoxArrowUpLeft,
  BoxArrowUpRight,
  BoxArrowUp,
  Boxes,
  BoxSeam,
  Box,
  BracesAsterisk,
  Braces,
  Bricks,
  BriefcaseFill,
  Briefcase,
  BrightnessAltHighFill,
  BrightnessAltHigh,
  BrightnessAltLowFill,
  BrightnessAltLow,
  BrightnessHighFill,
  BrightnessHigh,
  BrightnessLowFill,
  BrightnessLow,
  BroadcastPin,
  Broadcast,
  BrushFill,
  Brush,
  BucketFill,
  Bucket,
  BugFill,
  Bug,
  Building,
  Bullseye,
  CalculatorFill,
  Calculator,
  Calendar2CheckFill,
  Calendar2Check,
  Calendar2DateFill,
  Calendar2Date,
  Calendar2DayFill,
  Calendar2Day,
  Calendar2EventFill,
  Calendar2Event,
  Calendar2Fill,
  Calendar2HeartFill,
  Calendar2Heart,
  Calendar2MinusFill,
  Calendar2Minus,
  Calendar2MonthFill,
  Calendar2Month,
  Calendar2PlusFill,
  Calendar2Plus,
  Calendar2RangeFill,
  Calendar2Range,
  Calendar2,
  Calendar2WeekFill,
  Calendar2Week,
  Calendar2XFill,
  Calendar2X,
  Calendar3EventFill,
  Calendar3Event,
  Calendar3Fill,
  Calendar3RangeFill,
  Calendar3Range,
  Calendar3,
  Calendar3WeekFill,
  Calendar3Week,
  Calendar4Event,
  Calendar4Range,
  Calendar4,
  Calendar4Week,
  CalendarCheckFill,
  CalendarCheck,
  CalendarDateFill,
  CalendarDate,
  CalendarDayFill,
  CalendarDay,
  CalendarEventFill,
  CalendarEvent,
  CalendarFill,
  CalendarHeartFill,
  CalendarHeart,
  CalendarMinusFill,
  CalendarMinus,
  CalendarMonthFill,
  CalendarMonth,
  CalendarPlusFill,
  CalendarPlus,
  CalendarRangeFill,
  CalendarRange,
  Calendar,
  CalendarWeekFill,
  CalendarWeek,
  CalendarXFill,
  CalendarX,
  Camera2,
  CameraFill,
  CameraReelsFill,
  CameraReels,
  Camera,
  CameraVideoFill,
  CameraVideoOffFill,
  CameraVideoOff,
  CameraVideo,
  CapslockFill,
  Capslock,
  CardChecklist,
  CardHeading,
  CardImage,
  CardList,
  CardText,
  CaretDownFill,
  CaretDownSquareFill,
  CaretDownSquare,
  CaretDown,
  CaretLeftFill,
  CaretLeftSquareFill,
  CaretLeftSquare,
  CaretLeft,
  CaretRightFill,
  CaretRightSquareFill,
  CaretRightSquare,
  CaretRight,
  CaretUpFill,
  CaretUpSquareFill,
  CaretUpSquare,
  CaretUp,
  Cart2,
  Cart3,
  Cart4,
  CartCheckFill,
  CartCheck,
  CartDashFill,
  CartDash,
  CartFill,
  CartPlusFill,
  CartPlus,
  Cart,
  CartXFill,
  CartX,
  CashCoin,
  CashStack,
  Cash,
  Cast,
  ChatDotsFill,
  ChatDots,
  ChatFill,
  ChatHeartFill,
  ChatHeart,
  ChatLeftDotsFill,
  ChatLeftDots,
  ChatLeftFill,
  ChatLeftHeartFill,
  ChatLeftHeart,
  ChatLeftQuoteFill,
  ChatLeftQuote,
  ChatLeftTextFill,
  ChatLeftText,
  ChatLeft,
  ChatQuoteFill,
  ChatQuote,
  ChatRightDotsFill,
  ChatRightDots,
  ChatRightFill,
  ChatRightHeartFill,
  ChatRightHeart,
  ChatRightQuoteFill,
  ChatRightQuote,
  ChatRightTextFill,
  ChatRightText,
  ChatRight,
  ChatSquareDotsFill,
  ChatSquareDots,
  ChatSquareFill,
  ChatSquareHeartFill,
  ChatSquareHeart,
  ChatSquareQuoteFill,
  ChatSquareQuote,
  ChatSquareTextFill,
  ChatSquareText,
  ChatSquare,
  ChatTextFill,
  ChatText,
  Chat,
  Check2All,
  Check2Circle,
  Check2Square,
  Check2,
  CheckAll,
  CheckCircleFill,
  CheckCircle,
  CheckLg,
  CheckSquareFill,
  CheckSquare,
  Check,
  ChevronBarContract,
  ChevronBarDown,
  ChevronBarExpand,
  ChevronBarLeft,
  ChevronBarRight,
  ChevronBarUp,
  ChevronCompactDown,
  ChevronCompactLeft,
  ChevronCompactRight,
  ChevronCompactUp,
  ChevronContract,
  ChevronDoubleDown,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  ChevronDoubleUp,
  ChevronDown,
  ChevronExpand,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleFill,
  CircleHalf,
  CircleSquare,
  Circle,
  Clipboard2CheckFill,
  Clipboard2Check,
  Clipboard2DataFill,
  Clipboard2Data,
  Clipboard2Fill,
  Clipboard2HeartFill,
  Clipboard2Heart,
  Clipboard2MinusFill,
  Clipboard2Minus,
  Clipboard2PlusFill,
  Clipboard2Plus,
  Clipboard2PulseFill,
  Clipboard2Pulse,
  Clipboard2,
  Clipboard2XFill,
  Clipboard2X,
  ClipboardCheckFill,
  ClipboardCheck,
  ClipboardDataFill,
  ClipboardData,
  ClipboardFill,
  ClipboardHeartFill,
  ClipboardHeart,
  ClipboardMinusFill,
  ClipboardMinus,
  ClipboardPlusFill,
  ClipboardPlus,
  ClipboardPulse,
  Clipboard,
  ClipboardXFill,
  ClipboardX,
  ClockFill,
  ClockHistory,
  Clock,
  CloudArrowDownFill,
  CloudArrowDown,
  CloudArrowUpFill,
  CloudArrowUp,
  CloudCheckFill,
  CloudCheck,
  CloudDownloadFill,
  CloudDownload,
  CloudDrizzleFill,
  CloudDrizzle,
  CloudFill,
  CloudFog2Fill,
  CloudFog2,
  CloudFogFill,
  CloudFog,
  CloudHailFill,
  CloudHail,
  CloudHaze2Fill,
  CloudHaze2,
  CloudHazeFill,
  CloudHaze,
  CloudLightningFill,
  CloudLightningRainFill,
  CloudLightningRain,
  CloudLightning,
  CloudMinusFill,
  CloudMinus,
  CloudMoonFill,
  CloudMoon,
  CloudPlusFill,
  CloudPlus,
  CloudRainFill,
  CloudRainHeavyFill,
  CloudRainHeavy,
  CloudRain,
  CloudsFill,
  CloudSlashFill,
  CloudSlash,
  CloudSleetFill,
  CloudSleet,
  CloudSnowFill,
  CloudSnow,
  Clouds,
  CloudSunFill,
  CloudSun,
  Cloud,
  CloudUploadFill,
  CloudUpload,
  CloudyFill,
  Cloudy,
  CodeSlash,
  CodeSquare,
  Code,
  Coin,
  CollectionFill,
  CollectionPlayFill,
  CollectionPlay,
  Collection,
  ColumnsGap,
  Columns,
  Command,
  CompassFill,
  Compass,
  ConeStriped,
  Cone,
  Controller,
  CpuFill,
  Cpu,
  CreditCard2BackFill,
  CreditCard2Back,
  CreditCard2FrontFill,
  CreditCard2Front,
  CreditCardFill,
  CreditCard,
  Crop,
  CupFill,
  CupStraw,
  Cup,
  CurrencyBitcoin,
  CurrencyDollar,
  CurrencyEuro,
  CurrencyExchange,
  CurrencyPound,
  CurrencyYen,
  CursorFill,
  CursorText,
  Cursor,
  DashCircleDotted,
  DashCircleFill,
  DashCircle,
  DashLg,
  DashSquareDotted,
  DashSquareFill,
  DashSquare,
  Dash,
  DeviceHddFill,
  DeviceHdd,
  DeviceSsdFill,
  DeviceSsd,
  Diagram2Fill,
  Diagram2,
  Diagram3Fill,
  Diagram3,
  DiamondFill,
  DiamondHalf,
  Diamond,
  Dice1Fill,
  Dice1,
  Dice2Fill,
  Dice2,
  Dice3Fill,
  Dice3,
  Dice4Fill,
  Dice4,
  Dice5Fill,
  Dice5,
  Dice6Fill,
  Dice6,
  DiscFill,
  Discord,
  Disc,
  DisplayFill,
  DisplayportFill,
  Displayport,
  Display,
  DistributeHorizontal,
  DistributeVertical,
  DoorClosedFill,
  DoorClosed,
  DoorOpenFill,
  DoorOpen,
  Dot,
  Download,
  DpadFill,
  Dpad,
  Dribbble,
  DropletFill,
  DropletHalf,
  Droplet,
  Earbuds,
  EarFill,
  Ear,
  Easel2Fill,
  Easel2,
  Easel3Fill,
  Easel3,
  EaselFill,
  Easel,
  EggFill,
  EggFried,
  Egg,
  EjectFill,
  Eject,
  EmojiAngryFill,
  EmojiAngry,
  EmojiDizzyFill,
  EmojiDizzy,
  EmojiExpressionlessFill,
  EmojiExpressionless,
  EmojiFrownFill,
  EmojiFrown,
  EmojiHeartEyesFill,
  EmojiHeartEyes,
  EmojiKissFill,
  EmojiKiss,
  EmojiLaughingFill,
  EmojiLaughing,
  EmojiNeutralFill,
  EmojiNeutral,
  EmojiSmileFill,
  EmojiSmile,
  EmojiSmileUpsideDownFill,
  EmojiSmileUpsideDown,
  EmojiSunglassesFill,
  EmojiSunglasses,
  EmojiWinkFill,
  EmojiWink,
  EnvelopeCheckFill,
  EnvelopeCheck,
  EnvelopeDashFill,
  EnvelopeDash,
  EnvelopeExclamationFill,
  EnvelopeExclamation,
  EnvelopeFill,
  EnvelopeHeartFill,
  EnvelopeHeart,
  EnvelopeOpenFill,
  EnvelopeOpenHeartFill,
  EnvelopeOpenHeart,
  EnvelopeOpen,
  EnvelopePaperFill,
  EnvelopePaperHeartFill,
  EnvelopePaperHeart,
  EnvelopePaper,
  EnvelopePlusFill,
  EnvelopePlus,
  EnvelopeSlashFill,
  EnvelopeSlash,
  Envelope,
  EnvelopeXFill,
  EnvelopeX,
  EraserFill,
  Eraser,
  Ethernet,
  ExclamationCircleFill,
  ExclamationCircle,
  ExclamationDiamondFill,
  ExclamationDiamond,
  ExclamationLg,
  ExclamationOctagonFill,
  ExclamationOctagon,
  ExclamationSquareFill,
  ExclamationSquare,
  ExclamationTriangleFill,
  ExclamationTriangle,
  Exclamation,
  Exclude,
  ExplicitFill,
  Explicit,
  Eyedropper,
  EyeFill,
  Eyeglasses,
  EyeSlashFill,
  EyeSlash,
  Eye,
  Facebook,
  Fan,
  FileArrowDownFill,
  FileArrowDown,
  FileArrowUpFill,
  FileArrowUp,
  FileBarGraphFill,
} from "svgr-lib";

function App() {
  const [state, setState] = React.useState(false);

  return (
    <>
      <h1> Sample </h1>
      <button onClick={() => setState((state) => !state)}> Click Me </button>

      <hr />

      <Activity />
      <AlarmFill />
      <Alarm />
      <AlignBottom />
      <AlignCenter />
      <AlignEnd />
      <AlignMiddle />
      <AlignStart />
      <AlignTop />
      <Alt />
      <AppIndicator />
      <Apple />
      <ArchiveFill />
      <Archive />
      <Arrow90DegDown />
      <Arrow90DegLeft />
      <Arrow90DegRight />
      <Arrow90DegUp />
      <ArrowBarDown />
      <ArrowBarLeft />
      <ArrowBarRight />
      <ArrowBarUp />
      <ArrowClockwise />
      <ArrowCounterclockwise />
      <ArrowDownCircleFill />
      <ArrowDownCircle />
      <ArrowDownLeftCircleFill />
      <ArrowDownLeftCircle />
      <ArrowDownLeftSquareFill />
      <ArrowDownLeftSquare />
      <ArrowDownLeft />
      <ArrowDownRightCircleFill />
      <ArrowDownRightCircle />
      <ArrowDownRightSquareFill />
      <ArrowDownRightSquare />
      <ArrowDownRight />
      <ArrowDownShort />
      <ArrowDownSquareFill />
      <ArrowDownSquare />
      <ArrowDown />
      <ArrowDownUp />
      <ArrowLeftCircleFill />
      <ArrowLeftCircle />
      <ArrowLeftRight />
      <ArrowLeftShort />
      <ArrowLeftSquareFill />
      <ArrowLeftSquare />
      <ArrowLeft />
      <ArrowRepeat />
      <ArrowReturnLeft />
      <ArrowReturnRight />
      <ArrowRightCircleFill />
      <ArrowRightCircle />
      <ArrowRightShort />
      <ArrowRightSquareFill />
      <ArrowRightSquare />
      <ArrowRight />
      <ArrowsAngleContract />
      <ArrowsAngleExpand />
      <ArrowsCollapse />
      <ArrowsExpand />
      <ArrowsFullscreen />
      <ArrowsMove />
      <ArrowThroughHeartFill />
      <ArrowThroughHeart />
      <ArrowUpCircleFill />
      <ArrowUpCircle />
      <ArrowUpLeftCircleFill />
      <ArrowUpLeftCircle />
      <ArrowUpLeftSquareFill />
      <ArrowUpLeftSquare />
      <ArrowUpLeft />
      <ArrowUpRightCircleFill />
      <ArrowUpRightCircle />
      <ArrowUpRightSquareFill />
      <ArrowUpRightSquare />
      <ArrowUpRight />
      <ArrowUpShort />
      <ArrowUpSquareFill />
      <ArrowUpSquare />
      <ArrowUp />
      <AspectRatioFill />
      <AspectRatio />
      <Asterisk />
      <At />
      <AwardFill />
      <Award />
      <BackspaceFill />
      <BackspaceReverseFill />
      <BackspaceReverse />
      <Backspace />
      <Back />
      <Badge3DFill />
      <Badge3D />
      <Badge4KFill />
      <Badge4K />
      <Badge8KFill />
      <Badge8K />
      <BadgeAdFill />
      <BadgeAd />
      <BadgeArFill />
      <BadgeAr />
      <BadgeCcFill />
      <BadgeCc />
      <BadgeHdFill />
      <BadgeHd />
      <BadgeSdFill />
      <BadgeSd />
      <BadgeTmFill />
      <BadgeTm />
      <BadgeVoFill />
      <BadgeVo />
      <BadgeVrFill />
      <BadgeVr />
      <BadgeWcFill />
      <BadgeWc />
      <BagCheckFill />
      <BagCheck />
      <BagDashFill />
      <BagDash />
      <BagFill />
      <BagHeartFill />
      <BagHeart />
      <BagPlusFill />
      <BagPlus />
      <Bag />
      <BagXFill />
      <BagX />
      <BalloonFill />
      <BalloonHeartFill />
      <BalloonHeart />
      <Balloon />
      <BandaidFill />
      <Bandaid />
      <Bank2 />
      <Bank />
      <BarChartFill />
      <BarChartLineFill />
      <BarChartLine />
      <BarChartSteps />
      <BarChart />
      <Basket2Fill />
      <Basket2 />
      <Basket3Fill />
      <Basket3 />
      <BasketFill />
      <Basket />
      <BatteryCharging />
      <BatteryFull />
      <BatteryHalf />
      <Battery />
      <Behance />
      <BellFill />
      <BellSlashFill />
      <BellSlash />
      <Bell />
      <Bezier2 />
      <Bezier />
      <Bicycle />
      <BinocularsFill />
      <Binoculars />
      <BlockquoteLeft />
      <BlockquoteRight />
      <Bluetooth />
      <BodyText />
      <BookFill />
      <BookHalf />
      <BookmarkCheckFill />
      <BookmarkCheck />
      <BookmarkDashFill />
      <BookmarkDash />
      <BookmarkFill />
      <BookmarkHeartFill />
      <BookmarkHeart />
      <BookmarkPlusFill />
      <BookmarkPlus />
      <BookmarksFill />
      <BookmarkStarFill />
      <BookmarkStar />
      <Bookmarks />
      <Bookmark />
      <BookmarkXFill />
      <BookmarkX />
      <Bookshelf />
      <Book />
      <BoomboxFill />
      <Boombox />
      <BootstrapFill />
      <BootstrapReboot />
      <Bootstrap />
      <BorderAll />
      <BorderBottom />
      <BorderCenter />
      <BorderInner />
      <BorderLeft />
      <BorderMiddle />
      <BorderOuter />
      <BorderRight />
      <BorderStyle />
      <BorderTop />
      <Border />
      <BorderWidth />
      <BoundingBoxCircles />
      <BoundingBox />
      <Box2Fill />
      <Box2HeartFill />
      <Box2Heart />
      <Box2 />
      <BoxArrowDownLeft />
      <BoxArrowDownRight />
      <BoxArrowDown />
      <BoxArrowInDownLeft />
      <BoxArrowInDownRight />
      <BoxArrowInDown />
      <BoxArrowInLeft />
      <BoxArrowInRight />
      <BoxArrowInUpLeft />
      <BoxArrowInUpRight />
      <BoxArrowInUp />
      <BoxArrowLeft />
      <BoxArrowRight />
      <BoxArrowUpLeft />
      <BoxArrowUpRight />
      <BoxArrowUp />
      <Boxes />
      <BoxSeam />
      <Box />
      <BracesAsterisk />
      <Braces />
      <Bricks />
      <BriefcaseFill />
      <Briefcase />
      <BrightnessAltHighFill />
      <BrightnessAltHigh />
      <BrightnessAltLowFill />
      <BrightnessAltLow />
      <BrightnessHighFill />
      <BrightnessHigh />
      <BrightnessLowFill />
      <BrightnessLow />
      <BroadcastPin />
      <Broadcast />
      <BrushFill />
      <Brush />
      <BucketFill />
      <Bucket />
      <BugFill />
      <Bug />
      <Building />
      <Bullseye />
      <CalculatorFill />
      <Calculator />
      <Calendar2CheckFill />
      <Calendar2Check />
      <Calendar2DateFill />
      <Calendar2Date />
      <Calendar2DayFill />
      <Calendar2Day />
      <Calendar2EventFill />
      <Calendar2Event />
      <Calendar2Fill />
      <Calendar2HeartFill />
      <Calendar2Heart />
      <Calendar2MinusFill />
      <Calendar2Minus />
      <Calendar2MonthFill />
      <Calendar2Month />
      <Calendar2PlusFill />
      <Calendar2Plus />
      <Calendar2RangeFill />
      <Calendar2Range />
      <Calendar2 />
      <Calendar2WeekFill />
      <Calendar2Week />
      <Calendar2XFill />
      <Calendar2X />
      <Calendar3EventFill />
      <Calendar3Event />
      <Calendar3Fill />
      <Calendar3RangeFill />
      <Calendar3Range />
      <Calendar3 />
      <Calendar3WeekFill />
      <Calendar3Week />
      <Calendar4Event />
      <Calendar4Range />
      <Calendar4 />
      <Calendar4Week />
      <CalendarCheckFill />
      <CalendarCheck />
      <CalendarDateFill />
      <CalendarDate />
      <CalendarDayFill />
      <CalendarDay />
      <CalendarEventFill />
      <CalendarEvent />
      <CalendarFill />
      <CalendarHeartFill />
      <CalendarHeart />
      <CalendarMinusFill />
      <CalendarMinus />
      <CalendarMonthFill />
      <CalendarMonth />
      <CalendarPlusFill />
      <CalendarPlus />
      <CalendarRangeFill />
      <CalendarRange />
      <Calendar />
      <CalendarWeekFill />
      <CalendarWeek />
      <CalendarXFill />
      <CalendarX />
      <Camera2 />
      <CameraFill />
      <CameraReelsFill />
      <CameraReels />
      <Camera />
      <CameraVideoFill />
      <CameraVideoOffFill />
      <CameraVideoOff />
      <CameraVideo />
      <CapslockFill />
      <Capslock />
      <CardChecklist />
      <CardHeading />
      <CardImage />
      <CardList />
      <CardText />
      <CaretDownFill />
      <CaretDownSquareFill />
      <CaretDownSquare />
      <CaretDown />
      <CaretLeftFill />
      <CaretLeftSquareFill />
      <CaretLeftSquare />
      <CaretLeft />
      <CaretRightFill />
      <CaretRightSquareFill />
      <CaretRightSquare />
      <CaretRight />
      <CaretUpFill />
      <CaretUpSquareFill />
      <CaretUpSquare />
      <CaretUp />
      <Cart2 />
      <Cart3 />
      <Cart4 />
      <CartCheckFill />
      <CartCheck />
      <CartDashFill />
      <CartDash />
      <CartFill />
      <CartPlusFill />
      <CartPlus />
      <Cart />
      <CartXFill />
      <CartX />
      <CashCoin />
      <CashStack />
      <Cash />
      <Cast />
      <ChatDotsFill />
      <ChatDots />
      <ChatFill />
      <ChatHeartFill />
      <ChatHeart />
      <ChatLeftDotsFill />
      <ChatLeftDots />
      <ChatLeftFill />
      <ChatLeftHeartFill />
      <ChatLeftHeart />
      <ChatLeftQuoteFill />
      <ChatLeftQuote />
      <ChatLeftTextFill />
      <ChatLeftText />
      <ChatLeft />
      <ChatQuoteFill />
      <ChatQuote />
      <ChatRightDotsFill />
      <ChatRightDots />
      <ChatRightFill />
      <ChatRightHeartFill />
      <ChatRightHeart />
      <ChatRightQuoteFill />
      <ChatRightQuote />
      <ChatRightTextFill />
      <ChatRightText />
      <ChatRight />
      <ChatSquareDotsFill />
      <ChatSquareDots />
      <ChatSquareFill />
      <ChatSquareHeartFill />
      <ChatSquareHeart />
      <ChatSquareQuoteFill />
      <ChatSquareQuote />
      <ChatSquareTextFill />
      <ChatSquareText />
      <ChatSquare />
      <ChatTextFill />
      <ChatText />
      <Chat />
      <Check2All />
      <Check2Circle />
      <Check2Square />
      <Check2 />
      <CheckAll />
      <CheckCircleFill />
      <CheckCircle />
      <CheckLg />
      <CheckSquareFill />
      <CheckSquare />
      <Check />
      <ChevronBarContract />
      <ChevronBarDown />
      <ChevronBarExpand />
      <ChevronBarLeft />
      <ChevronBarRight />
      <ChevronBarUp />
      <ChevronCompactDown />
      <ChevronCompactLeft />
      <ChevronCompactRight />
      <ChevronCompactUp />
      <ChevronContract />
      <ChevronDoubleDown />
      <ChevronDoubleLeft />
      <ChevronDoubleRight />
      <ChevronDoubleUp />
      <ChevronDown />
      <ChevronExpand />
      <ChevronLeft />
      <ChevronRight />
      <ChevronUp />
      <CircleFill />
      <CircleHalf />
      <CircleSquare />
      <Circle />
      <Clipboard2CheckFill />
      <Clipboard2Check />
      <Clipboard2DataFill />
      <Clipboard2Data />
      <Clipboard2Fill />
      <Clipboard2HeartFill />
      <Clipboard2Heart />
      <Clipboard2MinusFill />
      <Clipboard2Minus />
      <Clipboard2PlusFill />
      <Clipboard2Plus />
      <Clipboard2PulseFill />
      <Clipboard2Pulse />
      <Clipboard2 />
      <Clipboard2XFill />
      <Clipboard2X />
      <ClipboardCheckFill />
      <ClipboardCheck />
      <ClipboardDataFill />
      <ClipboardData />
      <ClipboardFill />
      <ClipboardHeartFill />
      <ClipboardHeart />
      <ClipboardMinusFill />
      <ClipboardMinus />
      <ClipboardPlusFill />
      <ClipboardPlus />
      <ClipboardPulse />
      <Clipboard />
      <ClipboardXFill />
      <ClipboardX />
      <ClockFill />
      <ClockHistory />
      <Clock />
      <CloudArrowDownFill />
      <CloudArrowDown />
      <CloudArrowUpFill />
      <CloudArrowUp />
      <CloudCheckFill />
      <CloudCheck />
      <CloudDownloadFill />
      <CloudDownload />
      <CloudDrizzleFill />
      <CloudDrizzle />
      <CloudFill />
      <CloudFog2Fill />
      <CloudFog2 />
      <CloudFogFill />
      <CloudFog />
      <CloudHailFill />
      <CloudHail />
      <CloudHaze2Fill />
      <CloudHaze2 />
      <CloudHazeFill />
      <CloudHaze />
      <CloudLightningFill />
      <CloudLightningRainFill />
      <CloudLightningRain />
      <CloudLightning />
      <CloudMinusFill />
      <CloudMinus />
      <CloudMoonFill />
      <CloudMoon />
      <CloudPlusFill />
      <CloudPlus />
      <CloudRainFill />
      <CloudRainHeavyFill />
      <CloudRainHeavy />
      <CloudRain />
      <CloudsFill />
      <CloudSlashFill />
      <CloudSlash />
      <CloudSleetFill />
      <CloudSleet />
      <CloudSnowFill />
      <CloudSnow />
      <Clouds />
      <CloudSunFill />
      <CloudSun />
      <Cloud />
      <CloudUploadFill />
      <CloudUpload />
      <CloudyFill />
      <Cloudy />
      <CodeSlash />
      <CodeSquare />
      <Code />
      <Coin />
      <CollectionFill />
      <CollectionPlayFill />
      <CollectionPlay />
      <Collection />
      <ColumnsGap />
      <Columns />
      <Command />
      <CompassFill />
      <Compass />
      <ConeStriped />
      <Cone />
      <Controller />
      <CpuFill />
      <Cpu />
      <CreditCard2BackFill />
      <CreditCard2Back />
      <CreditCard2FrontFill />
      <CreditCard2Front />
      <CreditCardFill />
      <CreditCard />
      <Crop />
      <CupFill />
      <CupStraw />
      <Cup />
      <CurrencyBitcoin />
      <CurrencyDollar />
      <CurrencyEuro />
      <CurrencyExchange />
      <CurrencyPound />
      <CurrencyYen />
      <CursorFill />
      <CursorText />
      <Cursor />
      <DashCircleDotted />
      <DashCircleFill />
      <DashCircle />
      <DashLg />
      <DashSquareDotted />
      <DashSquareFill />
      <DashSquare />
      <Dash />
      <DeviceHddFill />
      <DeviceHdd />
      <DeviceSsdFill />
      <DeviceSsd />
      <Diagram2Fill />
      <Diagram2 />
      <Diagram3Fill />
      <Diagram3 />
      <DiamondFill />
      <DiamondHalf />
      <Diamond />
      <Dice1Fill />
      <Dice1 />
      <Dice2Fill />
      <Dice2 />
      <Dice3Fill />
      <Dice3 />
      <Dice4Fill />
      <Dice4 />
      <Dice5Fill />
      <Dice5 />
      <Dice6Fill />
      <Dice6 />
      <DiscFill />
      <Discord />
      <Disc />
      <DisplayFill />
      <DisplayportFill />
      <Displayport />
      <Display />
      <DistributeHorizontal />
      <DistributeVertical />
      <DoorClosedFill />
      <DoorClosed />
      <DoorOpenFill />
      <DoorOpen />
      <Dot />
      <Download />
      <DpadFill />
      <Dpad />
      <Dribbble />
      <DropletFill />
      <DropletHalf />
      <Droplet />
      <Earbuds />
      <EarFill />
      <Ear />
      <Easel2Fill />
      <Easel2 />
      <Easel3Fill />
      <Easel3 />
      <EaselFill />
      <Easel />
      <EggFill />
      <EggFried />
      <Egg />
      <EjectFill />
      <Eject />
      <EmojiAngryFill />
      <EmojiAngry />
      <EmojiDizzyFill />
      <EmojiDizzy />
      <EmojiExpressionlessFill />
      <EmojiExpressionless />
      <EmojiFrownFill />
      <EmojiFrown />
      <EmojiHeartEyesFill />
      <EmojiHeartEyes />
      <EmojiKissFill />
      <EmojiKiss />
      <EmojiLaughingFill />
      <EmojiLaughing />
      <EmojiNeutralFill />
      <EmojiNeutral />
      <EmojiSmileFill />
      <EmojiSmile />
      <EmojiSmileUpsideDownFill />
      <EmojiSmileUpsideDown />
      <EmojiSunglassesFill />
      <EmojiSunglasses />
      <EmojiWinkFill />
      <EmojiWink />
      <EnvelopeCheckFill />
      <EnvelopeCheck />
      <EnvelopeDashFill />
      <EnvelopeDash />
      <EnvelopeExclamationFill />
      <EnvelopeExclamation />
      <EnvelopeFill />
      <EnvelopeHeartFill />
      <EnvelopeHeart />
      <EnvelopeOpenFill />
      <EnvelopeOpenHeartFill />
      <EnvelopeOpenHeart />
      <EnvelopeOpen />
      <EnvelopePaperFill />
      <EnvelopePaperHeartFill />
      <EnvelopePaperHeart />
      <EnvelopePaper />
      <EnvelopePlusFill />
      <EnvelopePlus />
      <EnvelopeSlashFill />
      <EnvelopeSlash />
      <Envelope />
      <EnvelopeXFill />
      <EnvelopeX />
      <EraserFill />
      <Eraser />
      <Ethernet />
      <ExclamationCircleFill />
      <ExclamationCircle />
      <ExclamationDiamondFill />
      <ExclamationDiamond />
      <ExclamationLg />
      <ExclamationOctagonFill />
      <ExclamationOctagon />
      <ExclamationSquareFill />
      <ExclamationSquare />
      <ExclamationTriangleFill />
      <ExclamationTriangle />
      <Exclamation />
      <Exclude />
      <ExplicitFill />
      <Explicit />
      <Eyedropper />
      <EyeFill />
      <Eyeglasses />
      <EyeSlashFill />
      <EyeSlash />
      <Eye />
      <Facebook />
      <Fan />
      <FileArrowDownFill />
      <FileArrowDown />
      <FileArrowUpFill />
      <FileArrowUp />
      <FileBarGraphFill />
    </>
  );
}

export default App;
