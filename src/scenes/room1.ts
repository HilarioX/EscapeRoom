import gameObjects from "../gameObjects/index";
import resources from "../resources";

export function CreateRoom1(): void {

    const door = new gameObjects.Door(
        resources.models.door1,
        { position: new Vector3(21.18, 10.9, 24.5) },
        resources.sounds.doorSqueak
    );

    let isDoorOpen = false;
    door.addComponent(
        new OnPointerDown((): void => {
            door.openDoor();
        })
    );

}
