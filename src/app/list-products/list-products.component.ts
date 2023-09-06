import { Component } from '@angular/core';
import { ProductsDataService } from '../service/data/products-data.service';
import { Router } from '@angular/router';

export class Product {
  constructor(
    public id:number,
    public description: String,
    public brand: String,
    public price: Number,
    public exist: Boolean,
    public date: Date
    ){ }
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  deleteMessage:String = ''
  products : any

  constructor(
    private prodService: ProductsDataService,
    private route:Router
    ){}  
  

  ngOnInit(){
    this.refreshPage()
  }

  refreshPage(){
    this.prodService.setProducts('in28minutes').subscribe(
        response=>{
          this.products = response
        }
      )
  }

  deleteProduct(id:number){
    //console.log(`delete product: ${id}`)
    this.prodService.executeDeleteProduct('in28minutes', id).subscribe(
      response => {
        console.log(response)
        this.refreshPage()
        this.deleteMessage = `Product ${id} deleted succesful!`
      }
    )  
  }

  updateProduct(id:number){
    console.log(`Editar el producto ${id}`)
    this.route.navigate(['product',id]) 
  }

  addProduct(){
    console.log('Add product');
    this.route.navigate(['product', -1]) 

      
  }

}
