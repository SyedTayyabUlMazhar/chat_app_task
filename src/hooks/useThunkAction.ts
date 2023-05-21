import {Action, Dispatch, ThunkAction} from '@reduxjs/toolkit';
import {useCallback, useMemo, useState} from 'react';
import useDispatch from '../hooks/useDispatch';
import {RootState} from '../redux';

const useThunkAction = <
  T extends any = {ok: boolean},
  Fn extends (
    ...args: any[]
  ) => ThunkAction<Promise<T>, RootState, {}, Action<any>> = (
    ...args: any[]
  ) => (dispatch: Dispatch) => Promise<T>,
>(
  action: Fn,
) => {
  const _dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useCallback(
    async (...args: Parameters<typeof action>) => {
      setIsLoading(true);
      const result = await _dispatch(action(...args));
      setIsLoading(false);
      return result;
    },
    [_dispatch, action],
  );

  const result = useMemo(() => ({dispatch, isLoading}), [dispatch, isLoading]);

  return result;
};

export default useThunkAction;
