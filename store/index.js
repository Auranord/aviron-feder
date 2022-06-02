export const state = () => ({
    healthcheck: true,
})
  
export const mutations = {
    SET_HEALTHCHECK (state, healthcheck) {
        state.healthcheck = healthcheck
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
}

export const getters = {

}