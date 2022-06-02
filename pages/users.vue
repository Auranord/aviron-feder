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
                            <th class="text-left"> E-mail </th>
                            <th class="text-left"> Id </th>
                            <th class="text-left"> Role </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="user in users"
                            :key="user.email"
                            >
                            <td>{{ user.email }}</td>
                            <td>{{ user.id }}</td>
                            <td>{{ user.role }}</td>
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
  name: 'UsersPage',
  async fetch({store}) {
      await store.dispatch('loadUsers')
  },
  computed: {
      ...mapState(['users'])
  },
}
</script>

<style>

</style>