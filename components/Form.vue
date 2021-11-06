<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Tareas</div>
      <p class="text-h4 blue--text">
        Formulario
      </p>
    </v-card-text>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            label="Title"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            label="Descripction"
            required
          ></v-text-field>
        </v-col>

      </v-row>

    </v-container>
    </v-form>
    <v-card-actions class="d-flex justify-end">
      <v-btn
        color="primary"
      >
      AÑADIR
      </v-btn>
    </v-card-actions>
  </v-card>
</template>