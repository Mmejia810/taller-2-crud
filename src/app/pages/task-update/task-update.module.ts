import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskUpdatePageRoutingModule } from './task-update-routing.module';

import { TaskUpdatePage } from './task-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TaskUpdatePage]
})
export class TaskUpdatePageModule {}
