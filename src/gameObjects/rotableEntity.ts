import utils from "../../node_modules/decentraland-ecs-utils/index";

export class RotableEntity extends Entity {

    constructor(
        model: GLTFShape,
        transform: TransformConstructorArgs,
        sound: AudioClip,
        rotation: Quaternion
    ) {
        super();
        engine.addEntity(this);

        this.addComponent(model);
        this.addComponent(new Transform(transform));
        this.addComponent(new AudioSource(sound));

        const startRot = transform.rotation;
        const endRot = rotation;

        this.addComponent(
            new utils.ToggleComponent(utils.ToggleState.Off, (value): void => {
                if (value == utils.ToggleState.On) {
                    this.addComponentOrReplace(
                        new utils.RotateTransformComponent(
                            this.getComponent(Transform).rotation,
                            endRot,
                            0.5
                        )
                    );
                }
                else {
                    this.addComponentOrReplace(
                        new utils.RotateTransformComponent(
                            this.getComponent(Transform).rotation,
                            startRot,
                            0.5,
                        )
                    );
                }

                this.getComponent(AudioSource).playOnce();
            })
        );
    }

}
