import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import { UserComponent } from '../../components/user/user.component'

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, IonicModule],
  exports: [UserComponent],
})
export class AppCommonModule {}
