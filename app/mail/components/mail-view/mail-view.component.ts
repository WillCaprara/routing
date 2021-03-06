import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Mail } from '../../models/mail.interface';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async).from }}</h2>
      <p>{{ (message | async).full }}</p>
    </div>
  `
})
export class MailViewComponent {
  message: Observable<Mail> = this.route.data.pluck('message');

  constructor(private route: ActivatedRoute) { }
}
