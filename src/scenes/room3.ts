import utils from "../../node_modules/decentraland-ecs-utils/index";
import gameObjects from "../gameObjects/index";
import resources from "../resources";

export function CreateRoom3(): void {

    const door = new gameObjects.Door(
        resources.models.door3,
        { position: new Vector3(24.11166, 7.17, 15.78) },
        resources.sounds.whip
    );
    door.isOpen = true;
    door.closeDoor();

    const trigger = new Entity();
    engine.addEntity(trigger);
    trigger.addComponent(new Transform({ position: new Vector3(25.5, 7.17, 19.5) }));

    trigger.addComponent(new utils.TriggerComponent(
        new utils.TriggerBoxShape(
            new Vector3(4.2, 3, 8),
            Vector3.Zero())
    ));


    const button = new gameObjects.Button(
        resources.models.roundButton,
        { position: new Vector3(22.4456, 5.92706, 24.17) },
    );

    button.addComponent(new OnPointerDown((): void => {
        button.press();
        door.openDoor(false);

        trigger.getComponent(utils.TriggerComponent).enabled = false;
    }));

    //codigo para inserir uma planta
    const fern1 = new gameObjects.MovableEntity(
        resources.models.plant1,
        { position: new Vector3(23.2489, 5.5071, 23.813) },
        resources.sounds.moveObject1,
        new Vector3(0, 0, -0.5)
    );

    //codigo para mover a planta pra frente quando clicado
    fern1.addComponent(
        new OnPointerDown((): void => {
            fern1.getComponent(utils.ToggleComponent).toggle();
        })
    );

    const fern2 = new gameObjects.MovableEntity(
        resources.models.plant2,
        { position: new Vector3(26.9419, 5.52006, 23.4817) },
        resources.sounds.moveObject1,
        new Vector3(0, 0, -0.5)
    );

    fern2.addComponent(
        new OnPointerDown((): void => {
            fern2.getComponent(utils.ToggleComponent).toggle();
        })
    );

    const fern3 = new gameObjects.MovableEntity(
        resources.models.plant3,
        { position: new Vector3(23.4513, 5.50571, 16.8218) },
        resources.sounds.moveObject1,
        new Vector3(0, 0, -0.5)
    );

    fern3.addComponent(
        new OnPointerDown((): void => {
            fern3.getComponent(utils.ToggleComponent).toggle();
        })
    );

    const fern4 = new gameObjects.MovableEntity(
        resources.models.plant4,
        { position: new Vector3(26.9878, 5.51511, 16.8279) },
        resources.sounds.moveObject1,
        new Vector3(0, 0, -0.5)
    );

    fern4.addComponent(
        new OnPointerDown((): void => {
            fern4.getComponent(utils.ToggleComponent).toggle();
        })
    );

}