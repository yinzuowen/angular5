import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 登录
import { LoginComponent } from './login/login.component';

// 父容器
import { IndexComponent } from './index/index.component';

// 子组件模块
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [{
    path: '', component: LoginComponent, pathMatch: 'full' // 默认路由(登录)
}, {
    path: 'index', component: IndexComponent, children: [{
        path: '', redirectTo: 'page1', pathMatch: 'full'
    }, {
        path: 'page1', component: Page1Component
    }, {
        path: 'page2', component: Page2Component
    }, {
        path: 'page3', component: Page3Component
    }, {
        path: 'page4', component: Page4Component
    }]
}, {
    path: '**', component: Page404Component
}];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }
