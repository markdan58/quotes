import { Component, OnInit } from '@angular/core';
import { QuotesList } from '../quotes';
@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['../app.component.css']
})
export class QuoteComponent implements OnInit {
    quotes = QuotesList;

    upvoteQuote(id) {
        this.quotes[id - 1].quoteLikes += 1;
    }

    downvoteQuote(id) {
        this.quotes[id - 1].quoteDislikes += 1;
    }

    toggleDetail(id) {
        this.quotes[id - 1].detailsVisible = !this.quotes[id].detailsVisible;
    }

    QuoteDelete(isComplete, index) {
        if (isComplete) {
            let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].description}`);

            if (toDelete) {
                this.quotes.splice(index, 1)
            }
        }
    }

    constructor() { }

    ngOnInit() {
    }

}