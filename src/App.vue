<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        -
      </div>

      <v-btn to="/" text>
        Clientes
      </v-btn>

      <v-btn to="/clienteAdd" text>
        Agregar Cliente
      </v-btn>
      <v-btn to="/factura" text>
        Facturas
      </v-btn>

      <v-btn to="/facturaAdd" text>
        Agregar Facturas
      </v-btn>
      <v-btn to="/pagoFactura" text>
        Pagos
      </v-btn>

      <v-btn to="/pagoFacturaAdd" text>
        Agregar Pago
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>



<!-- <template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script> -->
