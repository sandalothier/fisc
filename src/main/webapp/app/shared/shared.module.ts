import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FiscalisteSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FiscalisteSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FiscalisteSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FiscalisteSharedModule {
  static forRoot() {
    return {
      ngModule: FiscalisteSharedModule
    };
  }
}
