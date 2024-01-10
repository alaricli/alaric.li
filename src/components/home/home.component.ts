import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src="assets/me.png" alt="Alaric Li" class="profile-image">
          <p class="title">
            Alaric Li
          </p>
          <p class="subtitle">
            <span>business + cs @ UBC</span>
            <span>prev: SAP</span>
          </p>
          <app-social-icons></app-social-icons>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .title {
      font-size: 36px;
    }
    .subtitle span {
      display: block;
    }
    .profile-image {
      width: 175px;
      height: 175px; 
      border-radius: 50%; 
      margin-bottom: 15px; 
    }
  `
  ]
})
export class HomeComponent {

}
