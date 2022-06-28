import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { UserData } from '../models/UserData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  constructor(public httpc:HttpClient) {
   

  }
  title = 'first-sample-project';
  
  CustomerModel: Product = new Product();
  CustmerModels: Array<Product> = new Array<Product>();
  user:UserData=new UserData();
  users: Array<UserData> = new Array<UserData>();
  AddCustomer() {
    console.log(this.CustomerModel);
    //this.CustmerModels.push(this.CustomerModel);

    var customerdto={
      productName:this.CustomerModel.productName,
      productDescription:this.CustomerModel.productDescription,
      catID:Number(this.CustomerModel.catID),
      productImage:this.CustomerModel.productImage,
      productMrp:Number(this.CustomerModel.productMrp),
      productDiscount:Number(this.CustomerModel.productDiscount),
      productFinal:Number(this.CustomerModel.productFinal),
      productQuantity:Number(this.CustomerModel.productQuantity)
     
    }
    this.httpc.post("https://localhost:44351/api/Product",customerdto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.CustomerModel = new Product();
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  getData(){
    console.log("Hi");
    this.httpc.get("https://localhost:44351/api/Login").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
}
GetSuccess(input:any){
  this.users=input;
}
GetError(input:any){
  console.log(input);
}
}
/*
 productName:string='';
    productDescription:string=''
    catID:number=0;
    productImage:string='';
    productMrp:number=0;
    productDiscount:number=0;
    productFinal:number=0;
    productQuantity:number=0;
*/