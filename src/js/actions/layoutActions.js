/**
 * This action is going to send a view to the reducer to update the layout
 * @param {string} view 
 */
export const setLayoutView = (view="home") => ({
    type: "SET_LAYOUT_VIEW",
    view
});
export const setActiveTab = (tab="service") => ({
    type: "SET_ACTIVE_TAB",
    tab
});
export const toggleLeftPanel = () => ({
    type: "TOGGLE_LEFT_PANEL",
});
export const setLeftPanel = (bool = true) => ({
    type: "SET_LEFT_PANEL",
    bool
});