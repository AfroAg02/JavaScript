//Archivo de prueba de cada metodo
const { Register } = require("./class/Register");
const { Supplier } = require("./class/Supplier");

//Crear el registro
const register = new Register();

//Crear los proveedores
const supplier1 = new Supplier(
  "Supplier 1",
  ["Servicio 1", "Servicio 2"],
  "Ubicación 1"
);
const supplier2 = new Supplier(
  "Supplier 2",
  ["Servicio 1", "Servicio 3"],
  "Ubicación 2"
);
const supplier3 = new Supplier(
  "Supplier 3",
  ["Servicio 2", "Servicio 3"],
  "Ubicación 3"
);

//Annadirlos al registro
register.addSupplier(supplier1);
register.addSupplier(supplier2);
register.addSupplier(supplier3);

console.log("Los Proveedores originales");
console.log(register.suppliers);

register.editSupplier("Supplier 1", { name: "Afro", ubication: "CUJAE" });

console.log("Los Proveedores con el primero editado");
console.log(register.suppliers);

register.deleteSupplier("Supplier 2");

console.log("Los Proveedores con el segundo eliminado");
console.log(register.suppliers);

console.log("El proveedor buscado por el servicio 1");
console.log(register.findSupplierByService("Servicio 1"));
