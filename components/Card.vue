<template>
  <v-card
    class="mx-auto"
    color="yellow"
    max-width="400"
    height="auto"
    
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-lead-pencil
      </v-icon>
      <span class="text-h6 brown--text font-weight-bold">Twitter</span>
    </v-card-title>

    <v-card-text class="text-h5 text-h6 brown--text font-weight-light">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
        <v-checkbox
                class="brown--text"
              label="Realizado"
              color="brown"
              value="brown"
              hide-details
            ></v-checkbox>
    </v-card-actions>
  </v-card>
</template>