import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  ngOnInit(): void {}
  @Input() id: String = "0"
  @Input() photoCover: String = ""
  @Input() cardTitle: String = ""
  @Input() cardDescription: String = ""
}
