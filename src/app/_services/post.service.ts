import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class PostService
{
    constructor(private http : HttpClient) {}

    previewsByCategory(category:string, sorting: string) { return this.http.get(`${Api}/post/preview/${category}/${sorting}`)}
    previews(sorting: string) { return this.http.get(`${Api}/post/preview/${sorting}`)}
    details(id: string) { return this.http.get(`${Api}/post/${id}`)}
    delete(id:string) { return this.http.delete(`${Api}/post/${id}`)}
    create(data) { return this.http.post<any>(`${Api}/post/`, JSON.stringify(data), { headers : new HttpHeaders({'Content-Type': 'application/json'})})}
    update(data) { return this.http.put<any>(`${Api}/post/`, JSON.stringify(data), { headers : new HttpHeaders({'Content-Type': 'application/json'})})}

    updateCategory(data) { return this.http.put<any>(`${Api}/category/`, JSON.stringify(data), { headers : new HttpHeaders({'Content-Type': 'application/json'})})}
    categoryFind(id:string) { return this.http.get(`${Api}/category/${id}`)}
    categories() { return this.http.get(`${Api}/category`)}
    createCategory(data) { return this.http.post<any>(`${Api}/category/`, JSON.stringify(data), { headers : new HttpHeaders({'Content-Type': 'application/json'})})}
    deleteCategory(id:string) { return this.http.delete(`${Api}/category/${id}`)}
}