import { Door } from "../gameObjects/index";
export function CreateRoom1(): void {

    const door = new Door(
        new GLTFShape("models/room1/Puzzle01_Door.glb"),
        { position: new Vector3(21.18, 10.9, 24.5) },
        new AudioClip("sounds/door_squeak.mp3")
    );

    let isDoorOpen = false;
    door.addComponent(
        new OnPointerDown((): void => {
            door.openDoor();
        })
    );

}
