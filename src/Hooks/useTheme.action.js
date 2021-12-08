export const changeTheme = (data) => ({
  type: "TOGGLE_THEME",
  data,
})

export const toggleTheme = (theme) => {
  return dispatch => {
    dispatch(changeTheme(theme))
  }
}