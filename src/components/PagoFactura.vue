<template>
    <div v-if="currentPago" class="edit-form py-3">
        <p class="headline">Edit Pago Factura</p>
        <v-form ref="form" lazy-validation>

            <v-text-field v-model="currentPago.factura.id" label="Factura" readonly></v-text-field>
            <v-text-field v-model="currentPago.fecha" label="Fecha" readonly></v-text-field>
            <v-text-field v-model="currentPago.valor" label="Valor" readonly></v-text-field>
            <v-text-field v-model="currentPago.comentarios" label="Comentarios"></v-text-field>

            <v-divider class="my-5"></v-divider>

            <v-btn color="success" small @click="updatePagoFactura">
                Update
            </v-btn>
        </v-form>

        <p class="mt-3">{{ message }}</p>
    </div>

    <div v-else>
        <p>Please click on a PagoFactura...</p>
    </div>
</template>

<script>
import PagoFacturaDataService from "../services/PagoFacturaDataService";
export default {
    name: "pago-factura",
    data() {
        return {
            currentPago: null,
            message: "",
        };
    },
    methods: {
        getPagoFactura(id) {
            PagoFacturaDataService.get(id)
                .then((response) => {
                    this.currentPago = response.data;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        updatePagoFactura() {

            PagoFacturaDataService.update(this.currentPago.id, {
                factura_id: this.currentPago.factura.id,
                valor: this.currentPago.valor,
                fecha: this.currentPago.fecha,
                comentarios: this.currentPago.comentarios,
            })
                .then((response) => {
                    console.log(response.data);
                    this.message = "The PagoFactura was updated successfully!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.getPagoFactura(this.$route.params.id);
    },
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>
