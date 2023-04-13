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
                <v-card-title>Clientes</v-card-title>

                <v-data-table :headers="headers" :items="clientes" disable-pagination :hide-default-footer="true">
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editCliente(item.id)">mdi-pencil</v-icon>
                        <v-icon small @click="deleteCliente(item.id)">mdi-delete</v-icon>
                    </template>
                </v-data-table>

                <v-card-actions v-if="clientes.length > 0">
                    <v-btn small color="error" @click="removeAllClientes">
                        Eliminar todos
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
  
<script>
import ClienteDataService from "../services/ClienteDataService";
export default {
    name: "clientes-list",
    data() {
        return {
            clientes: [],
            title: "",
            headers: [
                { text: "Nombre", align: "start", sortable: false, value: "nombre" },
                { text: "Dirección", value: "direccion", sortable: false },
                { text: "Teléfono", value: "telefono", sortable: false },
                { text: "Acciones", value: "actions", sortable: false },
            ],
        };
    },
    methods: {
        retrieveClientes() {
            ClienteDataService.getAll()
                .then((response) => {
                    this.clientes = response.data.map(this.getDisplayCliente);
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveClientes();
        },

        removeAllClientes() {
            ClienteDataService.deleteAll()
                .then((response) => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        searchNombre() {
            ClienteDataService.findByNombre(this.cliente)
                .then((response) => {
                    this.clientes = response.data.map(this.getDisplayCliente);
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        editCliente(id) {
            this.$router.push({ name: "cliente-details", params: { id: id } });
        },

        deleteCliente(id) {
            ClienteDataService.delete(id)
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        getDisplayCliente(cliente) {
            return {
                id: cliente.id,
                nombre: cliente.nombre,
                direccion: cliente.direccion,
                telefono: cliente.telefono,
            };
        },
    },
    mounted() {
        this.retrieveClientes();
    },
};
</script>
  
<style>
.list {
    max-width: 750px;
}
</style>
  