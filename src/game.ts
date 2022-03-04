import gameObjects from "./gameObjects/index";
import scenes from "./scenes/index";

const gameCanvas = new UICanvas();

new gameObjects.BaseScene();

scenes.CreateRoom1();
scenes.CreateRoom2();
scenes.CreateRoom3();
scenes.CreateRoom4();
scenes.CreateRoom5(gameCanvas);
