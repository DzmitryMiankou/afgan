const SETOPEN = "SETOPEN_drbgtr$$_RF_1514";
const SETCLOUSE = "SETCLOUSE_drbgtr$$_RF_1514";

type TypeInfo = `` | "info" | "memory" | "person" | "mail";
type StateType = { data: boolean; infType: TypeInfo };
const initialState: StateType = { data: false, infType: `` };
type InfoActions =
  | ReturnType<typeof setOpenReducer>
  | ReturnType<typeof setClouse>;

export const setOpenReducer = (data: boolean, infType: TypeInfo) =>
  ({ type: SETOPEN, data, infType }) as const;
export const setClouse = (data: boolean) =>
  ({ type: SETCLOUSE, data }) as const;

const openInfoReducer = (state = initialState, action: InfoActions) => {
  switch (action.type) {
    case SETOPEN: {
      return { data: action.data, infType: action.infType };
    }
    case SETCLOUSE: {
      return {
        ...state,
        data: action.data,
      };
    }
    default:
      return state;
  }
};

export default openInfoReducer;
