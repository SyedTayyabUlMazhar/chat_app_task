export type Action<PayloadType> = {
  type: string;
  payload: PayloadType;
  cb?: Function;
  vararg: any[];
};

export type ActionCreator<PayloadType> = {
  (payload: PayloadType, cb?: Function, ...arg: any[]): Action<PayloadType>;
  type: string;
};
