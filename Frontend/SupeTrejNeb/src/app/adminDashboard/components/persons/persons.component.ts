import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CONSTANT} from "../../../services/constant";
import {Person} from "../../model/person/person.model";
import {PersonService} from "../../services/person/person.service";
import {MzToastService} from "ng2-materialize";
import {DataBrowser} from "../../../utils/dataBrowser";
import {AddressService} from "../../services/address/address.service";
import {AddressComponent} from "../address/address.component";

@Component({
  selector: 'persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [PersonService, MzToastService, DataBrowser, AddressService, AddressComponent]
})
export class PersonsComponent implements OnInit {

  public TITLE:string = CONSTANT.Labels.PersonTitle;
  public ADD_PERSON_TITTLE = CONSTANT.Labels.AddPerson;
  public SELECT_ADDRESS_TITTLE = CONSTANT.Labels.SelectAddress;
  public LABEL_PERSON = CONSTANT.Labels.Person;
  public LABEL_LASTNAME = CONSTANT.Labels.lastName;
  public LABEL_LASTNAME2 = CONSTANT.Labels.lastName2;
  public LABEL_DNI = CONSTANT.Labels.dni;
  public LABEL_EMAIL = CONSTANT.Labels.email;
  public LABEL_MOVIL = CONSTANT.Labels.movil;
  public LABEL_TELEFONE = CONSTANT.Labels.telefone;
  public LABEL_ADDRESS = CONSTANT.Labels.SelectAddress;
  public LABEL_SAVE = CONSTANT.Labels.Save;
  public LABEL_UPDATE = CONSTANT.Labels.Update;
  public LABEL_CANCEL = CONSTANT.Labels.Cancel;
  public searchResult:string = "";
  public PersonSearch:string = CONSTANT.Labels.SearchPerson;
  public headsTables:any = CONSTANT.headPerson;
  public headsTablesAddress:any = CONSTANT.headAddress;
  public responseServer:any;
  public Person_IN:Person;
  public bodyTable:any;
  public bodyTableAddress:any;
  public count:number;
  public operationType: string;
  public classStyleForm:string = "";
  public buttonSaveUpdate:boolean;
  public browser: any;
  public responseComponent: any;
  public invalidClassStyleForm:string = CONSTANT.Styles.Invalid;
  public validClassStyleForm:string = CONSTANT.Styles.Valid;
  public invalidClassStyleDNIForm:string = CONSTANT.Styles.Invalid;
  public validClassStyleDNIForm:string = CONSTANT.Styles.Valid;
  public classStyleDNIForm:string = "";
  public invalidClassStyleEmailForm:string = CONSTANT.Styles.Invalid;
  public validClassStyleEmailForm:string = CONSTANT.Styles.Valid;
  public classStyleEmailForm:string = "";

  @Output() sendPerson = new EventEmitter();

  constructor(private _personService:PersonService, private toastService: MzToastService, private _getDataBrowser: DataBrowser, private addreesComponent: AddressComponent) {
    this.Person_IN = new Person({nombre:"", apellido1:"", apellido2:"", direcction:"", dni: "", email: "", movil: 0, telefono: 0},{id:""},
      {page: 0}, {navegador: ""});
    this.buttonSaveUpdate = true;
    this.browser = this._getDataBrowser.getDataBrowser();
  }

  public getPerson(page){
    this.Person_IN.pagination.page = page*10;
    this._personService.getPersonPagination(this.Person_IN).subscribe(
      response=>{
        this.responseServer = response;
        if(this.responseServer.message === CONSTANT.ResponseServers.No_Data_Provider){
          this.toastService.show(CONSTANT.messageToast.NO_DATA_AVAIBLE, 4000, CONSTANT.Styles.Info);
        }else{
          this.bodyTable = this.responseServer.persons;
          this.emitPersons(this.bodyTable);
        }
      },error=>{
        this.toastService.show(CONSTANT.messageToast.PERSON_ERROR, 4000, CONSTANT.Styles.Error);
      }
    )
  }

  private emitPersons(listPerson_IN){
    this.sendPerson.emit({
      persons: listPerson_IN
    })
  }


  getAddrees(page){

    this.addreesComponent.getAddressByPagination(0);
    this.addreesComponent.sendData.subscribe(
      response=>{
        this.responseComponent = response;
        this.bodyTableAddress = this.responseComponent.address;
      },error=>{
        console.log("error");
      }
    );
  }

  selectAddress(event){
    this.Person_IN.dataPerson.direcction = event.object.id;
    $('#selectAddress').modal('close');
  }

  validateVisualForm(value){

    switch (value){
      case 'name':
        if(this.Person_IN.dataPerson.nombre == ""){
          this.classStyleForm = this.invalidClassStyleForm;
        }else{
          this.classStyleForm = this.validClassStyleForm;
        }
        break;
      case 'dni':
        if(this.Person_IN.dataPerson.dni == ""){
          this.classStyleDNIForm = this.invalidClassStyleDNIForm;
        }else{
          this.classStyleDNIForm = this.validClassStyleDNIForm;
        }
        break;
      case 'email':
        if(this.Person_IN.dataPerson.email == ""){
          this.classStyleEmailForm = this.invalidClassStyleEmailForm;
        }else{
          this.classStyleEmailForm = this.validClassStyleEmailForm;
        }
        break;
    }
  }

  addUpdatePerson(event){
    if (event.operation === CONSTANT.OperationTables.create) {
      this.operationType = CONSTANT.OperationTables.create;
      $('#createPerson').modal('open');
      this.buttonSaveUpdate = true;
    }

  }

  private createInstanceModal(){
    $('.modal').modal();
  }

  ngOnInit() {
    this.getPerson(0);
    this.createInstanceModal();

  }

  filterItem(){
    if(this.searchResult && this.searchResult.length > 2) {
      this.filterCategory();
    }else{
      this.getPerson(0);
    }
  }

  onSubmit(createUpdateForm){
      if(!this.Person_IN.dataPerson.movil && !this.Person_IN.dataPerson.telefono ){
        this.toastService.show(CONSTANT.messageToast.MOVIL_OR_TELEFONE, 4000, CONSTANT.Styles.Warning);
      }else if(!this.Person_IN.dataPerson.direcction){
        this.toastService.show(CONSTANT.messageToast.ADDRESS_NECESARY, 4000, CONSTANT.Styles.Warning);
      }else if(this.operationType === CONSTANT.OperationTables.create){
        this.Person_IN.direccionIp.navegador = this.browser.browser;
        this._personService.createPerson(this.Person_IN).subscribe(
          response=>{
             this.responseServer = response;
             if(this.responseServer.message === CONSTANT.ResponseServers.Person_Success){
               createUpdateForm.reset();
               this.getPerson(0);
               this.toastService.show(CONSTANT.ResponseServers.Person_Success, 4000, CONSTANT.Styles.Success);
               $('#createPerson').modal('close');
             }else if(this.responseServer.message === CONSTANT.ResponseServers.InvalidParams){
               this.toastService.show(CONSTANT.ResponseServers.InvalidParams, 4000, CONSTANT.Styles.Warning);
             }else{
               this.toastService.show(CONSTANT.messageToast.PERSON_ERROR, 4000, CONSTANT.Styles.Error);
             }
          },error=>{
            this.toastService.show(CONSTANT.messageToast.PERSON_ERROR, 4000, CONSTANT.Styles.Error);
          }
        )
      }
  }

  private filterCategory(){
    this._personService.getPersonFildered(this.searchResult).subscribe(
      response=>{
        this.responseServer = response;
        if(this.responseServer.message && this.responseServer.message == CONSTANT.ResponseServers.InvalidParams){
          this.toastService.show(CONSTANT.ResponseServers.InvalidParams, 4000, CONSTANT.Styles.Warning);
        }else if(this.responseServer.message && this.responseServer.message == CONSTANT.ResponseServers.No_Data_Category){
          this.toastService.show(CONSTANT.messageToast.NO_DATA_CATEGORY, 4000, CONSTANT.Styles.Info);
        }else{
          this.bodyTable = this.responseServer.persons;
          this.count = 0;
        }
      },error=>{
        this.toastService.show(CONSTANT.messageToast.PERSON_ERROR, 4000, CONSTANT.Styles.Error);
      }
    )
  }
}