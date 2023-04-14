<template>
    <div v-if="currentFactura" class="edit-form py-3">
        <p class="headline">Edit Factura</p>
        <v-form ref="form" lazy-validation>

            <v-text-field v-model="currentFactura.cliente.nombre" label="Cliente" readonly></v-text-field>
            <v-text-field v-model="currentFactura.fecha" label="Fecha" readonly></v-text-field>
            <v-text-field v-model="currentFactura.valor" label="Valor"></v-text-field>
            <v-text-field v-model="currentFactura.comentarios" label="Comentarios"></v-text-field>
            <v-text-field v-model="currentFactura.saldo" label="Saldo"></v-text-field>

            <v-divider class="my-5"></v-divider>

            <v-btn color="success" small @click="updateFactura">
                Update
            </v-btn>
        </v-form>

        <p class="mt-3">{{ message }}</p>
    </div>

    <div v-else>
        <p>Please click on a Factura...</p>
    </div>
</template>
<script>
import FacturaDataService from "../services/FacturaDataService";
export default {
    name: "factura",
    data() {
        return {
            currentFactura: null,
            message: "",
        };
    },
    methods: {
        getFactura(id) {
            FacturaDataService.get(id)
                .then((response) => {
                    this.currentFactura = response.data;
                    this.currentFactura.cliente_id = response.data.cliente.id;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        updateFactura() {

            FacturaDataService.update(this.currentFactura.id, {
                cliente_id: this.currentFactura.cliente_id,
                valor: this.currentFactura.valor,
                fecha: this.currentFactura.fecha,
                comentarios: this.currentFactura.comentarios,
                saldo: this.currentFactura.saldo,
            })
                .then((response) => {
                    console.log(response.data);
                    this.message = "The Factura was updated successfully!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.getFactura(this.$route.params.id);
    },
};
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>