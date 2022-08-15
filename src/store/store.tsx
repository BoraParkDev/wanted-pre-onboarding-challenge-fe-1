import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './reducer/index';

const initialState = {
  user: {
    data: null,
    isLoggingIn: false,
  },
  posts: [],
};

const firstMiddleware =
  (store: object) => (next: <AppDispatch/> => (action: any) => {
    console.log('action start', action);
    next(action);
  };

const thunkMiddleware =
  (store: { dispatch: any; getState: any }) =>
  (next: (arg0: any) => any) =>
  (action: (arg0: any, arg1: any) => any) => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };

const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);
store.subscribe(() => {
  console.log('changed');
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch