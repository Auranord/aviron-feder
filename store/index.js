export const state = () => ({
    healthcheck: true,
    users: [],
    user: {},
    figures: [],
    figure: {},
    banks: [],
    bank: {},
    wallets: [],
    wallet: {},
    journals: [],
    journal: {},
})
  
export const mutations = {
    SET_HEALTHCHECK (state, healthcheck) {
        state.healthcheck = healthcheck
    },
    SET_USERS (state, users) {
        state.users = users
    },
    SET_USER (state, user) {
        state.user = user
    },
    SET_FIGURES (state, figures) {
        state.figures = figures
    },
    SET_FIGURE (state, figure) {
        state.figure = figure
    },
    SET_BANKS (state, banks) {
        state.banks = banks
    },
    SET_BANK (state, bank) {
        state.bank = bank
    },
    SET_WALLETS (state, wallets) {
        state.wallets = wallets
    },
    SET_WALLET (state, wallet) {
        state.wallet = wallet
    },
    SET_JOURNALS (state, journals) {
        state.journals = journals
    },
    SET_JOURNAL (state, journal) {
        state.journal = journal
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
    async loadUser({commit}) {
        const response = await this.$axios.get('/abakus/user/')
        commit('SET_USER', response.data)
    },
    async loadFigures({commit}) {
        const response = await this.$axios.get('/abakus/figure/all')
        commit('SET_FIGURES', response.data)
    },
    async loadFigure({commit}) {
        const response = await this.$axios.get('/abakus/figure/')
        commit('SET_FIGURE', response.data)
    },
    async loadBanks({commit}) {
        const response = await this.$axios.get('/abakus/bank/all')
        commit('SET_BANKS', response.data)
    },
    async loadBank({commit}) {
        const response = await this.$axios.get('/abakus/bank/')
        commit('SET_BANK', response.data)
    },
    async loadWallets({commit}) {
        const response = await this.$axios.get('/abakus/bank_wallet/all')
        commit('SET_WALLETS', response.data)
    },
    async loadWallet({commit}) {
        const response = await this.$axios.get('/abakus/bank_wallet/')
        commit('SET_WALLET', response.data)
    },
    async loadJournals({commit}) {
        const response = await this.$axios.get('/abakus/journal/all')
        commit('SET_JOURNALS', response.data)
    },
    async loadJournal({commit}, id) {
        const response = await this.$axios.get('/abakus/journal/' + id)
        commit('SET_JOURNAL', response.data)
    },
}

export const getters = {

}