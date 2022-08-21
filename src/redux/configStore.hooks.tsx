//useDispatch와 useSelector를 대신할 custom hook 제작
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './configStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
