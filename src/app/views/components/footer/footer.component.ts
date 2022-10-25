import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    owlOptions: OwlOptions = {
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        autoHeight: false,
        navSpeed: 1000,
        dotsSpeed: 1000,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            480: {
                items: 2,
                nav: false,
            },
            768: {
                items: 2,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
            1600: {
                items: 1,
            },
        },
    };

    products: any = {};

    constructor() {}

    ngOnInit(): void {}

    getAddressData() {
      return [
        "Address: 123 Main Street, Anytown, CA 12345 - USA.",
        "Phone: (012) 800 456 789",
        "Fax: (012) 800 456 789",
        "Email: Contact@plazathemes.com"
      ]
    }

    getIcon(name: string) {
      if(name === "Facebook") {
        return "facebook fa fa-facebook";
      } else if(name === "Twitter") {
        return "twitter fa fa-twitter";
      } else if (name === "Youtube") {
        return "youtube fa fa-youtube";
      } else if (name === "Google") {
        return "google fa fa-google-plus";
      } else {
        return "instagram fa fa-instagram";
      }
    }

    socialNetworks(){
      return [
        {
          name: "Twitter",
          url: "http://twitter.com"
        },
        {
          name: "Google",
          url: "http://google.com"
        },
        {
          name: "Facebook",
          url: "http://facebook.com"
        },
        {
          name: "Youtube",
          url: "http://youtube.com"
        },
        {
          name: "Instagram",
          url: "http://instagram.com"
        }
      ]
    }

    getProducts() {
      return [
        {
          id: 1,
        },
        {
          id: 2,
        }
      ]
    }
}
