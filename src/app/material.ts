import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { MatToolbarModule, MatIconModule, MatBadgeModule, MatMenuModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[MatButtonModule,MatCardModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatMenuModule ],
    exports:[MatButtonModule,MatCardModule, MatToolbarModule, MatIconModule,MatBadgeModule, MatMenuModule]
})
export class MaterialModule{}

