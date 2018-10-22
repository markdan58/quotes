import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes'
@Component({
    selector: 'app-quotes-details',
    templateUrl: './quotes-details.component.html',
    styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {