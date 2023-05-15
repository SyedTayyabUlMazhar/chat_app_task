import {ActionCreator} from './types';

function createActionCreator<PayloadType extends any = Record<string, any>>(
  type: string,
) {
  const actionCreator: ActionCreator<PayloadType> = (
    payload: PayloadType,
    cb?: Function,
    ...vararg: any[]
  ) => ({type, payload, cb, vararg});
  actionCreator.type = type;

  return actionCreator;
}

export {createActionCreator};
