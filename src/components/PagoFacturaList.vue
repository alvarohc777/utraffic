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
                <v-card-title>Pagos</v-card-title>

                <v-data-table :headers="headers" :items="pagoFacturas" disable-pagination :hide-default-footer="true">
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editPagoFactura(item.id)">mdi-pencil</v-icon>
                        <v-icon small @click="deletePagoFactura(item.id)">mdi-delete</v-icon>
                    </template>
                </v-data-table>

                <v-card-actions v-if="pagoFacturas.length > 0">
                    <v-btn small color="error" @click="removeAllPagoFacturas">
                        Eliminar todos
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
  
<script>
import PagoFacturaDataService from "../services/PagoFacturaDataService";
export default {
    name: "pagoFacturas-list",
    data() {
        return {
            pagoFacturas: [],
            title: "",
            headers: [

                { text: "id", align: "start", value: "id", sortable: false },
                { text: "Factura", align: "start", value: "factura", sortable: false },
                { text: "Fecha", value: "fecha", sortable: false },
                { text: "Valor", value: "valor", sortable: false },
                { text: "Acciones", value: "actions", sortable: false },

            ],
        };
    },
    methods: {
        retrievePagoFacturas() {
            PagoFacturaDataService.getAll()
                .then((response) => {
                    this.pagoFacturas = response.data.map(this.getDisplayPagoFactura);
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrievePagoFacturas();
        },

        removeAllPagoFacturas() {
            PagoFacturaDataService.deleteAll()
                .then((response) => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        searchNombre() {
            PagoFacturaDataService.findByNombre(this.pagoFactura)
                .then((response) => {
                    this.pagoFacturas = response.data.map(this.getDisplayPagoFactura);
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        editPagoFactura(id) {
            this.$router.push({ name: "pagoFactura-details", params: { id: id } });
        },

        deletePagoFactura(id) {
            PagoFacturaDataService.delete(id)
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        getDisplayPagoFactura(pagoFactura) {
            return {
                id: pagoFactura.id,
                factura: pagoFactura.factura,
                fecha: pagoFactura.fecha,
                valor: pagoFactura.valor,
            };
        },
    },
    mounted() {
        this.retrievePagoFacturas();
    },
};
</script>
  
<style>
.list {
    max-width: 750px;
}
</style>
  