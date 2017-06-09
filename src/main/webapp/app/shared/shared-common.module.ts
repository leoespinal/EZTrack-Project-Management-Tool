import { NgModule, Sanitizer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertService } from 'ng-jhipster';
import {
    Testangular4SharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

export function alertServiceProvider(sanitizer: Sanitizer) {
    // set below to true to make alerts look like toast
    const isToast = false;
    return new AlertService(sanitizer, isToast);
}

@NgModule({
    imports: [
        Testangular4SharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        {
            provide: AlertService,
            useFactory: alertServiceProvider,
            deps: [Sanitizer]
        },
        Title
    ],
    exports: [
        Testangular4SharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class Testangular4SharedCommonModule {}
