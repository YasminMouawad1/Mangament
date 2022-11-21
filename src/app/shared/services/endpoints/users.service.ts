import { Injectable } from '@angular/core';
import { APIService } from '../../../core/services/http/api.service';
import { UrlEndpoints } from '../../constants/url-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _API: APIService) { }
 
  getStatisticsList(){
    return this._API.doGet(UrlEndpoints.GET_StatisticsList)
  }

  getActiveClientsList(){
    return this._API.doGet(UrlEndpoints.GET_ActiveClientsList)
  }

  getOnboardingProcessClients(){
    return this._API.doGet(UrlEndpoints.GET_OnboardingProcessClientsList)
  }

  getWaitingForActivation(){
    return this._API.doGet(UrlEndpoints.GET_WaitingForActivation)
  }


  getWaitingRiskApprval(){
    return this._API.doGet(UrlEndpoints.GET_WaitingRiskApproval)
  }

  getRejectResponse(){
    return this._API.doGet(UrlEndpoints.GET_RejectResponse)
  }

  getUserById(id: string){
    return this._API.doGet(UrlEndpoints.GET_UserById + id)
  }

  getmaritalStatus(){
    return this._API.doGet(UrlEndpoints.GET_maritalStatus)
  }

  postUser(userApprove: any){
    return this._API.doPost(UrlEndpoints.POST_ApproveUser, userApprove)
  }

  EditUserNationalIdData(userData:any){
    return this._API.doPost(UrlEndpoints.post_UpdateNationalIdData, userData)
    
  }
  softApproveUser(userApprove: any){
    return this._API.doPost(UrlEndpoints.POST_SoftApproveUser, userApprove)
  }
  editRiskLimit(userApprove: any){
    return this._API.doPost(UrlEndpoints.Edit_RiskLimit, userApprove)
  }
  
}
