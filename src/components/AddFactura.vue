
<template>
    <div class="submit-form mt-3 mx-auto">
        <p class="headline">Agregar Factura</p>
        <div v-if="!submitted">
            <v-form ref="form" lazy-validation>
                <v-select v-model="factura.cliente_id" :items="clientes" item-text="nombre" item-value="id" label="Cliente"
                    :rules="[(v) => !!v || 'Cliente es requerido']" required></v-select>

                <v-text-field v-model="factura.valor" label="Valor" required></v-text-field>

                <v-text-field v-model="factura.comentarios" label="Comentarios"></v-text-field>

                <v-text-field v-model="factura.saldo" label="Saldo"></v-text-field>
            </v-form>

            <v-btn color="primary" class="mt-3" @click="saveFactura">Guardar</v-btn>
        </div>

        <div v-else>
            <v-card class="mx-auto">
                <v-card-title>Guardado exitosamente!</v-card-title>

                <v-card-subtitle>
                    Haga clic en el botón para agregar un nuevo factura.
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="success" @click="newFactura">Agregar</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
import FacturaDataService from "../services/FacturaDataService";
import ClienteDataService from "../services/ClienteDataService";

export default {
    name: "add-factura",
    data() {
        return {
            factura: {
                cliente_id: null,
                valor: "",
                comentarios: "",
                saldo: "",
            },
            submitted: false,
            clientes: [],
        };
    },
    methods: {
        saveFactura() {
            // Set the current date as the value of the "fecha" field
            this.factura.fecha = new Date().toISOString().slice(0, 10);
            this.factura.saldo = 0;

            var data = {
                cliente_id: this.factura.cliente_id,
                valor: this.factura.valor,
                comentarios: this.factura.comentarios,
                fecha: this.factura.fecha,
                saldo: this.factura.saldo
            };

            FacturaDataService.create(data)
                .then((response) => {
                    this.factura.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        async getClientes() {
            try {
                const response = await ClienteDataService.getAll();
                this.clientes = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        newFactura() {
            this.submitted = false;
            this.factura = {};
        },
    },
    mounted() {
        this.getClientes();
    },
};
</script>

<style>
.submit-form {
    max-width: 300px;
}
</style>