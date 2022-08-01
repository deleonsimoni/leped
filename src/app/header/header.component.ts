import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@app/shared/interfaces';

import { AuthService } from '@app/shared/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user: User | null = null;

  selectedCountryCode = 'br';
  countryCodes = ['us', 'br'];

  constructor(
    private router: Router,
    private authService: AuthService,
    public translate: TranslateService
  ) {

  }


  public loadScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = "../../assets/js/leped2.js";
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngAfterViewInit() {
    this.loadScript();
  }
  logout(): void {
    this.authService.signOut();
    this.router.navigate(['']);
  }

  changeSelectedCountryCode(value: string): void {
    this.translate.use(value);
    this.selectedCountryCode = value;

  }
}
