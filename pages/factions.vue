<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title class="headline"> Factions Page </v-card-title>
                    <v-simple-table>
                        <template #default>
                        <thead>
                            <tr>
                            <th class="text-left"> Name </th>
                            <th class="text-left"> Description </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="faction in factions"
                            :key="faction.id"
                            >
                            <td>{{ faction.name }}</td>
                            <td>{{ faction.description }}</td>
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
  name: 'FactionsPage',
  async fetch({store}) {
      await store.dispatch('loadFactions')
  },
  computed: {
      ...mapState(['factions'])
  },
}
</script>

<style>

</style>