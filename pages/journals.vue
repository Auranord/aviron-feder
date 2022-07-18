<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card v-for="journal in journals" :key="journal.id">
                    <v-card-title class="headline">Ausgabe: {{ journal.date }}</v-card-title>
                    <v-simple-table v-for="article in journal.articles" :key="article.title">
                        <template #default>
                        <thead>
                            <tr>
                                <th class="text-left">Title</th>
                                <th class="text-left">Subtitle</th>
                                <th class="text-left">Author</th>
                                <th class="text-left">Category</th>
                                <th class="text-left">Letters</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ article.title }}</td>
                                <td>{{ article.subtitle }}</td>
                                <td>{{ article.author.name }}</td>
                                <td>{{ article.category }}</td>
                                <td>{{ article.articleLetters }}</td>
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
  name: 'JournalPage',
  async fetch({store}) {
      await store.dispatch('loadJournals')
  },
  computed: {
      ...mapState(['journals'])
  },
}
</script>

<style>

</style>