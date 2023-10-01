//Clase del registro de los proveedores

module.exports.Register = class Register {
  //Constructor del registro con el arreglo originalmente vacio
    constructor() {
      this.suppliers = [];
    }
  //Metodo para añadir proveedores
    addSupplier(supplier) {
      this.suppliers.push(supplier);
    }
    //Metodo para editar un proveedor, se busca por el nombre
    editSupplier(name,data) {
      const Supplier = this.suppliers.find(Supplier => Supplier.name === name);
      if (Supplier) {
        Object.assign(Supplier,data);
      }
    }
    //Metodo para eliminar un proveedor, se busca igualmente por su nombre
    deleteSupplier(name) {
      const index = this.suppliers.findIndex(Supplier => Supplier.name === name);
      if (index !== -1) {
        this.suppliers.splice(index, 1);
      }
    }
    //Metodo para buscar un proveedor dado su servicio ofrecido
    findSupplierByService(services) {
      return this.suppliers.filter(Supplier => Supplier.services.includes(services));
    }
  }
  