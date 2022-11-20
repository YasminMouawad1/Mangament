import { Injectable } from '@angular/core';
import { APIService } from '../../../core/services/http/api.service';
import { UrlEndpoints } from '../../constants/url-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _API: APIService) { }

  // Get All Users List
  getStatisticsList(){
    return this._API.doGet(UrlEndpoints.GET_StatisticsList)
  }

  getWaitingRiskApprovalList(){
    return this._API.doGet(UrlEndpoints.GET_WaitingRiskApprovalList)
  }

  getLimitReviw(){
    return this._API.doGet(UrlEndpoints.GET_ReviwList)
  }

  getBulkBorading(){
    return this._API.doGet(UrlEndpoints.GET_onBoradingList)
  }

  getCorpProfilePlus(code: Number){
    return this._API.doGet(UrlEndpoints.GET_CorpProfilePlus + code)
  }

  getUserDocumentsByClientId(mobileNumber: string){
    return this._API.doGet(UrlEndpoints.GET_UserDocumentsByClientId + mobileNumber)
  }

  softApproveCorporate(corpApprove: any){
    return this._API.doPost(UrlEndpoints.POST_softApproveCorporate, corpApprove)
  }

  getUserById(id: string){
return this._API.doGet(UrlEndpoints.GET_UserById + id)
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


  getRejectResponse(){
    return this._API.doGet(UrlEndpoints.GET_RejectResponse)
  }

  getmaritalStatus(){
    return this._API.doGet(UrlEndpoints.GET_maritalStatus)
  }

  getRiskRejectedProfileList(){
    return this._API.doGet(UrlEndpoints.GET_RejectedProfilePlusList)
  }

  getAllUsersList(name:string){
    return this._API.doPost(UrlEndpoints.POST_AllUsersList+name,name)
  }

  getRiskPermanentRejectedProfileList(){
    return this._API.doGet(UrlEndpoints.GET_PermanentRejectedProfilePlusList)
  }

  getClientActivation( mobileNumber : string){
    return this._API.doGet(UrlEndpoints.Get_ClientActivation+mobileNumber)
  }
}
