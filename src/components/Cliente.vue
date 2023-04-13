<!-- <template>
    <div v-if="currentCliente" class="edit-form py-3">
        <p class="headline">Edit Cliente</p>

        <v-form ref="form" lazy-validation>
            <v-text-field v-model="currentCliente.title" :rules="[(v) => !!v || 'Title is required']" label="Title"
                required></v-text-field>

            <v-text-field v-model="currentCliente.description" :rules="[(v) => !!v || 'Description is required']"
                label="Description" required></v-text-field>

            <label><strong>Status:</strong></label>
            {{ currentCliente.published ? "Published" : "Pending" }}

            <v-divider class="my-5"></v-divider>

            <v-btn v-if="currentCliente.published" @click="updatePublished(false)" color="primary" small class="mr-2">
                UnPublish
            </v-btn>

            <v-btn v-else @click="updatePublished(true)" color="primary" small class="mr-2">
                Publish
            </v-btn>

            <v-btn color="error" small class="mr-2" @click="deleteCliente">
                Delete
            </v-btn>

            <v-btn color="success" small @click="updateCliente">
                Update
            </v-btn>
        </v-form>

        <p class="mt-3">{{ message }}</p>
    </div>

    <div v-else>
        <p>Please click on a Cliente...</p>
    </div>
</template>
  
<script>
import ClienteDataService from "../services/ClienteDataService";

export default {
    name: "cliente",
    data() {
        return {
            currentCliente: null,
            message: "",
        };
    },
    methods: {
        getCliente(id) {
            ClienteDataService.get(id)
                .then((response) => {
                    this.currentCliente = response.data;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        updatePublished(status) {
            var data = {
                id: this.currentCliente.id,
                title: this.currentCliente.title,
                description: this.currentCliente.description,
                published: status,
            };

            ClienteDataService.update(this.currentCliente.id, data)
                .then((response) => {
                    this.currentCliente.published = status;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        updateCliente() {
            ClienteDataService.update(this.currentCliente.id, this.currentCliente)
                .then((response) => {
                    console.log(response.data);
                    this.message = "The Cliente was updated successfully!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        deleteCliente() {
            ClienteDataService.delete(this.currentCliente.id)
                .then((response) => {
                    console.log(response.data);
                    this.$router.push({ name: "Clientes" });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.getCliente(this.$route.params.id);
    },
};
</script>
  
<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style> -->

<template>
    <div v-if="currentCliente" class="edit-form py-3">
        <p class="headline">Edit Cliente</p>

        <v-form ref="form" lazy-validation>

            <v-text-field v-model="currentCliente.nombre" label="Nombre"></v-text-field>
            <v-text-field v-model="currentCliente.telefono" label="Teléfono"></v-text-field>

            <v-text-field v-model="currentCliente.direccion" label="Dirección"></v-text-field>



            <v-divider class="my-5"></v-divider>

            <v-btn v-if="currentCliente.published" @click="updatePublished(false)" color="primary" small class="mr-2">
                UnPublish
            </v-btn>

            <v-btn v-else @click="updatePublished(true)" color="primary" small class="mr-2">
                Publish
            </v-btn>

            <v-btn color="error" small class="mr-2" @click="deleteCliente">
                Delete
            </v-btn>

            <v-btn color="success" small @click="updateCliente">
                Update
            </v-btn>
        </v-form>

        <p class="mt-3">{{ message }}</p>
    </div>

    <div v-else>
        <p>Please click on a Cliente...</p>
    </div>
</template>
<script>
import ClienteDataService from "../services/ClienteDataService";

export default {
    name: "cliente",
    data() {
        return {
            currentCliente: null,
            message: "",
        };
    },
    methods: {
        getCliente(id) {
            ClienteDataService.get(id)
                .then((response) => {
                    this.currentCliente = response.data;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        updatePublished(status) {
            var data = {
                id: this.currentCliente.id,
                telefono: this.currentCliente.telefono,
                direccion: this.currentCliente.direccion,
                published: status,
            };

            ClienteDataService.update(this.currentCliente.id, data)
                .then((response) => {
                    this.currentCliente.published = status;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        updateCliente() {
            ClienteDataService.update(this.currentCliente.id, this.currentCliente)
                .then((response) => {
                    console.log(response.data);
                    this.message = "The Cliente was updated successfully!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        deleteCliente() {
            ClienteDataService.delete(this.currentCliente.id)
                .then((response) => {
                    console.log(response.data);
                    this.$router.push({ name: "clientes" });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.getCliente(this.$route.params.id);
    },
};
</script>
<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>