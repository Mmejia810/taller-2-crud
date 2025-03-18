import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TasksCreatePageRoutingModule } from './tasks-create-routing.module';
import { TasksCreatePage } from './tasks-create.page';
import { SharedModule } from 'src/app/modules/shared/shared.module'; // ✅ Agrega SharedModule

@NgModule({
  imports: [

    TasksCreatePageRoutingModule,
    SharedModule // ✅ Ahora puede usar TaskFormComponent
  ],
  declarations: [TasksCreatePage] // ❌ NO incluyas TaskFormComponent aquí
})
export class TasksCreatePageModule {}
