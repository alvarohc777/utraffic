<template>
    <div class="submit-form mt-3 mx-auto">
        <p class="headline">Agregar Cliente</p>
        <div v-if="!submitted">
            <v-form ref="form" lazy-validation>
                <v-text-field v-model="cliente.nombre" :rules="[(v) => !!v || 'Nombre es requerido']" label="Nombre"
                    required></v-text-field>

                <v-text-field v-model="cliente.direccion" :rules="[(v) => !!v || 'Dirección es requerida']"
                    label="Dirección" required></v-text-field>

                <v-text-field v-model="cliente.telefono" :rules="[(v) => !!v || 'Teléfono es requerido']" label="Teléfono"
                    required></v-text-field>
            </v-form>

            <v-btn color="primary" class="mt-3" @click="saveCliente">Guardar</v-btn>
        </div>

        <div v-else>
            <v-card class="mx-auto">
                <v-card-title>
                    Guardado exitosamente!
                </v-card-title>

                <v-card-subtitle>
                    Haga clic en el botón para agregar un nuevo cliente.
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="success" @click="newCliente">Agregar</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script>
import ClienteDataService from "../services/ClienteDataService";

export default {
    name: "add-cliente",
    data() {
        return {
            cliente: {
                nombre: "",
                direccion: "",
                telefono: "",
            },
            submitted: false,
        };
    },
    methods: {
        saveCliente() {
            var data = {
                nombre: this.cliente.nombre,
                direccion: this.cliente.direccion,
                telefono: this.cliente.telefono,
            };

            ClienteDataService.create(data)
                .then((response) => {
                    this.cliente.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        newCliente() {
            this.submitted = false;
            this.cliente = {};
        },
    },
};
</script>
<style>
.submit-form {
    max-width: 300px;
}
</style>