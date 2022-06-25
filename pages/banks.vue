<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title class="headline"> Banks Page </v-card-title>
                    <v-simple-table>
                        <template #default>
                        <thead>
                            <tr>
                            <th class="text-left"> Name </th>
                            <th class="text-left"> Description </th>
                            <th class="text-left"> Currency </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="bank in banks"
                            :key="bank.id"
                            >
                            <td>{{ bank.name }}</td>
                            <td>{{ bank.description }}</td>
                            <td>{{ bank.currencyName }}</td>
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
  name: 'BanksPage',
  async fetch({store}) {
      await store.dispatch('loadBanks')
  },
  computed: {
      ...mapState(['banks'])
  },
}
</script>

<style>

</style>