/* tslint:disable:variable-name */

const angularLifeCycleInternalMappings: { [key: string]: string } = {
  ngOnChanges: 'onChanges',
  ngOnInit: 'onInit',
  ngDoCheck: 'doCheck',
  ngAfterContentInit: 'afterContentInit',
  ngAfterContentChecked: 'afterContentChecked',
  ngAfterViewInit: 'afterViewInit',
  ngAfterViewChecked: 'afterViewChecked',
  ngOnDestroy: 'onDestroy',
};

const lifecycleDecoratorFor = (lifecycle: string) => {
  const lifecycleMapping = angularLifeCycleInternalMappings[lifecycle];
  return () => {
    return (target: any, propertyKey: string): void => {
      if (lifecycle === 'ngOnChanges') {
        const onChanges = target[lifecycle];
        target[lifecycle] = function (): void {
          onChanges?.apply?.(this, arguments);
          target[propertyKey].apply(this, arguments);
        };
        return;
      }

      const isComponent = target.constructor.ɵcmp;
      const isDirective = target.constructor.ɵdir;

      if (isComponent) {
        const original = target.constructor.ɵcmp[lifecycleMapping];
        target.constructor.ɵcmp[lifecycleMapping] = function (): void {
          original?.apply?.(this, arguments);
          target[propertyKey].apply(this, arguments);
        };
      } else if (isDirective) {
        const original = target.constructor.ɵdir[lifecycleMapping];
        target.constructor.ɵdir[lifecycleMapping] = function (): void {
          original?.apply?.(this, arguments);
          target[propertyKey].apply(this, arguments);
        };
      } else {
        console.error(
          'ng-sugar lifecycle decorators cannot be applied to methods inside non-angular classes'
        );
      }
    };
  };
};

export const NgOnChanges = lifecycleDecoratorFor('ngOnChanges');
export const NgOnInit = lifecycleDecoratorFor('ngOnInit');
export const NgDoCheck = lifecycleDecoratorFor('ngDoCheck');
export const NgAfterContentInit = lifecycleDecoratorFor('ngAfterContentInit');
export const NgAfterContentChecked = lifecycleDecoratorFor(
  'ngAfterContentChecked'
);
export const NgAfterViewInit = lifecycleDecoratorFor('ngAfterViewInit');
export const NgAfterViewChecked = lifecycleDecoratorFor('ngAfterViewChecked');
export const NgOnDestroy = lifecycleDecoratorFor('ngOnDestroy');
