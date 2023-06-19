  import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from './../../data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id")
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: String | null) {
    const result = data.filter(article => article.id == id)[0]


    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.cover

  }

  private id: String | null = "0"
  @Input() photoCover: String = "https://picsum.photos/1200/500"
  @Input() contentTitle: String = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et aliquam velit."
  @Input() contentDescription: String = "Praesent auctor tellus in rhoncus laoreet. Sed nunc risus, facilisis non aliquam non, mollis nec magna. Ut sed enim id massa varius dignissim vitae ut risus. Ut hendrerit rutrum sapien eu tristique. Donec quis consequat ipsum, convallis tempus felis. Vivamus nulla augue, fermentum ullamcorper tempor in, ornare non sapien. Nulla id metus leo. Suspendisse nec orci eros. Nunc sollicitudin, lorem molestie suscipit dignissim, quam ligula mollis nunc, quis eleifend tortor arcu ut magna. Nullam auctor maximus velit vel feugiat. Duis ipsum justo, aliquam sit amet lacus eget, vulputate congue neque. Praesent auctor tellus in rhoncus laoreet. Sed nunc risus, facilisis non aliquam non, mollis nec magna. Ut sed enim id massa varius dignissim vitae ut risus. Ut hendrerit rutrum sapien eu tristique. Donec quis consequat ipsum, convallis tempus felis. Vivamus nulla augue, fermentum ullamcorper tempor in, ornare non sapien. Nulla id metus leo. Suspendisse nec orci eros. Nunc sollicitudin, lorem molestie suscipit dignissim, quam ligula mollis nunc, quis eleifend tortor arcu ut magna. Nullam auctor maximus velit vel feugiat. Duis ipsum justo, aliquam sit amet lacus eget, vulputate congue neque. Praesent auctor tellus in rhoncus laoreet. Sed nunc risus, facilisis non aliquam non, mollis nec magna. Ut sed enim id massa varius dignissim vitae ut risus. Ut hendrerit rutrum sapien eu tristique. Donec quis consequat ipsum, convallis tempus felis. Vivamus nulla augue, fermentum ullamcorper tempor in, ornare non sapien. Nulla id metus leo. Suspendisse nec orci eros. Nunc sollicitudin, lorem molestie suscipit dignissim, quam ligula mollis nunc, quis eleifend tortor arcu ut magna. Nullam auctor maximus velit vel feugiat. Duis ipsum justo, aliquam sit amet lacus eget, vulputate congue neque."
}
