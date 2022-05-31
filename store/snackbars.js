export const state = () => ({
    snackbars: [],
})
  
export const mutations = {
    ADD_SNACKBAR (state, snackbar) {
        state.snackbars = state.snackbars.concat(snackbar)
    },
    DEL_SNACKBAR (state, snackbarText) {
        // state.snackbars = state.snackbars.filter(function(text, timeout, type){ 
        //     return text === snackbarText;
        // })
        state.snackbars = []
    },
}

export const actions = {
    addSnackbar({commit}, snackbar) {
        commit('ADD_SNACKBAR', snackbar)
    },
    delSnackbar({commit}, snackbarText) {
        commit('DEL_SNACKBAR', snackbarText)
    },
}

export const getters = {

}