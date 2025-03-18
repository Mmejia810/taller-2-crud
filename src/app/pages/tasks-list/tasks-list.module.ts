import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TasksListPageRoutingModule } from './tasks-list-routing.module';
import { TasksListPage } from './tasks-list.page';
import { SharedModule } from 'src/app/modules/shared/shared.module'; // ✅ Agrega SharedModule

@NgModule({
  imports: [

    TasksListPageRoutingModule,
    SharedModule // ✅ Ahora puede usar TaskItemComponent
  ],
  declarations: [TasksListPage] // ❌ NO incluyas TaskItemComponent aquí
})
export class TasksListPageModule {}
