import { Component } from '@angular/core';
import { ProductsDataService } from '../service/data/products-data.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../list-products/list-products.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  formAdd:any
  id:number =0
  product: any

  constructor(
    private service:ProductsDataService,
    private route:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.product  = new Product(this.id, '', '', 0, false, new Date())
    if(this.id != -1){
      this.formAdd = true
        this.service.retrieveProduct('in28minutes', this.id).subscribe(
         data => this.product = data
        )
    } else {
      
      }
        console.log(this.product)
  }

  saveProduct(){
    // console.log(`Save the product ${this.id}`);
    if(this.id === -1){
      this.service.addProduct('in28minutes', this.product).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['listProducts']) 
        }
      )
    } else {
      this.service.updateProduct('in28minutes', this.id, this.product).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['listProducts']) 
        }
      )
    }
    
  }

}
