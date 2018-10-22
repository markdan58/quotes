import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { QuotesFormComponent } from "./quotes-form/quotes-form.component";
import { QuoteComponent } from './quote/quote.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [AppComponent,
     QuotesFormComponent, 
     QuoteComponent,
      QuotesDetailsComponent,
       StrikethroughDirective],
  imports: [BrowserModule, 
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
