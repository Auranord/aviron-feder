<template>

    <div>
      <v-menu v-for="navbarItem in navbarItems" :key="navbarItem.title" offset-y>
          <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text rounded class="my-2" >
              {{ navbarItem.title }}
          </v-btn>
          </template>
          <v-list>
            <nuxt-link v-for="dropdownItem in navbarItem.dropdownItems" :key="dropdownItem.title" :to="dropdownItem.to">
              <v-list-item >
                  <v-list-item-title>{{ dropdownItem.title }}</v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list>
      </v-menu>
    </div>

</template>

<script>
export default {
  data () {
    return {
      navbarItems: [
        {
          title: 'Test 1',
          to: '/test',
          dropdownItems: [
            {
              title: 'Test 4', 
              to: '/test', 
            },
            {
              title: 'Test 5', 
              to: '/test', 
            },
            {
              title: 'Test 6', 
              to: '/test', 
            }, 
          ],
        },
        {
          title: 'Test 2',
          to: '/test',
          dropdownItems: [
            {
              title: 'Test 4', 
              to: '/test', 
            },
            {
              title: 'Test 5', 
              to: '/test', 
            },
            {
              title: 'Test 6', 
              to: '/test', 
            }, 
          ],
        },
        {
          title: 'Test 3',
          to: '/test',
          dropdownItems: [
            {
              title: 'Test 4', 
              to: '/test', 
            },
            {
              title: 'Test 5', 
              to: '/test', 
            },
            {
              title: 'Test 16', 
              to: '/test', 
            }, 
          ],
        },
      ],
    }
  }
}
</script>

<style>

</style>