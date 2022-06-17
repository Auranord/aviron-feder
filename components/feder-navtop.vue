<template>
  <div>
    <v-menu v-for="navbarItem in navbarItems" :key="navbarItem.title" offset-y>
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" text rounded class="my-2" v-on="on">
          {{ navbarItem.title }}
        </v-btn>
      </template>
      <v-list>
        <nuxt-link
          v-for="dropdownItem in navbarItem.dropdownItems"
          :key="dropdownItem.title"
          :to="dropdownItem.to"
        >
          <v-list-item>
            <v-list-item-title>{{ dropdownItem.title }}</v-list-item-title>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarItems: [
        {
          title: 'Test Ausgaben',
          dropdownItems: [
            {
              title: 'Users',
              to: '/users',
            },
            {
              title: 'Figures',
              to: '/figures',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
