import { HttpClient } from '@angular/common/http';
import { Api } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class PostService
{
    constructor(private http : HttpClient) {}

    previews(sorting: string) { return this.http.get(`${Api}/post/preview/${sorting}`)}
    details(id: string) { return this.http.get(`${Api}/post/${id}`)}
}