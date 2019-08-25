import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import { UserComponent } from '../../components/user/user.component'
import { HighlightDirective } from '../../directives/highlight.directive'
import { UpperPipe } from '../../pipes/upper.pipe'

@NgModule({
  declarations: [UserComponent, HighlightDirective, UpperPipe],
  imports: [CommonModule, IonicModule],
  exports: [UserComponent, HighlightDirective, UpperPipe],
})
export class AppCommonModule {}
