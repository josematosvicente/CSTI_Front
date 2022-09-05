import { RequestService } from './../request.service';
import { Request } from './../request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  req: Request = new Request();
  submitted = false;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  newRequest(): void {
    this.submitted = false;
    this.req = new Request();
  }

  save() {
    this.requestService.createRequest(this.req)
      .subscribe(data => console.log(data), error => console.log(error));
    this.req = new Request();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
