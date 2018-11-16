const defaultState = {
    view: "home",
    showLeftPanel: true,
    tab: "service"
}

export default (state = defaultState, action) => {
    if (action.type === "SET_LAYOUT_VIEW") {
        return {
            ...state,
            view: action.view
        }
    }
    else if(action.type === "TOGGLE_LEFT_PANEL"){
        return {
            ...state,
            showLeftPanel: !state.showLeftPanel
        }
    }
    else if(action.type === "SET_ACTIVE_TAB"){
        return {
            ...state,
            tab: action.tab
        }
    }
    else if(action.type === "SET_LEFT_PANEL"){
        return {
            ...state,
            showLeftPanel: action.bool
        }
    }
    else {
        return state;
    }
};

