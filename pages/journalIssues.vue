<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title class="headline"> Journal Issues Page </v-card-title>
                    <v-simple-table>
                        <template #default>
                        <thead>
                            <tr>
                            <th class="text-left"> Date </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="journalIssue in journalIssues"
                            :key="journalIssue.id"
                            >
                            <td>{{ journalIssue.date }}</td>
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
  name: 'JournalIssuesPage',
  async fetch({store}) {
      await store.dispatch('loadJournalIssues')
  },
  computed: {
      ...mapState(['journalIssues'])
  },
}
</script>

<style>

</style>