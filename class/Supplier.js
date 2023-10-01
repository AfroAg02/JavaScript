// Crea una clase "Proveedor" con propiedades como
//  "nombre", "servicios ofrecidos" y "ubicación". Luego, implementa funciones que permitan 
//  agregar, editar y eliminar proveedores en un registro de proveedores. Además, desarrolla 
//  una función que muestre los proveedores que ofrecen un servicio específico.


module.exports.Supplier = class Supplier  {
    constructor(name, services,ubication){
        this.name = name;
        this.services = services;
        this.ubication = ubication;
    }

}