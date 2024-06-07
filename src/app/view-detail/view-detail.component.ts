import { Component } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent {
  id: number = 0;
  detail: any;
  constructor(private userService: UserServicesService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['userId']
      debugger // Access userId without ':'
      this.userService.getAllStudentByID(this.id).subscribe((res) => {
        this.detail = res
      });
    });
  }


}
