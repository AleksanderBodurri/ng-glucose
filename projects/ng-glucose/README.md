# NgGlucose

A collection of decorators that patch into Angular lifecycles.

## Installation

```shell
npm i ng-glucose --save
```

## Usage

### Example

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

## Publishing

After building your library with `ng build ng-glucose`, go to the dist folder `cd dist/ng-glucose` and run `npm publish`.

## License

MIT
