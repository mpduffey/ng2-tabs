System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Tab, Tabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Tab = (function () {
                function Tab() {
                    this.active = false;
                }
                __decorate([
                    core_1.Input('tabTitle'), 
                    __metadata('design:type', String)
                ], Tab.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Tab.prototype, "active", void 0);
                Tab = __decorate([
                    core_1.Component({
                        selector: 'tab',
                        styles: ["\n\t\t.pane {\n\t\t\tpadding: 1em;\n\t\t\tbackground-color: rgba(51,51,51,0.4);\n\t\t}\n\t"],
                        template: "\n\t\t<div [hidden]=\"!active\" class=\"pane\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tab);
                return Tab;
            }());
            exports_1("Tab", Tab);
            Tabs = (function () {
                function Tabs() {
                }
                Tabs.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // if there is no active tab set, activate the first
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                Tabs.prototype.selectTab = function (tab) {
                    // deactivate all tabs
                    this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
                    // activate the tab the user has clicked on.
                    tab.active = true;
                };
                __decorate([
                    core_1.ContentChildren(Tab), 
                    __metadata('design:type', core_1.QueryList)
                ], Tabs.prototype, "tabs", void 0);
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        template: "\n\t\t<ul class=\"nav nav-tabs\">\n\t\t\t<li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\" class=\"tab\">{{tab.title}}</li>\n\t\t</ul>\n\t\t<ng-content></ng-content>\n\t",
                        styles: ["\n\t\tli.tab {\n\t\t\tposition:\t\t\t\t\trelative;\n\t\t\tdisplay:\t\t\t\t\tblock;\n\t\t\tpadding:\t\t\t\t\t5px 10px;\n\t\t\tline-height:\t\t\t1.428571429;\n\t\t\tborder-radius:\t\t3px 3px 0 0;\n\t\t\tborder-bottom-color: transparent;\n\t\t\tcursor:\t\t\t\t\t\tdefault;\n    \tbackground-color: rgba(51,51,51,0.4);\n\t\t\tmargin:\t\t\t\t\t\t0 2px 2px 0;\n\t\t}\n\t\tli.tab:hover {\n\t\t\tbackground-color: #eeeeee;\n\t\t\tborder-color: #eeeeee #eeeeee #ddd;\n\t\t\tcolor: #666;\n\t\t}\n\t\tli.tab.active {\n\t\t\tbottom-border:\t\t2px solid rgba(51,51,51,0.4);\n\t\t\tpadding-bottom:\t\t7px;\n\t\t\tmargin-bottom:\t\t0;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tabs);
                return Tabs;
            }());
            exports_1("Tabs", Tabs);
        }
    }
});
//# sourceMappingURL=tabs.js.map