<template>
    <v-row align="center" class="list px-3 mx-auto">
        <v-col cols="12" md="8">
            <v-text-field v-model="title" label="Buscar por nombre"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
            <v-btn small @click="searchNombre">
                Buscar
            </v-btn>
        </v-col>

        <v-col cols="12" sm="12">
            <v-card class="mx-auto" tile>
                <v-card-title>Facturas</v-card-title>

                <v-data-table :headers="headers" :items="Facturas" disable-pagination :hide-default-footer="true">
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editFactura(item.id)">mdi-pencil</v-icon>
                        <v-icon small @click="deleteFactura(item.id)">mdi-delete</v-icon>
                    </template>
                </v-data-table>

                <v-card-actions v-if="Facturas.length > 0">
                    <v-btn small color="error" @click="removeAllFacturas">
                        Eliminar todos
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
  
<script>
import FacturaDataService from "../services/FacturaDataService";
export default {
    name: "Facturas-list",
    data() {
        return {
            Facturas: [],
            title: "",
            headers: [
                { text: "id", align: "start", sortable: false, value: "id" },
                { text: "Cliente", sortable: false, value: "cliente" },
                { text: "Fecha", value: "fecha", sortable: false },
                { text: "Valor", value: "valor", sortable: false },
                { text: "Comentarios", value: "comentarios", sortable: false },
                { text: "Saldo", value: "saldo", sortable: false },
                { text: "Acciones", value: "actions", sortable: false },
            ],
        };
    },
    methods: {
        retrieveFacturas() {
            FacturaDataService.getAll()
                .then((response) => {
                    this.Facturas = response.data.map(this.getDisplayFactura);
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveFacturas();
        },

        removeAllFacturas() {
            FacturaDataService.deleteAll()
                .then((response) => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        searchNombre() {
            FacturaDataService.findByNombre(this.Factura)
                .then((response) => {
                    this.Facturas = response.data.map(this.getDisplayFactura);
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        editFactura(id) {
            this.$router.push({ name: "factura-details", params: { id: id } });
        },

        deleteFactura(id) {
            FacturaDataService.delete(id)
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        getDisplayFactura(Factura) {
            return {
                id: Factura.id,
                cliente: Factura.cliente,
                fecha: Factura.fecha,
                comentarios: Factura.comentarios,
                saldo: Factura.saldo,
                valor: Factura.valor
            };
        },
    },
    mounted() {
        this.retrieveFacturas();
    },
};
</script>
  
<style>
.list {
    max-width: 750px;
}
</style>
  