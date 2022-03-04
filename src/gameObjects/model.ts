export class Model extends Entity {
    constructor(model: GLTFShape, transform: TransformConstructorArgs) {
        super();
        engine.addEntity(this);

        this.addComponent(new Transform(transform));
        this.addComponent(model);
    }
}