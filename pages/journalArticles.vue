<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title class="headline"> Journal Articles Page </v-card-title>
                    <v-simple-table>
                        <template #default>
                        <thead>
                            <tr>
                            <th class="text-left"> Journal Issue </th>
                            <th class="text-left"> Title </th>
                            <th class="text-left"> Subtitle </th>
                            <th class="text-left"> Author </th>
                            <th class="text-left"> Illustration </th>
                            <th class="text-left"> Category </th>
                            <th class="text-left"> Answered Art. Title </th>
                            <th class="text-left"> Answered Art. Issue </th>
                            <th class="text-left"> Collection </th>
                            <th class="text-left"> Event </th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="journalArticle in journalArticles"
                            :key="journalArticle.id"
                            >
                            <td>{{ journalArticle.issue.date }}</td>
                            <td>{{ journalArticle.title }}</td>
                            <td>{{ journalArticle.subtitle }}</td>
                            <td>{{ journalArticle.author.name }}</td>
                            <td>{{ journalArticle.illustration.url }}</td>
                            <td>{{ journalArticle.category }}</td>
                            <td>{{ journalArticle.answer.title }}</td>
                            <td>{{ journalArticle.answer.issue.date }}</td>
                            <td>{{ journalArticle.collection.name }}</td>
                            <td>{{ journalArticle.event.title }}</td>
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
  name: 'JournalArticlesPage',
  async fetch({store}) {
      await store.dispatch('loadJournalArticles')
  },
  computed: {
      ...mapState(['journalArticles'])
  },
}
</script>

<style>

</style>