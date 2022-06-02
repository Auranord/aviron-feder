export const state = () => ({
    healthcheck: true,
    users: [],
})
  
export const mutations = {
    SET_HEALTHCHECK (state, healthcheck) {
        state.healthcheck = healthcheck
    },
    SET_USERS (state, users) {
        state.users = users
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
}

export const getters = {

}