declare interface HeaderProps {
  title: string;
  leftTo: string;
  rightTo: string;
}

declare interface HeaderState {
  elevated: boolean;
  showIconLeft: boolean;
  showIconRight: boolean;
  leftIconSrc: Object;
  rightIconSrc: Object;
}
