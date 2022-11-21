export abstract class UrlEndpoints {
  //======================================= SHARED  =======================================

  static readonly POST_LOCATION: string = ' ';

  //======================================= Module X =======================================
  // Order
  static readonly GET_TEST: string = 'test';


  static readonly POST_TOKEN_AUTH: string = "api/Auth/ManagementLogin";
  static readonly GET_StatisticsList: string = 'api/Statistics/Stats';
  static readonly GET_ActiveClientsList: string = 'api/Statistics/ActiveClients';
  static readonly GET_OnboardingProcessClientsList: string = 'api/Statistics/OnboardingProcessClients';
  static readonly GET_WaitingForActivation: string = 'api/Statistics/WaitingForActivationClients';
  
  

  static readonly GET_RejectResponse: string = 'api/Risk/RejectResponse';
  static readonly GET_UserById: string = 'api/Risk/GetUserDocumentsByClientId?MobileNumber=';
  static readonly post_UpdateNationalIdData: string = 'api/Risk/EditNationalIDData';
  static readonly GET_maritalStatus: string = 'api/lookUps/MaritalStatuses';
  static readonly POST_ApproveUser: string = 'api/Risk/Approve';
  static readonly POST_SoftApproveUser: string = 'api/Risk/SoftApprove';
  static readonly Edit_RiskLimit: string = 'api/Risk/EditRiskLimt';
  
  
   
}
