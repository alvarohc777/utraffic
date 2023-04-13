// import Vue from "vue";
// import Router from "vue-router";

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: "/",
//       alias: "/cliente",
//       name: "cliente",
//       component: () => import("./components/ClienteList")
//     },
//     {
//       path: "/cliente/:id",
//       name: "tutorial-details",
//       component: () => import("./components/Cliente")
//     },
//     {
//       path: "/add",
//       name: "add",
//       component: () => import("./components/AddCliente")
//     }
//   ]
// });

import Vue from "vue";
import Router from "vue-router";
import ClienteList from "./components/ClienteList";
import Cliente from "./components/Cliente";
import AddCliente from "./components/AddCliente";
import FacturaList from "./components/FacturaList";
import Factura from "./components/Factura";
import AddFactura from "./components/AddFactura";
import PagoFacturaList from "./components/PagoFacturaList";
import PagoFactura from "./components/PagoFactura";
import AddPagoFactura from "./components/AddPagoFactura";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/cliente",
            name: "cliente",
            component: ClienteList
        },
        {
            path: "/cliente/:id",
            name: "cliente-details",
            component: Cliente
        },
        {
            path: "/clienteAdd",
            name: "add-cliente",
            component: AddCliente
        },

        {
            path: "/factura",
            name: "factura",
            component: FacturaList
        },
        {
            path: "/factura/:id",
            name: "factura-details",
            component: Factura
        },
        {
            path: "/facturaAdd",
            name: "add-factura",
            component: AddFactura
        },
        {
            path: "/pagoFactura",
            name: "pagoFactura",
            component: PagoFacturaList
        },
        {
            path: "/pagoFactura/:id",
            name: "pagoFactura-details",
            component: PagoFactura
        },
        {
            path: "/pagoFacturaAdd",
            name: "add-pagoFactura",
            component: AddPagoFactura
        }
    ]
});

