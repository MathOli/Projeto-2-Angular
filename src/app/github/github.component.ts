import { Component, OnInit } from '@angular/core';

import {GitbhubService} from '../gitbhub.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  git
  name:string
  bool:boolean

  mudar(b:boolean){
    if(b == true){
      this.name = "matholi"
      this.git = this.github.getInformationGit(this.name);
    }else{
      this.name = "felipe507"
      this.bool = b
      this.git = this.github.getInformationGit(this.name);
    }
  }

  constructor(
    private github: GitbhubService
  ) { }

  ngOnInit() {
    this.bool = true
    this.name = "matholi"
    this.git = this.github.getInformationGit(this.name);
  }


}