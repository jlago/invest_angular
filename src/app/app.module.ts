import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { InvestimentoService } from './common/services/investimento.service'
import { AppComponent } from './app.component';
import { InvestimentoListComponent } from './common/component/investimento-list/investimento-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestimentoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InvestimentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
