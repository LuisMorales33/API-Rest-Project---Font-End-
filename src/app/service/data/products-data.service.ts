import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constans';
import { Product } from 'src/app/list-products/list-products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(public http : HttpClient) { }

  setProducts(name:string){
    return this.http.get<Product>(`${API_URL}/users/${name}/products`);
  }  

  executeDeleteProduct(name:string, id:number){   
    return this.http.delete(`${API_URL}/users/${name}/products/${id}`);
  }

  retrieveProduct(name:string, id:number){   
    return this.http.get<Product>(`${API_URL}/users/${name}/products/${id}`);
  }

  updateProduct(name:string, id:number, product:Product){   
    return this.http.put<Product>(`${API_URL}/users/${name}/products/${id}`, product);
  }

  addProduct(name:string, product:Product){   
    return this.http.post<Product>(`${API_URL}/users/${name}/products`, product);
  }

}
