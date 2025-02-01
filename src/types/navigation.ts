export type RootStackParamList = {
  Private: undefined;
};

export type PrivateStackParamList = {
  Home: undefined;
  Details: { id: string };
  SearchStack: undefined;
  SearchModal: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface PrivateParamList extends PrivateStackParamList {}
  }
} 