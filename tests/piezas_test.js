import { host } from "../queries";

// Pruebas Unitarias
describe("Piezas Test", ()=>{
    it("conexion", () => {
        let resObtenido = host
        let resEsperado = 'ec2-107-21-216-112.compute-1.amazonaws.com'
        expect(resObtenido).toEqual(resEsperado)
    })
})