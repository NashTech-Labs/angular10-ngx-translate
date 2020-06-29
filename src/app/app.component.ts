import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang10-NGX-translate';
  languageList = [
    {code: 'en', label: 'English'},
    {code: 'fr', label: 'French'}
  ];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
