import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

export class BigCardComponent implements OnInit {
  ngOnInit(): void {}
  @Input() id: String = "0"
  @Input() photoCover: String = "";
  @Input() cardTitle: String = "";
  @Input() cardDescription: String = "";
}
