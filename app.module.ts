import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule, defaultCmsContentConfig } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import {SimonModule} from './simon/simon.module';
import {
   CURRENCY_CONTEXT_ID,
   LANGUAGE_CONTEXT_ID,
 } from '@spartacus/core';


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      B2cStorefrontModule.withConfig({
         backend: {
           occ: {
             baseUrl:"https://localhost:9002",
             prefix: "/rest/v2/",
             legacy: false
           }
         },
         authentication: {
           client_id: "mobile_android",
           client_secret: "secret"
         },
         context: {
           baseSite: ["electronics-spa"],
           [LANGUAGE_CONTEXT_ID]: [
            'en'
           ],
           [CURRENCY_CONTEXT_ID]: [
            'USD',
           ]
         },
         i18n: {
           resources: translations,
           chunks: translationChunksConfig,
           fallbackLang: "en"
         }
       }),
      ConfigModule.withConfigFactory(defaultCmsContentConfig),
      SimonModule
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule { }
