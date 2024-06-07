import { Component } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
//add student
import { students } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {


  //show list
  detail: any;
  //add student
  data: students;
  //add student
  isPopup: boolean = false;
  //add student
  isVisibleAddBtn: boolean = true;
  //update student
  isVisibleUpdateBtn: boolean = false;
  constructor(private student: UserServicesService, private router: Router) {
    //add student
    this.data = {
      id: 0,
      name: '',
      email: '',
      mobile: '',
      password: '',
      profileImages: '',
    };
  }

  //show list
  ngOnInit() {
    this.student.getAllStudentDetails().subscribe((res) => {
      this.detail = res;
    });
  }

  //open popup
  openPopup() {
    this.isPopup = !this.isPopup;
    this.isVisibleAddBtn = true;
  }
  //add student
  sendData() {
    this.student.addStudentDetails(this.data).subscribe((res) => {
      console.log(res);
      this.isVisibleUpdateBtn = true;
    });
  }

  //delete student
  deleteData(id: number) {
    this.student.deleteStudent(id).subscribe((res) => {
      console.log(res);
    });
    this.detail = this.detail.filter((abc: { id: number; }) => abc.id !== id);

  }

  //update student
  updateData(data: any) {
    this.isPopup = true;
    this.data = data;
    this.isVisibleUpdateBtn = true;
    this.isVisibleAddBtn = false;
  }
  //update student
  updateUser(data: any) {
    this.student.updateStudentDetails(data, data.id).subscribe((res) => {
      console.log(res);
      this.isPopup = false;
    });
  }

  viewData(id: any) {
    this.router.navigate([`${id}/ViewUser`])
  }

}
