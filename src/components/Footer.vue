<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="pink accent-2 flex text-xs-center"
      flat
      tile
    >
      <v-card-text class="" align-center>
        <v-btn
          v-for="(contact, i) in contacts"
          :key="i"
          target="_blank"
          :href='contact.link'
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ contact.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-actions class="pink darken-3 justify-center">
        &copy;2019 — <strong><b>&nbsp;&lt;&nbsp;/&gt;</b>&nbsp;with 💙 by&nbsp;<b>Rina Mardiana</b></strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    contacts: [
      { icon: 'fa fa-envelope', link: 'mailto:rina.mardiana099@gmail.com' },
      { icon: 'fa fa-instagram', link: 'https://www.instagram.com/rina.mrdn' }
    ]
  })
}
</script>