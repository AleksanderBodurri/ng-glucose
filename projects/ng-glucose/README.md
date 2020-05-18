# NgGlucose

Angular lifecycle hooks as decorators. Compatible with Angular 9+.

## Usage

```typescript
import { Directive, ElementRef } from "@angular/core";
import { NgOnInit } from "ng-glucose";

@Directive({
  selector: "[appColor]",
})
export class ColourDirective {
  constructor(private el: ElementRef) {}

  @NgOnInit()
  private _setBackgroundColour(): void {
    this.el.nativeElement.style.backgroundColor = "black";
  }

  @NgOnInit()
  private _setFontColour(): void {
    this.el.nativeElement.style.color = "white";
  }
}
```

### Angular Lifecycle Decorators

| Lifecycle             |      Interface      |                Method |   ng-glucose decorator |
| --------------------- | :-----------------: | --------------------: | ---------------------: |
| On Changes            |      OnChanges      |           ngOnChanges |           @NgOnChanges |
| On Init               |       OnInit        |              ngOnInit |              @NgOnInit |
| Do Check              |       DoCheck       |             ngDoCheck |             @NgDoCheck |
| After Content Init    |  AfterContentInit   |    ngAfterContentInit |    @NgAfterContentInit |
| After Content Checked | AfterContentChecked | ngAfterContentChecked | @NgAfterContentChecked |
| After View Init       |    AfterViewInit    |       ngAfterViewInit |       @NgAfterViewInit |
| After View Checked    |  AfterViewChecked   |    ngAfterViewChecked |    @NgAfterViewChecked |
| On Destroy            |      OnDestroy      |           ngOnDestroy |           @NgOnDestroy |

## License

MIT
