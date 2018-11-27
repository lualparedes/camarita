declare interface AppCameraRollProps {
  theme: string;
}

declare interface AppCameraRollState {
  pictures: Array<string>;
  modalVisible: Boolean;
  pictureToDelete: String;
}
