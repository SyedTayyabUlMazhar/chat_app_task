import Routes from './routes';

export type AuthStackParamList = {
  [Routes.SignUp]: undefined;
  [Routes.LogIn]: undefined;
};

export type AppStackParamList = {
  [Routes.Home]: undefined;
};

export type BottomTabParamList = {
  [Routes.People]: undefined;
  [Routes.Chat]: undefined;
};
