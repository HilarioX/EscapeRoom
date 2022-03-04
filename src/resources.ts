export default {
    sounds: {
        accesDenied: new AudioClip("sounds/acces_denied.mp3"),
        accesGranted: new AudioClip("sounds/access_granted.mp3"),
        button: new AudioClip("sounds/button.mp3"),
        doorSqueak: new AudioClip("sounds/door_squeak.mp3"),
        moveObject1: new AudioClip("sounds/move_object1.mp3"),
        moveObject2: new AudioClip("sounds/move_object2.mp3"),
        whip: new AudioClip("sounds/room3/whip.mp3")
    },
    models: {
        book1: new GLTFShape("models/room4/Puzzle04_Book1.glb"),
        book2: new GLTFShape("models/room4/Puzzle04_Book2.glb"),
        candleHolder: new GLTFShape("models/room4/Puzzle04_CandleHolder.glb"),
        carpet: new GLTFShape("models/room5/Puzzle05_Carpet.glb"),
        door1: new GLTFShape("models/room1/Puzzle01_Door.glb"),
        door2: new GLTFShape("models/room2/Puzzle02_Door.glb"),
        door3: new GLTFShape("models/room3/Puzzle03_Door.glb"),
        door4: new GLTFShape("models/room4/Puzzle04_LibraryDoor.glb"),
        door5: new GLTFShape("models/room5/Puzzle05_Door.glb"),
        glass: new GLTFShape("models/room4/Puzzle04_WGlass.glb"),
        globe: new GLTFShape("models/room4/Puzzle04_Globe.glb"),
        numpad1: new GLTFShape("models/room5/Numpad1.glb"),
        picture: new GLTFShape("models/room5/Puzzle05_PictureMain.glb"),
        postit: new GLTFShape("models/room5/Puzzle05_Postit.glb"),
        plant1: new GLTFShape("models/room3/Puzzle03_Plant1.glb"),
        plant2: new GLTFShape("models/room3/Puzzle03_Plant2.glb"),
        plant3: new GLTFShape("models/room3/Puzzle03_Plant3.glb"),
        plant4: new GLTFShape("models/room3/Puzzle03_Plant4.glb"),
        roundButton: new GLTFShape("models/generic/Round_Button.glb"),
        scene: new GLTFShape("models/scene.glb"),
        squareButton: new GLTFShape("models/room2/Square_Button.glb"),
        telescope: new GLTFShape("models/room4/Puzzle04_Telescope.glb")
    },
    textures: {
        closeHintButton: new Texture("images/room5/button_close.png"),

        fernHint: new Texture("images/room5/fernpictureHint.png"),
        postitHint: new Texture("images/room5/Postit_001.png"),

        clearButton: new Texture("images/codepad/pwdpanel_clear.png"),
        closeButton: new Texture("images/codepad/button_close.png"),
        enterButton: new Texture("images/codepad/pwdpanel_enter.png"),
        inputBox: new Texture("images/codepad/pwdpanel_input.png"),
        numberButton: new Texture("images/codepad/pwdpanel_buttons.png"),
        panelBackground: new Texture("images/codepad/pwdpanel_bg.png")
    }
};
