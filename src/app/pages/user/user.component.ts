import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from 'src/app/models/users.model';
import { DataService } from 'src/app/data-servise.';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { RepoModel } from 'src/app/models/repo.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userForm: FormGroup;
    id: number = null;
    result: number = 0;
    repos: RepoModel[] = [];
    constructor(private _service: DataService,
        private fb: FormBuilder,
        private _activatedRoute: ActivatedRoute) {

        this.userForm = this.fb.group({
            login: [null],
            id: [null],
            url: [null],
            name: [null],
            created_at: [null]
        });
        // Desabilita os inputs
        this.userForm.disable();
        // Esperamos o id que foi passado na rota
        this._activatedRoute.params.subscribe(ret => {
            this.id = ret['id'];
            // Se não for nulo ou indefinido, passamos o id para os métodos que esperam um id
            if (!isNullOrUndefined(this.id)) {
                this.find(this.id);
                this.findRepo(this.id);
            }
        })
    }

    ngOnInit() {

    }
    // Retorna as informações de um usuário específico
    find(id: number) {
        this._service
            .get(id)
            .toPromise()
            .then(ret => {
                this.userForm.patchValue(ret);
            });
    }
    // Retorna as informações dos repositórios de um usuário específico
    findRepo(id: number) {
        this._service
            .getRepos(id)
            .toPromise()
            .then(ret => {
                this.repos = ret;
            });
    }
}
