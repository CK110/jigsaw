import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawRangeTimeModule} from "jigsaw/component/range-time/index";
import {JigsawTileSelectModule} from "jigsaw/component/list-and-tile/tile";
import {RangeTimeGrComponent} from "./app.component";
@NgModule({
    declarations: [RangeTimeGrComponent],
    bootstrap: [RangeTimeGrComponent],
    imports: [JigsawRangeTimeModule,JigsawTileSelectModule,CommonModule]
})
export class RangeTimeGrModule{

}
