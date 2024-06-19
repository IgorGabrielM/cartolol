import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PlayerCardComponent } from './player-card/player-card.component';

@NgModule({
    declarations: [
        HeaderComponent,
        PlayerCardComponent,
    ],
    exports: [
        HeaderComponent,
        PlayerCardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
})
export class ComponentsModule { }
