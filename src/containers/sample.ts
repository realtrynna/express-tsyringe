import { autoInjectable, container, inject, injectable } from "tsyringe";

import { TransientClass, SingleTonClass, ResolutionScopedClass } from "./lifecycle-class";

@injectable()
export class Caller {
    constructor(
        // @inject(TransientClass) private readonly transientClass: TransientClass
    ) {
        console.log("caller constructor");
    }

    greet() {
        console.log("caller greet");
        // this.transientClass.greet();
    }
}

@autoInjectable()
export class Caller2 {
    constructor(
        private readonly transientClass: TransientClass,
        private readonly resolutionClass: ResolutionScopedClass
    ) {
    }

    greet() {
        console.log("hello caller2");
    }
}