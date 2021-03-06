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
    delete:"delete",
    download:"download"
  },
  ResponseServers:{
    Category_Success:"Se ha creado la categoria con exito",
    Direction_Success:"Se ha creado la dirección con exito",
    Person_Success:"Se ha creado la persona con exito",
    Provider_Success:"Se ha creado el proveedor con exito",
    Category_Success_Update:"Se ha actualizado correctamente la categoria",
    Product_Success_Update:"Se ha actualizado correctamente el producto",
    Address_Success_Update:"Se ha actualizado correctamente la dirección",
    Bill_Success_Update:"Se ha actualizado la factura",
    Category_Success_Deleted:"La categoria se ha eliminado",
    Address_Success_Deleted:"Se ha eliminado la direccion con exito",
    InvalidParams:"Los parametros de entrada no son correctos",
    Category_Error:"Algo a ido mal con la categoría",
    No_Data_Category: "No hay coincidencias",
    No_Data_Product: 'No existen productos',
    No_Data_Provider: 'No existen proveedores',
    No_Data_Persons: 'No existen personas',
    No_Data_Avaible:'No existen categorías',
    No_Data_Address:'No existen direcciones',
    No_Data_Bill:'No existen facturas'
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
    SelectPerson:"Seleccione Persona",
    SelectClient:"Seleccione Cliente",
    SelectProvider:"Seleccione Proveedor",
    SelectionCategories:"Seleccione Categorias",
    OldPerson:"Persona Antigua",
    SelectProduct:"Seleccione Productos",
    NewPerson:"Persona Nueva",
    DeleteCategory:"Eliminar Categoría",
    DeleteProvider:"Eliminar Proveedor",
    DeletePerson:"Eliminar Persona",
    DeleteBill:"Eliminar Factura",
    DeleteAddress:"Eliminar Dirección",
    DeleteProduct:"Eliminar Producto",
    SelectedBill:"Seleccione el modo de factura que desea crear",
    CategoriesNoUsed:"Categorías sin usar",
    CategoriesUsed:"Categorías usadas",
    ModifyCategory: "Modificar Categorías",
    ModifyAddress: "Modificar Direcciones",
    Category:"Nombre Categoria",
    Person:"Nombre Persona",
    Create:"Crear",
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
    dni:"DNI",
    email:"Email",
    movil:"Movil",
    telefone:"Teléfono",
    Description: "Descripción",
    Iva:"IVA",
    Cost:"Coste",
    Margin: "Margen",
    Ref:"Referencia",
    Stock:"Stock",
    StockMin:"Stock Minimo",
    Save:"Guardar",
    Yes: "Si",
    No: "No",
    Update:"Actualizar",
    Cancel:"Cancelar",
    BillAuto:"Factura Automática",
    BillManual:"Factura Manual",

    Close:"Cerrar",
    Reassign:"Reasignar",
    Delete: "Eliminar",
    SelectCategories: "Categorías",
    SelectAddress: "Dirección",
    InfoRecord: "Info del registro",
    SelectResponsible: "Responsable",
    SelectContact: "Persona de Contacto",
    Control_Input_Required: "El campo debe estar informado",
    Confirm_Deleted_Category: "¿Estas seguro que quieres eliminar la categoría?",
    Confirm_Deleted_Provider: "¿Estas seguro que quieres eliminar el proveedor?",
    Confirm_Deleted_Person: "¿Estas seguro que quieres eliminar la persona?",
    Confirm_Deleted_Bill: "¿Estas seguro que quieres eliminar la factura?",
    Confirm_Deleted_Address: "¿Estas seguro que quieres eliminar la dirección?",
    Confirm_Deleted_Product: "¿Estas seguro que quieres eliminar el producto?",
    Relation_Provider: "Existen varias relaciones de esta persona con algún proveedor\/es",
    Message_Info_Relation_Provider: "Antes de proceder a eliminar a una persona de base de datos, será necesario reasignar una nueva a los proveedores que estén implicados",
    Message_1: "Esta persona está como responsable en ",
    Message_2: " proveedores y como contacto en ",
    ProductTitle: "Productos",
    TicketTitle: "Tickets",
    Search:"Buscar",
    N_Ticket: "Número de referencia",
    Price_Ticket: "Precio",
    BillsTitle: "Facturas",
    ProviderTitle: "Proveedores",
    PersonTitle: "Personas",
    AddressTitle: "Direcciones",
    SearchProducts: "Buscar Productos",
    SearchBills: "Buscar Cliente",
    SearchProvider: "Buscar Proveedor",
    SearchPerson: "Buscar Persona",
    SearchAddress: "Buscar Población",
    AddProduct: "Añadir Productos",
    AddProvider: "Añadir Proveedor",
    UpdateProduct: "Actualizar Productos",
    UpdateProvider: "Actualizar Provider",
    UpdatePerson: "Actualizar Persona",
    Name: "Nombre",
    Cif: "CIF",
    SocialReason: "Razón Social",
    QuestionImage: "¿Desea añadir una imagen?",
    QuestionImageChange: "¿Desea cambiar la imagen?",
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
  hotkeys:["Control","Shift","Enter","ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Backspace", "Enter", "Alt", "Tab", "CapsLock", "NumLock", "Pause", "ScrollLock", "PrintScreen",
    "ContextMenu", "Control", "AltGraph", "Insert", "Home", "PageUp", "PageDown", "End", "Delete"],
  headCategory:["Nombre", "Descripción", "IVA"],
  headStock:["Producto", "Stock Minimo", "Stock Actual"],
  headTicket:["Nº Referencia", "Fecha", "Precio"],
  shoppingList:["Precio", "Cantidad", "Producto"],
  headProduct:["Nombre", "Descripción", "Coste", "Referencia", "Iva", "Margen", "Stock","Stock Min.","Categoría", "Imagen"],
  headBills:["Cliente", "Estado", "Tipo", "Número", "Fecha Creación","F.Cierre, F.Modificación, F.Pago","Importe"],
  headBillsAutoManual:["Producto", "Descripción", "Cantidad","Precio", "Precio Total"],
  headProvider:["Nombre Empresa", "Persona Responsable", "Persona Contacto", "NIF", "Dirección"],
  headPerson:["Nombre", "Apellido1", "Apellido2", "DNI", "Teléfono", "Móvil", "Email", "Imagen", "Población"],
  headAddress:["Provincia", "Población", "Tipo de Vía", "Código Postal", "Numero", "Piso", "Puerta", "Nombre Vía"],
  headListCategories:["Nombre Categoría"],

  messageToast:{
    NOSELECTEDITEM: "Debe seleccional un elemento antes de hacer algun cambio",
    CATEGORY_NEW_SUCCESS: "Se ha creado con exito la categoría",
    PROVIDER_NEW_SUCCESS: "Se ha creado con exito el proveedor",
    PRODUCT_NEW_SUCCESS: "Se ha creado con exito el producto",
    ADDRESS_NEW_SUCCESS: "Se ha creado la dirección con exito",
    ADDRESS_UPDATE_SUCCESS: "Se ha actualizado la dirección con exito",
    CATEGORY_ERROR: "Ha ocurrido un error con la categoría",
    BILL_ERROR: "Ha ocurrido un error con la factura",
    PRODUCT_ERROR: "Ha ocurrido un error con el producto",
    TICKET_ERROR: "Ha ocurrido un error con el Ticket",
    NOTIFICATIONS_ERROR: "Ha ocurrido un error con las notificaciones",
    PRODUCT_QUANTITY_ERROR: "Es necesario indicar la cantidad del producto",
    BILL_CREATE_SUCCESS: "Se ha creado la factura",
    BILL_UPDATE_SUCCESS: "Se ha actualizado la factura",
    BILL_EMPTY_ERROR: "Es necesario añadir al menos un producto a la factura",
    CLIENT_EMPTY_ERROR: "Es necesario indicar un cliente",
    PROVIDER_ERROR: "Ha ocurrido un error con el proveedor",
    PERSON_ERROR: "Ha ocurrido un error con las personas",
    ADDRESS_ERROR: "Ha ocurrido un error con la Dirección",
    CATEGORY_UPDATE_SUCCESS: "Se ha actualizado con exito la categoría",
    PROVIDER_UPDATE_SUCCESS: "Se ha actualizado con exito el proveedor",
    PRODUCT_UPDATE_SUCCESS: "Se ha actualizado con exito el producto",
    CATEGORY_DELETED_SUCCESS: "Se ha eliminado con exito la categoría",
    PROVIDER_DELETED_SUCCESS: "Se ha eliminado con exito el Proveedor",
    PRODUCT_DELETED_SUCCESS: "Se ha eliminado con exito el producto",
    ADDRESS_DELETED_SUCCESS: "Se ha eliminado con exito la direccion",
    PERSON_DELETED_SUCCESS: "Se ha eliminado con exito la persona",
    NO_DATA_CATEGORY:"No hay datos coincidentes",
    NO_DATA_AVAIBLE:"No hay datos aún",
    NO_DATA:"No hay datos",
    NO_DATA_CRITERIA:"No hay datos que coincida con la búsqueda",
    DELETED_BILL_SUCCESS:"Se ha eliminado con exito la factura",
    DELETED_BILL_ERROR:"Ha ocurrido un error al eliminar la factura",
    DOWNLOAD_BILL_ERROR:"Ha ocurrido un error al descargar la factura",
    NO_CATEGORY_DATA:"No hay creadas categorías todavía",
    MOVIL_OR_TELEFONE:"Necesita informar un movil o un telefono",
    ADDRESS_NECESARY:"Necesita informar una dirección",
    PARAMS_INVALID:"Los parámetros de entrada no son correctos"
  }
};
