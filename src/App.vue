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




