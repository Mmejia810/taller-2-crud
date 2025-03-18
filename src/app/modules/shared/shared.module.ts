import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// 📌 Importa los componentes compartidos correctamente
import { TaskFormComponent } from 'src/app/shared/components/task-form/task-form.component';
import { TaskItemComponent } from 'src/app/shared/components/task-item/task-item.component';
import { TaskDetailsComponent } from 'src/app/shared/components/task-details/task-details.component';
import { ReactiveFormsModule } from '@angular/forms';
// �� Importa ReactiveFormsModule para usar FormBuilder

// 📌 Importa los pipes compartidos
import { FechaPipe } from 'src/app/shared/pipes/fecha.pipe';

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    //FechaPipe // ✅ Descomentar si se usará en otros módulos
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    TaskFormComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
    //FechaPipe // ✅ Exportarlo si se usará en otros módulos
  ]
})
export class SharedModule {}
