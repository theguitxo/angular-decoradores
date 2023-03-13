export function AutoDestroy(component: any, key: string | symbol): void {
  const originalDestroy = component.ngOnDestroy;

  component.ngOnDestroy = function () {
    if (originalDestroy) {
      originalDestroy.call(this);
    }
    this[key].next();
    this[key].complete();
  }
}

export function SimpleDecorator(args: any) {
  console.log(`%cSimpleDecorator`, `color: blue`);
  console.log(args);
  return function(target: any) {
    console.log('Hello from Decorator');
    console.log(typeof target);
    console.log(target);
    console.log(`%c--------------`, `color: green`);
    console.log(`%c++++++++++++++`, `color: red`);

    Object.defineProperty(target.prototype, 'value1', {
      value: args.value1,
      writable: false
    });

    Object.defineProperty(target.prototype, 'value2', {
      value: args.value2,
      writable: false
    });
  }
}

export function OnInitDecorator(): ClassDecorator {
  return function(constructor: any) {

    const LIFECYCLE_HOOKS = [
      'ngOnInit',
      'ngOnChanges',
      'ngOnDestroy'
    ];

    LIFECYCLE_HOOKS.forEach(hook => {
      const original = constructor.prototype[hook];

      constructor.prototype[hook] = function(...args: any) {
        console.log(`%c${hook}`, `color: blue`);
        console.log(args);
        console.log(`%c🚀 ${constructor.name}`, `color: #FF0000; font-weight: bold`);
        console.log(`🐹 ${original}`);
        original.apply(this, args);
        console.log(`%c--------------`, `color: green`);
        console.log(`%c++++++++++++++`, `color: red`);
      }
    });
  }
}

export function DatosDecorator(): MethodDecorator {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    console.log(`%cDatosDecorator`, `color: blue`);
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    console.log(`%c--------------`, `color: green`);
    console.log(`%c++++++++++++++`, `color: red`);
  }
}
