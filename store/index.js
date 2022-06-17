export const state = () => ({
    healthcheck: true,
    users: [],
    figures: [],
})
  
export const mutations = {
    SET_HEALTHCHECK (state, healthcheck) {
        state.healthcheck = healthcheck
    },
    SET_USERS (state, users) {
        state.users = users
    },
    SET_FIGURES (state, figures) {
        state.figures = figures
    },
}

export const actions = {
    async healthCheck({commit}) {
        try {
            await this.$axios.get('/health')
            commit('SET_HEALTHCHECK', true)
        } catch (error) {
            commit('SET_HEALTHCHECK', false)
        }
    },
    async loadUsers({commit}) {
        const response = await this.$axios.get('/abakus/user/all')
        commit('SET_USERS', response.data)
    },
    async loadFigures({commit}) {
        const response = await this.$axios.get('/abakus/figure/all')
        commit('SET_FIGURES', response.data)
    },
}

export const getters = {

}