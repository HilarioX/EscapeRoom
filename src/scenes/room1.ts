export function CreateRoom1(): void {

    const door = new Entity();
    engine.addEntity(door);
    door.addComponent(new GLTFShape("models/room1/Puzzle01_Door.glb"));
    door.addComponent(new Transform({
        position: new Vector3(21.18, 10.8, 24.5)
    }));

    door.addComponent(new AudioSource(new AudioClip("sounds/door_squeak.mp3")));
    door.addComponent(new Animator());
    door.getComponent(Animator).addClip(new AnimationState("Door_Open", { looping: false }));

    //Quando o player clicar na porta, ela vai abrir a partir daqui:
    let isDoorOpen = false;
    door.addComponent(
        new OnPointerDown((): void => {
            //a animação vai vir aqui
            if (!isDoorOpen) {
                isDoorOpen = true;
                door
                    .getComponent(Animator)
                    .getClip("Door_Open")
                    .play();
                //o som vai vir aqui:
                door.getComponent(AudioSource).playOnce();
            }
        })
    );

}
