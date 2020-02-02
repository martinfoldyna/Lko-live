import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ArticlesComponent} from "./articles.component";

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    // children: [
    //   {
    //     path: 'overview',
    //     component: ArticlesOverviewComponent,
    //   },
    //   {
    //     path: 'add',
    //     component: ArticleAddComponent,
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'overview',
    //   },
    // ],
  },


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ArticlesRoutingModule {
}
