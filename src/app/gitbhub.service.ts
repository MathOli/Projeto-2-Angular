import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GitbhubService {

  name:string;

  getInformationGit(nome:string){
    this.name = nome;
    return this.http.get('https://api.github.com/users/'+ this.name +'/repos')
  }

  constructor(
    private http: HttpClient
  ) { }

}

