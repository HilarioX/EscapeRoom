import utils from '../../node_modules/decentraland-ecs-utils/index';
import { Door, Button, Timer } from '../gameObjects/index';

export function CreateRoom2(): void {

    const door = new Door(
        new GLTFShape("models/room2/Puzzle02_Door.glb"),
        {
            position: new Vector3(24.1, 5.51634, 24.9)
        },
        new AudioClip("sounds/door_squeak.mp3")
    );

    const countdownClock = new Timer({
        position: new Vector3(25.1272, 9.51119, 25.2116),
        rotation: Quaternion.Euler(20, 180, 0)
    });

    countdownClock.updateTimestring(5);

    const button = new Button(
        new GLTFShape("models/room2/Square_Button.glb"),
        {
            position: new Vector3(26.3714, 6.89, 26.8936)
        }
    );

    //Abrir a porta apertando o botão
    button.addComponent(
        new OnPointerDown((): void => {
            //Aqui vê se o tempo tá rodando
            if (!countdownClock.hasComponent(utils.Interval)) {

                button.press();

                door.openDoor();

                let timeRemaining = 5;
                countdownClock.addComponent(
                    new utils.Interval(1000, (): void => {
                        //passou 1 segundo (passou?)
                        timeRemaining--;

                        if (timeRemaining > 0) {
                            countdownClock.updateTimestring(timeRemaining);
                        } else {
                            // Se o tempo chegou a 0, remove o intervalo pra não ter tempo negativo
                            countdownClock.removeComponent(utils.Interval);

                            door.closeDoor();

                            countdownClock.updateTimestring(5);
                        }
                    })
                );
            }
        })
    );

}
