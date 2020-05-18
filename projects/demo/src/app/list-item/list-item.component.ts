import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  NgAfterContentChecked,
  NgAfterContentInit,
  NgAfterViewChecked,
  NgAfterViewInit,
  NgDoCheck,
  NgOnChanges,
  NgOnDestroy,
  NgOnInit,
} from 'ng-glucose';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() item: {
    id: number;
    content: string;
  };

  logFlag = true;

  private _fromMethod(methodName: string): void {
    this.logFlag &&
      console.log(`Fired from item ${this.item.id} by ${methodName} method`);
  }

  private _fromDecorator(decoratorName: string): void {
    this.logFlag &&
      console.log(
        `Fired from item ${this.item.id} by ${decoratorName} decorator`
      );
  }

  @NgOnChanges()
  changes(changes: SimpleChanges): void {
    this._fromDecorator('NgOnChanges');
    this.logFlag && console.log(changes);
  }

  @NgOnInit()
  init(): void {
    this._fromDecorator('NgOnInit');
  }

  @NgDoCheck()
  doCheck(): void {
    this._fromDecorator('NgDoCheck');
  }

  @NgAfterContentInit()
  afterContentInit(): void {
    this._fromDecorator('NgAfterContentInit');
  }

  @NgAfterContentChecked()
  afterContentChecked(): void {
    this._fromDecorator('NgAfterContentChecked');
  }

  @NgAfterViewInit()
  afterViewInit(): void {
    this._fromDecorator('NgAfterViewInit');
  }

  @NgAfterViewChecked()
  afterViewChecked(): void {
    this._fromDecorator('NgAfterViewChecked');
  }

  @NgOnDestroy()
  destroy(): void {
    this._fromDecorator('NgOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._fromMethod('ngOnChanges');
  }

  ngOnInit(): void {
    this._fromMethod('ngOnInit');
  }

  ngDoCheck(): void {
    this._fromMethod('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this._fromMethod('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this._fromMethod('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this._fromMethod('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this._fromMethod('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this._fromMethod('ngOnDestroy');
  }
}
