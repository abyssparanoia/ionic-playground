import { Component, OnInit } from '@angular/core'
import { LoadingController } from '@ionic/angular'
import { EventService } from '../services/event.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  keywords: string = ''
  events: any[]

  constructor(public loadingCtrl: LoadingController, public eventService: EventService) {}

  ngOnInit() {}

  ionViewDidEnter() {}

  async getEvents() {
    const searchKeywords: string | '' = this.keywords.trim()

    if (!searchKeywords) return

    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
    })

    loader.present()

    const kwds = searchKeywords.split(' ').filter(v => v !== '')

    this.eventService.search(kwds).subscribe(
      (body: any) => {
        if (body && body.events) {
          if (this.keywords === searchKeywords) {
            this.events = body.events
          }
        }
        loader.dismiss()
      },
      (error: Error) => {
        console.error(error)
        loader.dismiss()
      },
    )
  }
}
