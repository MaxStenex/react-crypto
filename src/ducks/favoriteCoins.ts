const TOGGLE_FAVORITE_IN_SET = 'TOGGLE_FAVORITE_IN_SET';

const initialState = new Set();

export default function reducer(state = initialState, action: any): any {
  switch (action.type) {
    case TOGGLE_FAVORITE_IN_SET: {
      state.has(action.payload)
        ? state.delete(action.payload)
        : state.add(action.payload);
      return state;
    }
    default:
      return state;
  }
}

export function toggleFavoriteInSet(name: string) {
  return {
    type: TOGGLE_FAVORITE_IN_SET,
    payload: name,
  };
}
