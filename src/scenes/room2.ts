import utils from '../../node_modules/decentraland-ecs-utils/index';
export function CreateRoom2(): void {

    const door = new Entity();
    engine.addEntity(door);
    door.addComponent(new GLTFShape("models/room2/Puzzle02_Door.glb"));
    door.addComponent(
        new Transform({
            position: new Vector3(24.1, 5.51634, 24.9)
        })
    );

    door.addComponent(new Animator());
    door
        .getComponent(Animator)
        .addClip(new AnimationState("Door_Open", { looping: false }));

    //Abaixo vem uma animação pra fechar a porta
    door
        .getComponent(Animator)
        .addClip(new AnimationState("Door_Close", { looping: false }));

    door.addComponent(new AudioSource(new AudioClip("sounds/door_squeek.mp3")));


    const button = new Entity();
    engine.addEntity(button);
    button.addComponent(new GLTFShape("models/room2/Square_Button.glb"));
    button.addComponent(
        new Transform({
            position: new Vector3(26.3714, 6.89, 26.8936)
        })
    );

    //Animação do botão:
    button.addComponent(new Animator());
    button
        .getComponent(Animator)
        .addClip(new AnimationState("Button_Action", { looping: false }));

    //Som do botão pressionado
    button.addComponent(new AudioSource(new AudioClip("sounds/button.mp3")));

    //Abrir a porta apertando o botão
    button.addComponent(
        new OnPointerDown((): void => {
            button
                .getComponent(Animator)
                .getClip("Button_Action")
                .play();

            button.getComponent(AudioSource).playOnce();

            door
                .getComponent(Animator)
                .getClip("Door_Open")
                .play();

            door.getComponent(AudioSource).playOnce();
        })
    );

    const countdownText = new Entity();
    engine.addEntity(countdownText);

    countdownText.addComponent(
        new Transform({
            position: new Vector3(25.1272, 9.51119, 25.2116),
            rotation: Quaternion.Euler(20, 180, 0)
        })
    );

    //Usando uma *TextShape* e definindo um valor padrão
    countdownText.addComponent(new TextShape("00:05"));

    //Modificando o estilo do texto
    countdownText.getComponent(TextShape).color = Color3.Red();
    countdownText.getComponent(TextShape).fontSize = 5;

    //Função pra converter o tempo restante em string "00:05"
    function formatTimeString(seconds: number): string {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return (
            mins.toLocaleString(undefined, { minimumIntegerDigits: 2 }) +
            ":" +
            secs.toLocaleString(undefined, { minimumIntegerDigits: 2 })
        );
    }

    countdownText.addComponent(new TextShape(formatTimeString(5)));


    let timeRemaining = 5;
    countdownText.addComponent(
        new utils.Interval(1000, (): void => {
            //passou 1 segundo (passou?)
            timeRemaining--;

            if (timeRemaining > 0) {
                countdownText.getComponent(TextShape).value = formatTimeString(timeRemaining);
            } else {
                // Se o tempo chegou a 0, remove o intervalo pra não ter tempo negativo
                countdownText.removeComponent(utils.Interval);

                // Fecha a porta
                door
                    .getComponent(Animator)
                    .getClip("Door_Close")
                    .play();

                door.getComponent(AudioSource).playOnce();

                countdownText.getComponent(TextShape).value = formatTimeString(5);
            }
        })
    );

}
