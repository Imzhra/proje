interface Item{
    Title : String;
    ProjectTitle : String;

    ContractorName : String;
    ContractNo : number;
    ContractFirstCost :number;
    ContractDate : Date | null;
    InitialContract : number;

    ContractorBase :string ;
    Month : string ;
    Year : number ;

    UpperHead : number;
    Regional : number ;
    WorkShopEquipment :number;
    ContractorSuggestion : number ;

    ContractorNotification : Date |null;
    ContractorFinishDate : Date |null ;
    FirstDeliveryDate : Date |null;
}

export default Item