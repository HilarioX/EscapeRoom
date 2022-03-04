import gameObjects from "../gameObjects/index";
import resources from "../resources";
import utils from "../../node_modules/decentraland-ecs-utils/index";
import { ImageHint } from "../ui/imageHint";
import { Keypad } from "../ui/keypad";

export function CreateRoom5(gameCanvas: UICanvas) {

    const door = new gameObjects.Door(
        resources.models.door5,
        { position: new Vector3(19.5141, 5.54709, 25.676) },
        resources.sounds.doorSqueak
    );

    const painting = new gameObjects.Model(
        resources.models.picture,
        { position: new Vector3(22.2283, 7.60325, 20.9326) }
    );

    const paintingHint = new ImageHint(
        gameCanvas,
        resources.textures.fernHint,
    );
    paintingHint.container.visible = false;

    painting.addComponent(new OnPointerDown((): void => {
        paintingHint.container.visible = true;
    }));

    const carpet = new gameObjects.RotatableEntity(
        resources.models.carpet,
        {
            position: new Vector3(20.7079, 5.50579, 24.6273),
            rotation: Quaternion.Identity
        },
        resources.sounds.moveObject1,
        Quaternion.Euler(0, -14, 0)
    );
    carpet.addComponent(
        new OnPointerDown((): void => {
            carpet.getComponent(utils.ToggleComponent).toggle();
        })
    );

    const postit = new gameObjects.Model(
        resources.models.postit,
        { position: new Vector3(21.571, 5.50857, 25.9534) }
    );

    const postitHint = new ImageHint(
        gameCanvas,
        resources.textures.postitHint
    )
    postitHint.container.visible = false;
    postit.addComponent(
        new OnPointerDown((): void => {
            postitHint.container.visible = true;
        })
    );

    const keypad = new Keypad(gameCanvas);
    keypad.container.visible = false;

    const numPadLock = new gameObjects.NumPadLock(resources.models.numpad1);
    numPadLock.addComponent(new OnPointerDown((): void => {
        keypad.container.visible = true;
    }));

    let currentInput = "";
    keypad.onInput = (value: number): void => {
        currentInput += value;
        keypad.display(currentInput);
        numPadLock.playButtonPressed();
    };
    keypad.onReset = (): void => {
        currentInput = "";
        keypad.display(currentInput);
        numPadLock.playButtonPressed();
    };
    keypad.onSubmit = (): void => {
        if (currentInput == "155") {
            // Correct!
            keypad.display("OK!", Color4.Green());
            numPadLock.playAccessGranted();
            numPadLock.addComponentOrReplace(
                new utils.ExpireIn(2000, (): void => {
                    keypad.container.visible = false;
                    door.openDoor();
                })
            );
        } else {
            // The password is incorrect
            keypad.display("Err", Color4.Red());
            numPadLock.playAccessDenied();
            currentInput = "";
        }
    };
}