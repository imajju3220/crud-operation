import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//add student
import { students } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private http: HttpClient) { }
  //login
  getStudentDetails(email: string, password: string): Observable<any> {
    var url = 'https://localhost:7130/api/Account/Login';
    return this.http.get<any>(`${url}/${email}/${password}`);
  }

  //dashboard students list
  getAllStudentDetails(): Observable<any> {
    var url = 'https://localhost:7130/api/Student/GetStudent';
    return this.http.get<any>(`${url}`);
  }

  //add student
  addStudentDetails(data: students): Observable<students> {
    var url = 'https://localhost:7130/api/Student/addStudent';
    return this.http.post<any>(`${url}`, data);
  }

  //delete
  deleteStudent(id: number): Observable<any> {
    var url = 'https://localhost:7130/api/Student/Deletestudent';
    return this.http.delete<any>(`${url}/${id}`);
  }

  //update student
  updateStudentDetails(data: students, id: number): Observable<students> {
    var url = `https://localhost:7130/api/Student/UpdateStudent/${id}`;
    return this.http.put<any>(`${url}`, data);
  }

  getAllStudentByID(id: any): Observable<any> {
    debugger
    const url = `https://localhost:7130/api/Student/GetStudentById/${id}`;
    return this.http.get<any>(`${url}`);
  }
}
