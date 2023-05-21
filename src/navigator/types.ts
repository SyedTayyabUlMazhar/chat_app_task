import Routes from './routes';

export type AuthStackParamList = {
  [Routes.SignUp]: undefined;
  [Routes.LogIn]: undefined;
};

export type AppStackParamList = {
  [Routes.BottomTabNavigator]: undefined;
};

export type BottomTabParamList = {
  [Routes.People]: undefined;
  [Routes.Conversations]: undefined;
};
