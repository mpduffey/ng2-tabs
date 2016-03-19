import {Component, Input, ContentChildren, QueryList, AfterContentInit} from 'angular2/core';

@Component({
	selector: 'tab',
	styles: [`
		.pane {
			padding: 1em;
			background-color: rgba(51,51,51,0.4);
		}
	`],
	template: `
		<div [hidden]="!active" class="pane">
			<ng-content></ng-content>
		</div>
	`
})
export class Tab {
  @Input('tabTitle') title: string;
  @Input() active = false;
}
 
@Component({
  selector: 'tabs',
	template:`
		<ul class="nav nav-tabs">
			<li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active" class="tab">{{tab.title}}</li>
		</ul>
		<ng-content></ng-content>
	`,
	styles: [`
		li.tab {
			position:					relative;
			display:					block;
			padding:					5px 10px;
			line-height:			1.428571429;
			border-radius:		3px 3px 0 0;
			border-bottom-color: transparent;
			cursor:						default;
    	background-color: rgba(51,51,51,0.4);
			margin:						0 2px 2px 0;
		}
		li.tab:hover {
			background-color: #eeeeee;
			border-color: #eeeeee #eeeeee #ddd;
			color: #666;
		}
		li.tab.active {
			bottom-border:		2px solid rgba(51,51,51,0.4);
			padding-bottom:		7px;
			margin-bottom:		0;
		}
	`]
})
export class Tabs implements AfterContentInit {
	@ContentChildren(Tab) tabs: QueryList<Tab>;

	ngAfterContentInit() {
		// get all active tabs
		let activeTabs = this.tabs.filter((tab)=>tab.active);

		// if there is no active tab set, activate the first
		if(activeTabs.length === 0) {
			this.selectTab(this.tabs.first);
		}
	}

	selectTab(tab: Tab){
		// deactivate all tabs
		this.tabs.toArray().forEach(tab => tab.active = false);

		// activate the tab the user has clicked on.
		tab.active = true;
	}
}