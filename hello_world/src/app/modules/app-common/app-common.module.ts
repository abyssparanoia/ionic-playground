import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import { UserComponent } from '../../components/user/user.component'
import { HighlightDirective } from '../../directives/highlight.directive'

@NgModule({
  declarations: [UserComponent, HighlightDirective],
  imports: [CommonModule, IonicModule],
  exports: [UserComponent, HighlightDirective],
})
export class AppCommonModule {}
