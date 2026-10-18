const SETOPEN = "SETOPEN_drbgtr$$_RF_1514";

interface InitialStateType {
  data: boolean;
}

const initialState: InitialStateType = { data: false };

interface TypeAction {
  type: typeof SETOPEN;
  data: boolean;
}

const openInfoReducer = (state = initialState, action: TypeAction) => {
  switch (action.type) {
    case SETOPEN: {
      return { data: action.data };
    }
    default:
      return state;
  }
};

export const setOpenReducer = (data: boolean) =>
  ({
    type: SETOPEN,
    data,
  }) as const;

export default openInfoReducer;
