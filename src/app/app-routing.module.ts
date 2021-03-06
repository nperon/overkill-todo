import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingPaths } from './shared/constants/routing-paths';
import { HomeComponent } from './home/home.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  { path: RoutingPaths.EMPTY, component: HomeComponent },
  { path: `${RoutingPaths.DETAIL}/:id`, component: TodoDetailComponent },
  { path: RoutingPaths.DEFAULT, component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppRoutingModule {
}
