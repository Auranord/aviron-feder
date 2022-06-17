<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title class="headline"> Users Page </v-card-title>
                    <v-simple-table>
                        <template #default>
                        <thead>
                            <tr>
                            <th class="text-left"> Name </th>
                            <th class="text-left"> Description </th>
                            <th class="text-left"> Owner </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="figure in figures"
                            :key="figure.id"
                            >
                            <td>{{ figure.name }}</td>
                            <td>{{ figure.description }}</td>
                            <td>{{ figure.owner.email }}</td>
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
  name: 'FiguresPage',
  async fetch({store}) {
      await store.dispatch('loadFigures')
  },
  computed: {
      ...mapState(['figures'])
  },
}
</script>

<style>

</style>