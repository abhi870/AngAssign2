import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaBoardSectionGlobalBodyComponent } from './idea-board-section-global-body/idea-board-section-global-body.component';
import { IdeaBoardSectionHeaderComponent } from './idea-board-section-header/idea-board-section-header.component';
import { IdeaBoardItemComponent } from './idea-board-item/idea-board-item.component';
import { AddSectionBoardComponent } from './add-section-board/add-section-board.component';
import { DragDrop, DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    IdeaBoardSectionGlobalBodyComponent,
    IdeaBoardSectionHeaderComponent,
    IdeaBoardItemComponent,
    AddSectionBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
