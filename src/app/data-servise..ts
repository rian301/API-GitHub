import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from './models/users.model';
import { Observable } from 'rxjs';
import { RepoModel } from './models/repo.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public baseUrl = environment.apiEndpoint;

    constructor(private http: HttpClient) { }
    // Url base: https://api.github.com
    // Get simples que retorna todos os users = https://api.github.com/users
    getAll(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`${this.baseUrl}/users`);
    }
    // Get passando um id específico após /users = https://api.github.com/users/id
    get(id: number): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.baseUrl}/users/${id}`);
    }
    // Get passando um id após /user e complementando com o /repos = https://api.github.com/user/id/repos
    getRepos(id: number): Observable<RepoModel[]> {
        return this.http.get<RepoModel[]>(`${this.baseUrl}/user/${id}/repos`);
    }
}
