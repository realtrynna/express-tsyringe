import {Lifecycle, scoped, singleton} from "tsyringe";

export class TransientClass {
    constructor() {
        console.log("TransientClass");
    }

    greet() {
        console.log("hello Transient");
    }
}

@singleton()
export class SingleTonClass {
    constructor() {
        console.log("singleton constructor");
    }

    greet() {
        console.log("hello singleton");
    }
}

@scoped(Lifecycle.ResolutionScoped)
export class ResolutionScopedClass {
    constructor() {
        console.log("resolutionScoped constructor");
    }

    greet() {
        console.log("hello resolution");
    }
}