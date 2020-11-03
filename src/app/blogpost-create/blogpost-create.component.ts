import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-create',
  templateUrl: './blogpost-create.component.html',
  styleUrls: ['./blogpost-create.component.css']
})
export class BlogpostCreateComponent implements OnInit {

  creationForm:FormGroup;


  constructor(private fb:FormBuilder, private blogpostService : BlogpostService) {

   }

  ngOnInit(): void {
  this.createForm();
  }

  createForm(){
    this.creationForm = this.fb.group({
      title:'',
      subtitle:'',
      content:''
    })
  }

  createBlogpost(formDirective:FormGroupDirective){
    if (this.creationForm.valid){
    this.blogpostService.createBlogPost(this.creationForm.value)
    .subscribe(data=> this.handleSuccess(data,formDirective), error => this.handleError(error));
    }
  }

  handleSuccess(data,formDirective){
    console.log('blogpost a bien été créé',data);
    this.creationForm.reset();
    formDirective.resetForm();
    this.blogpostService.dispatchBlogpostCreated(data._id);
  }

  handleError(err){
    console.error("KO, blogpost not created",err);
  }
}
