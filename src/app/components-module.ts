import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

// Todos os componentes compartilhados ficam aqui. Basta chamar este componente e terá acesso a todos que estão nele
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
