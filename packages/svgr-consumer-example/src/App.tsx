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
    </>
  );
}

export default App;
