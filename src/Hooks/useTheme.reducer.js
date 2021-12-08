const initialState = {
  theme: '',
  themeMode: 'automatic',//user_centric,
  themeType: 'light_theme1'
}

export const themeModule = (state = initialState, action) => {
  switch(action.type){
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: action.data.scheme,
        themeMode: action.data?.themeMode,
        themeType: action?.data?.themeType,
      }
    default:
      return state;
  }
}