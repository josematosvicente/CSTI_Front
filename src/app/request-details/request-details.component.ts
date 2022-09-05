import { Request } from './../request';
import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../request.service';
import { RequestListComponent } from '../request-list/request-list.component';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  @Input() request: Request;

  constructor(private requestService: RequestService, private listComponent: RequestListComponent) { }

  ngOnInit() {
  }

}
