import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'social-proof-section-angular';
  reviewSites: string[] = ['Reviews', 'Report Guru', 'BestTech'];
  reviewers: object[] = [
    {
      name: 'Colton Smith ',
      img: './assets/images/image-colton.jpg',
      review:
        'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
    },
    {
      name: 'Irene Roberts',
      img: './assets/images/image-irene.jpg',
      review:
        'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
    },
    {
      name: 'Anne Wallace',
      img: './assets/images/image-anne.jpg',
      review:
        'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
    },
  ];
}
