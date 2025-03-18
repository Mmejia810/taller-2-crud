export interface Task {
  id?: string;        // id es opcional, ya que será asignado automáticamente por Firebase
  name: string;
  description: string;
  date: string;
  done?: boolean; // ← Agregamos esta propiedad
}
