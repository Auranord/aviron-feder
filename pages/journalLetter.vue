<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title class="headline"> Journal Letters Page </v-card-title>
                    <v-simple-table>
                        <template #default>
                        <thead>
                            <tr>
                            <th class="text-left"> Issue </th>
                            <th class="text-left"> Article </th>
                            <th class="text-left"> Author </th>
                            <th class="text-left"> Submission </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="journalLetter in journalLetters"
                            :key="journalLetter.id"
                            >
                            <td>{{ journalLetter.article.issue.date }}</td>
                            <td>{{ journalLetter.article.title }}</td>
                            <td>{{ journalLetter.author.name }}</td>
                            <td>{{ journalLetter.dateTime }}</td>
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
  name: 'JournalLettersPage',
  async fetch({store}) {
      await store.dispatch('loadJournalLetters')
  },
  computed: {
      ...mapState(['journalLetters'])
  },
}
</script>

<style>

</style>