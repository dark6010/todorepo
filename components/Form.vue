<template lang="pug">
  v-card(max-width='350').mx-auto
    v-card-title
        v-card-text
            div Tareas
            p.text-h4.blue--text Formulario
    v-form
        v-container
            v-text-field(label='Title' required='')
            v-text-field(label='Descripction' required='')
            v-menu(v-model='menu2' :close-on-content-click='false' :nudge-right='40' transition='scale-transition' offset-y='' min-width='auto')
                template(v-slot:activator='{ on, attrs }')
                    v-text-field(v-model='date' label='Picker without buttons' prepend-icon='mdi-calendar' readonly='' v-bind='attrs' v-on='on')
                v-date-picker(v-model='date' @input='menu2 = false')

            v-card-actions.d-flex.justify-space-between
                v-btn(color='primary') A&Ntilde;ADIR
</template>
<script>
  export default {
    data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu2: false,
    }),
  }
</script>
