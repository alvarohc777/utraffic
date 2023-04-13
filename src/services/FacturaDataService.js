import http from "../http-common";

class FacturaDataService {
    getAll() {
        return http.get("/factura");
    }

    get(id) {
        return http.get(`/factura/${id}`);
    }

    create(data) {
        return http.post("/factura", data);
    }

    update(id, data) {
        return http.put(`/factura/${id}`, data);
    }

    delete(id) {
        return http.delete(`/factura/${id}`);
    }

    deleteAll() {
        return http.delete(`/factura`);
    }

    findByNombre() {
        return http.get(`/factura?nombre=${nombre}`);
    }
}

export default new FacturaDataService();
