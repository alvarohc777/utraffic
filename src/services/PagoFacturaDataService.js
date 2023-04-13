import http from "../http-common";

class PagoFacturaDataService {
    getAll() {
        return http.get("/pago");
    }

    get(id) {
        return http.get(`/pago/${id}`);
    }

    create(data) {
        return http.post("/pago", data);
    }

    update(id, data) {
        return http.put(`/pago/${id}`, data);
    }

    delete(id) {
        return http.delete(`/pago/${id}`);
    }

    deleteAll() {
        return http.delete(`/pago`);
    }

    findByNombre() {
        return http.get(`/pago?nombre=${nombre}`);
    }
}

export default new PagoFacturaDataService();
