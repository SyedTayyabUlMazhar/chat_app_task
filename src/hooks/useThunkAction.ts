import {Dispatch} from '@reduxjs/toolkit';
import {useState} from 'react';
import useDispatch from '../hooks/useDispatch';

const useThunkAction = <
  T extends any = {ok: boolean},
  Fn extends (...args: any[]) => (dispatch: Dispatch) => Promise<T> = (
    ...args: any[]
  ) => (dispatch: Dispatch) => Promise<T>,
>(
  action: Fn,
) => {
  const _dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = async (...args: Parameters<typeof action>) => {
    setIsLoading(true);
    const result = await _dispatch(action(...args));
    setIsLoading(false);
    return result;
  };

  return {dispatch, isLoading};
};

export default useThunkAction;
