import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-li',
  templateUrl: './sidebar-li.component.html',
  styleUrls: ['./sidebar-li.component.scss']
})

export class SideBarLIComponent implements OnInit {
    @Input() liTitle:String;
    @Input() iconSrc:String;

    constructor() {
    }

    ngOnInit() {

    }
}
