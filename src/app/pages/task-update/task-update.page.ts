import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.page.html',
  styleUrls: ['./task-update.page.scss'],
  standalone: false,
})
export class TaskUpdatePage implements OnInit {
  taskForm: FormGroup;
  taskId!: string; // Asegura que la variable existe antes de usarse

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore,
    private fb: FormBuilder,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id')!;
    console.log('Task ID:', this.taskId); // 👉 Verifica que el ID se está obteniendo
    if (this.taskId) {
      await this.loadTask();
    }
  }

  async loadTask() {
    try {
      const taskRef = doc(this.firestore, 'tasks', this.taskId);
      const taskSnap = await getDoc(taskRef);
      if (taskSnap.exists()) {
        this.taskForm.setValue(taskSnap.data());
      } else {
        console.log('No se encontró la tarea');
      }
    } catch (error) {
      console.error('Error cargando la tarea:', error);
    }
  }

  async updateTask() {
    if (!this.taskForm.valid) {
      console.log('Formulario inválido');
      return;
    }

    const loading = await this.loadingController.create({ message: 'Guardando...' });
    await loading.present();

    try {
      const taskRef = doc(this.firestore, 'tasks', this.taskId);
      await updateDoc(taskRef, this.taskForm.value);
      await loading.dismiss();

      this.showToast('Tarea actualizada correctamente');
      this.router.navigate(['/tasks-list']); // 👉 Redirige después de actualizar
    } catch (error) {
      await loading.dismiss();
      console.error('Error actualizando la tarea:', error);
      this.showToast('Error al actualizar la tarea');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
