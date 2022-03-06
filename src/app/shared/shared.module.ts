import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        ScrollComponent,
        ConfirmationComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        MaterialModule,
        ScrollComponent,
    ],
})
export class SharedModule { }
