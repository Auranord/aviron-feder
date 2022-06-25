<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title class="headline"> Wallets Page </v-card-title>
                    <v-simple-table>
                        <template #default>
                        <thead>
                            <tr>
                            <th class="text-left"> Owner </th>
                            <th class="text-left"> Currency </th>
                            <th class="text-left"> Balance </th>
                            <th class="text-left"> Maximum </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="wallet in wallets"
                            :key="wallet.id"
                            >
                            <td>{{ wallet.figure.name }}</td>
                            <td>{{ wallet.currency.currencyName }}</td>
                            <td>{{ wallet.balance }}</td>
                            <td>{{ wallet.maximum }}</td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WalletsPage',
  async fetch({store}) {
      await store.dispatch('loadWallets')
  },
  computed: {
      ...mapState(['wallets'])
  },
}
</script>

<style>

</style>