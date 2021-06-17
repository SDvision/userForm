import { SET_ACTIVE_WINDOW } from './userTypes'

export const setActiveWindow = (setScreen) => {
    return {
      type: SET_ACTIVE_WINDOW,
      payload: setScreen
    }
}