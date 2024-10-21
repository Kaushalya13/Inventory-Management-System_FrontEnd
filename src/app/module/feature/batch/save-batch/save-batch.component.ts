import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-batch',
  templateUrl: './save-batch.component.html',
  styleUrl: './save-batch.component.scss'
})
export class SaveBatchComponent {
  batchForm: FormGroup; // Declare brandForm
  batchId: string | null = null; // Declare batchId

  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.batchForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  saveBatch(){
    console.log("save Brand")
  }
}
