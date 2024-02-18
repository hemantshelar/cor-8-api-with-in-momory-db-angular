import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../StoresdbModels/Article';
import { ArticleService } from '../services/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  
  newArticle: Article = new Article();
  articalSaveMessage: string = "Pelase add article details and click on save.";
  
  constructor(private articleSvc: ArticleService,
    private http: HttpClient) {
  }

  saveArticle(){
    
    this.articalSaveMessage = "Saving new article.  Please wait..."
    this.articleSvc.saveArticle(this.newArticle).subscribe(data =>{
      this.articalSaveMessage = "Article saved successfully.";
    });
  }
}
