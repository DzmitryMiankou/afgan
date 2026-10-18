const SETOPEN = "SETOPEN_drbgtr$$_RF_1514";

type TypeInfo = "" | "info" | "memory";
export const setOpenReducer = (data: boolean, infType: TypeInfo) =>
  ({ type: SETOPEN, data, infType }) as const;
const initialState: { data: boolean } = { data: false };

const openInfoReducer = (
  state = initialState,
  action: ReturnType<typeof setOpenReducer>,
) => {
  switch (action.type) {
    case SETOPEN: {
      return { data: action.data, infType: action.infType };
    }
    default:
      return state;
  }
};

export default openInfoReducer;
