<template>

  <div>

    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app >
      <v-list>
        <v-list-item v-for="item in drawerItems" :key="item" :to="item.to" router exact >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar :clipped-left="clipped" fixed app >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <nuxt-link to="/" >
        <v-btn icon >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </nuxt-link>

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-menu v-for="navbarItem in navbarItems" :key="navbarItem.title" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text rounded class="my-2" >
            {{ navbarItem.title }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="dropdownItem in navbarItem.dropdownItems" :key="dropdownItem.title" >
            <nuxt-link :to="dropdownItem.to" :key="dropdownItem.title">
              <v-list-item-title>{{ dropdownItem.title }}</v-list-item-title>
            </nuxt-link>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer />

      <v-btn icon >
        <v-icon>mdi-account</v-icon>
      </v-btn>






    </v-app-bar>


  </div>

</template>

<script>
export default {
  data () {
    return {
      title: 'Aviron Feder',
      clipped: false,
      drawer: false,
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
              title: 'Test 6', 
              to: '/test', 
            }, 
          ],
        },
      ],

      drawerItems: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Test',
          to: '/test'
        }
      ],
    }
  }
}
</script>

<style>

</style>