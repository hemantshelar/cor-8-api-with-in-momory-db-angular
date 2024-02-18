import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddUpdateArticleComponent} from './article/add-update-article/add-update-article.component';
import { ListArticlesComponent } from './article/list-articles/list-articles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AddUpdateArticleComponent,
    ListArticlesComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularUI';
}
