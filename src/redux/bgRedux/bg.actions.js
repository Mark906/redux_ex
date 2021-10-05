import { CHANGE_BG, RESET_BG } from "./bg.actionTypes";

let changeBg = () => {
    return {
        type: CHANGE_BG
    }
}

let resetBg = () => {
    return {
        type: RESET_BG
    }
}

export {changeBg, resetBg}