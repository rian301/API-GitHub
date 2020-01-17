import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-servise.';
import { UserModel } from 'src/app/models/users.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    users: UserModel[] = [];

    constructor(private _service: DataService,
        private _router: Router) { }
    // Iniciamos o método sempre que o componente for iniciado
    ngOnInit() {
        this.getAll();
    }
    // Busca todos os usuários
    getAll() {
        this._service
            .getAll()
            .toPromise<UserModel[]>()
            .then(ret => {
                this.users = ret;
            })
    }
    // Espera receber um id que virá pela rota e na rota o id vai ser capturado pelo click no usuário escolhido
    find(id: number) {
        this._router.navigate([`/user/${id}`])
    }

}
