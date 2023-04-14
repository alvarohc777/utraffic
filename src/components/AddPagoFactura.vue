<template>
    <div class="submit-form mt-3 mx-auto">
        <p class="headline">Agregar Pago de Factura</p>
        <div v-if="!submitted">
            <v-form ref="form" lazy-validation>
                <!-- `${id} - ${cliente.nombre}` -->
                <v-select v-model="pagoFactura.factura_id" :items="facturas" item-text="factura_nombre" item-value="id"
                    label="Factura" :rules="[(v) => !!v || 'Factura es requerida']" required></v-select>
                <v-text-field v-model="pagoFactura.valor" label="Valor" required></v-text-field>

                <v-textarea v-model="pagoFactura.comentarios" label="Comentarios"></v-textarea>
            </v-form>

            <v-btn color="primary" class="mt-3" @click="savePagoFactura">Guardar</v-btn>
        </div>

        <div v-else>
            <v-card class="mx-auto">
                <v-card-title>Guardado exitosamente!</v-card-title>

                <v-card-subtitle>
                    Haga clic en el botón para agregar un nuevo pago de factura.
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="success" @click="newPagoFactura">Agregar</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script>
import PagoFacturaDataService from "../services/PagoFacturaDataService";
import FacturaDataService from "../services/FacturaDataService";

export default {
    name: "add-pago-factura",
    data() {
        return {
            pagoFactura: {
                factura: null,
                valor: "",
                comentarios: "",
            },
            submitted: false,
            facturas: [],
        };
    },
    methods: {
        savePagoFactura() {
            // Set the current date as the value of the "fecha" field
            this.pagoFactura.fecha = new Date().toISOString().slice(0, 10);

            var data = {
                factura_id: this.pagoFactura.factura_id,
                valor: this.pagoFactura.valor,
                comentarios: this.pagoFactura.comentarios,
                fecha: this.pagoFactura.fecha,
            };

            PagoFacturaDataService.create(data)
                .then((response) => {
                    this.pagoFactura.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        async getFacturas() {
            try {
                const response = await FacturaDataService.getAll();
                response.data.forEach(element => {
                    element.factura_nombre = `${element.id} - ${element.cliente.nombre}`
                });
                this.facturas = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        newPagoFactura() {
            this.submitted = false;
            this.pagoFactura = {};
        },
    },
    mounted() {
        this.getFacturas();
    },
};
</script>
<style>
.submit-form {
    max-width: 300px;
}
</style>