import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../StoresdbModels/Article';
import { ArticleService } from '../services/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SalesOrgService } from '../services/sales-org.service';
import { SalesOrg } from '../Models/SalesOrg';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  existingSalesOrgs: SalesOrg[] = [];
  newArticle: Article = new Article();
  articalSaveMessage: string = "Pelase add article details and click on save.";
  
  constructor(private articleSvc: ArticleService,
    private salesOrgSvc: SalesOrgService,
    private http: HttpClient) {
      
      
  }
  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(){
  }

  loadData(){
    this.salesOrgSvc.getSalesOrgs()?.subscribe(data => {
      this.existingSalesOrgs = data;
    });
  }

  saveArticle(){

    this.articalSaveMessage = "Saving new article.  Please wait..."
    this.articleSvc.saveArticle(this.newArticle).subscribe(data =>{
      this.articalSaveMessage = "Article saved successfully.";
    });
  }
}
