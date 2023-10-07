import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css'],
})
export class GithubSearchComponent {
  searchTerm: string = '';
  users: any[] | undefined = [];
  apiUrl: string = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient) { }

  search() {
    const regex = /doublevpartners/g;
    const wordMatches = this.searchTerm.match(regex);
    const isInputValid = this.searchTerm.length > 3 && !wordMatches;

    if (isInputValid) {
      const apiUrl = `${this.apiUrl}${this.searchTerm}`;
      this.http.get(apiUrl).subscribe((data: any) => {
        this.users = data.items;
      });
    }
  }
}
