import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
<<<<<<< HEAD
import { RatingComponent } from './components/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ShopProductComponent } from './components/shop-product/shop-product.component';
=======
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

>>>>>>> 614fa706e8da197d0a7eb10468fad4234d7e3460
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    ShopComponent,
    ProductsComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AddproductComponent,
<<<<<<< HEAD
    RatingComponent,
    FilterProductComponent,
    ShopProductComponent
=======
    CartComponent
>>>>>>> 614fa706e8da197d0a7eb10468fad4234d7e3460
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
    FormsModule,
>>>>>>> 614fa706e8da197d0a7eb10468fad4234d7e3460
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
