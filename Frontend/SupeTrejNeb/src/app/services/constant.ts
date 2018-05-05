export const CONSTANT = {
  keysPress:{
    MULTIPLICATION : "*",
    SUM: "+",
    REST: "-",
    DELETEITEM:"Backspace",
    COMA:".",
    ENTER: "Enter"

  },
  OperationTables:{
    create:"create",
    update:"update",
    delete:"delete"
  },
  ResponseServers:{
    Category_Success:"Se ha creado la categoria con exito",
    Direction_Success:"Se ha creado la dirección con exito",
    Person_Success:"Se ha creado la persona con exito",
    Category_Success_Update:"Se ha actualizado correctamente la categoria",
    Product_Success_Update:"Se ha actualizado correctamente el producto",
    Address_Success_Update:"Se ha actualizado correctamente la dirección",
    Category_Success_Deleted:"La categoria se ha eliminado",
    Address_Success_Deleted:"Se ha eliminado la direccion con exito",
    InvalidParams:"Los parametros de entrada no son correctos",
    Category_Error:"Algo a ido mal con la categoría",
    No_Data_Category: "No hay coincidencias",
    No_Data_Product: 'No existen productos',
    No_Data_Provider: 'No existen proveedores',
    No_Data_Persons: 'No existen personas',
    No_Data_Avaible:'No existen categorías',
    No_Data_Address:'No existen direcciones'
  },
  Styles:{
    Valid:"valid pink-text",
    Invalid:"invalid pink-text",
    Error: 'red accent-2',
    Info: 'blue accent-2',
    Success: 'teal lighten-1',
    Warning: 'orange lighten-1'
  },
  Labels:{
    AddCategory:"Añadir Categorías",
    AddPerson:"Añadir Persona",
    AddAddress:"Añadir Dirección",
    DeleteCategory:"Eliminar Categoría",
    DeleteAddress:"Eliminar Dirección",
    DeleteProduct:"Eliminar Producto",
    CategoriesNoUsed:"Categorías sin usar",
    CategoriesUsed:"Categorías usadas",
    ModifyCategory: "Modificar Categorías",
    ModifyAddress: "Modificar Direcciones",
    Category:"Nombre Categoria",
    Person:"Nombre Persona",
    Province:"Provincia",
    Population:"Población",
    TypeVia:"Tipo de Vía",
    PostalCode:"Código Postal",
    Number:"Número del Portal",
    Door:"Puerta",
    Floor:"Planta",
    Street:"Calle",
    lastName:"1º Apellido",
    lastName2:"2º Apellido",
    dni:"DNI de la Persona",
    email:"Email de la Persona",
    movil:"movil de la Persona",
    telefone:"Telefone de la Persona",
    Description: "Descripción",
    Iva:"IVA",
    Cost:"Coste",
    Margin: "Margen",
    Ref:"Referencia",
    Stock:"Stock",
    Save:"Guardar",
    Yes: "Si",
    No: "No",
    Update:"Actualizar",
    Cancel:"Cancelar",
    Delete: "Eliminar",
    SelectCategories: "Categorías",
    SelectAddress: "Dirección",
    SelectResponsible: "Responsable",
    SelectContact: "Persona de Contacto",
    Control_Input_Required: "El campo debe estar informado",
    Confirm_Deleted_Category: "¿Estas seguro que quieres eliminar la categoría?",
    Confirm_Deleted_Address: "¿Estas seguro que quieres eliminar la dirección?",
    Confirm_Deleted_Product: "¿Estas seguro que quieres eliminar el producto?",
    ProductTitle: "Productos",
    ProviderTitle: "Proveedores",
    PersonTitle: "Personas",
    AddressTitle: "Direcciones",
    SearchProducts: "Buscar Productos",
    SearchProvider: "Buscar Proveedor",
    SearchPerson: "Buscar Persona",
    SearchAddress: "Buscar Población",
    AddProduct: "Añadir Productos",
    AddProvider: "Añadir Proveedor",
    UpdateProduct: "Actualizar Productos",
    UpdateProvider: "Actualizar Provider",
    Name: "Nombre",
    Cif: "CIF",
    SocialReason: "Razón Social",
    QuestionImage: "¿Desea añadir una imagen al producto creado?",
    QuestionImageChange: "¿Desea cambiar la imagen al producto?",
    TooltipNameProduct: "Nombre del producto",
    TooltipCategoy: "Seleccionar categorias asociadas al Proveedor",
    TooltipAddress: "Seleccionar la direccion de la empresa",
    TooltipResposible: "Responsable de la empresa proveedora",
    TooltipContact: "Seleccionar Contacto",
    TooltipCif: "Cif de la empresa",
    TooltipReason: "Nombre de la empresa",
    TooltipDesProduct: "Descripción del producto",
    TooltipCostProduct: "Coste del producto",
    TooltipRefProduct: "Referencia del producto",
    TooltipMarginProduct: "Margen del producto",
    TooltipStockProduct: "Stock del producto",
    TooltipIvaProduct: "Iva del producto"

  },
  headCategory:["Nombre", "Descripción", "IVA"],
  headProduct:["Nombre", "Descripción", "Coste", "Referencia", "Iva", "Margen", "Stock","Categoría", "Imagen"],
  headProvider:["Nombre Empresa", "Persona Responsable", "Persona Contacto", "NIF", "Dirección"],
  headPerson:["Nombre", "Apellido1", "Apellido2", "DNI", "Teléfono", "Mobil", "Email", "Imagen", "Población"],
  headAddress:["Provincia", "Población", "Tipo de Vía", "Código Postal", "Numero", "Piso", "Puerta", "Nombre Vía"],
  headListCategories:["Nombre Categoría"],

  messageToast:{
    NOSELECTEDITEM: "Debe seleccional un elemento antes de hacer algun cambio",
    CATEGORY_NEW_SUCCESS: "Se ha creado con exito la categoría",
    PRODUCT_NEW_SUCCESS: "Se ha creado con exito el producto",
    ADDRESS_NEW_SUCCESS: "Se ha creado la dirección con exito",
    ADDRESS_UPDATE_SUCCESS: "Se ha actualizado la dirección con exito",
    CATEGORY_ERROR: "Ha ocurrido un error con la categoría",
    PRODUCT_ERROR: "Ha ocurrido un error con el producto",
    PROVIDER_ERROR: "Ha ocurrido un error con el proveedor",
    PERSON_ERROR: "Ha ocurrido un error con las personas",
    ADDRESS_ERROR: "Ha ocurrido un error con la Dirección",
    CATEGORY_UPDATE_SUCCESS: "Se ha actualizado con exito la categoría",
    PRODUCT_UPDATE_SUCCESS: "Se ha actualizado con exito el producto",
    CATEGORY_DELETED_SUCCESS: "Se ha eliminado con exito la categoría",
    PRODUCT_DELETED_SUCCESS: "Se ha eliminado con exito el producto",
    ADDRESS_DELETED_SUCCESS: "Se ha eliminado con exito la direccion",
    NO_DATA_CATEGORY:"No hay datos coincidentes",
    NO_DATA_AVAIBLE:"No hay datos aún",
    NO_CATEGORY_DATA:"No hay creadas categorías todavía",
    MOVIL_OR_TELEFONE:"Necesita informar un movil o un telefono",
    ADDRESS_NECESARY:"Necesita informar una dirección"
  }
};
