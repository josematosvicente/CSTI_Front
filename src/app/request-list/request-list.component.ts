import { RequestDetailsComponent } from '../request-details/request-details.component';
import { Observable } from "rxjs";
import { RequestService } from "./../request.service";
import { Request } from "./../request";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-request-list",
  templateUrl: "./request-list.component.html",
  styleUrls: ["./request-list.component.css"]
})
export class RequestListComponent implements OnInit {
  requests: Observable<Request[]>;

  constructor(private requestService: RequestService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.requests = this.requestService.getRequestsList();
  }

  deleteRequest(id: number) {
    this.requestService.deleteRequest(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
