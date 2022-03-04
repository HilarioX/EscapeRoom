import resources from "../resources";

const panelPosition = new Vector2(12, -24);
const buttonSize = new Vector2(55, 55);
const buttonSpace = new Vector2(5, 5);

export class Keypad {

    public container: UIContainerRect;
    private panelInputs: UIText[];

    public onInput!: (value: number) => void;
    public onReset!: () => void;
    public onSubmit!: () => void;

    constructor(parent: UIShape) {
        this.container = new UIContainerRect(parent);
        this.container.positionX = -50;
        this.container.positionY = 50;
        this.container.width = "100%";
        this.container.height = "100%";

        const panelBackground = new UIImage(
            this.container,
            resources.textures.panelBackground
        );
        panelBackground.sourceWidth = 918;
        panelBackground.sourceHeight = 1300;
        panelBackground.width = 310;
        panelBackground.height = 420;
        panelBackground.positionX = 70;
        panelBackground.positionY = -55;

        const closeImage = new UIImage(
            this.container,
            resources.textures.closeButton
        );
        closeImage.sourceWidth = 92;
        closeImage.sourceHeight = 92;
        closeImage.width = 32;
        closeImage.height = 32;
        closeImage.positionX = 194;
        closeImage.positionY = 108;

        closeImage.onClick = new OnPointerDown((): void => {
            this.container.visible = false;
        });

        // 3 boxes to show the entered code or current message
        this.panelInputs = [];
        for (let i = 0; i < 3; i++) {
            const inputImage = new UIImage(
                this.container,
                resources.textures.inputBox
            );
            const inputSlot = new UIText(this.container);
            inputImage.sourceWidth = 173;
            inputImage.sourceHeight = 173;
            inputImage.width = inputSlot.width = buttonSize.x;
            inputImage.height = inputSlot.height = buttonSize.y;
            inputImage.positionX = inputSlot.positionX = i * (buttonSpace.x + buttonSize.x) + 5;
            inputImage.positionY = inputSlot.positionY = 45;
            inputSlot.fontAutoSize = true;
            inputSlot.hTextAlign = "center";
            this.panelInputs.push(inputSlot);
        }

        for (let col = 0; col < 3; col++) {
            for (let row = 0; row < 4; row++) {

                let value: number;
                if (col == 1 && row == 3) {
                    value = 0;
                }
                else {
                    value = row * 3 + col + 1;
                }

                let buttonImage: UIImage;
                if (col == 0 && row == 3) {
                    buttonImage = new UIImage(
                        this.container,
                        resources.textures.clearButton
                    );

                    buttonImage.onClick = new OnPointerDown((): void => {
                        this.onReset();
                    });
                }
                else if (col == 2 && row == 3) {
                    buttonImage = new UIImage(
                        this.container,
                        resources.textures.enterButton
                    );

                    buttonImage.onClick = new OnClick((): void => {
                        this.onSubmit();
                    });
                }
                else {
                    buttonImage = new UIImage(
                        this.container,
                        resources.textures.numberButton
                    );

                    const numberText = new UIText(buttonImage);
                    numberText.isPointerBlocker = false;
                    numberText.positionX = -23;
                    numberText.fontAutoSize = true;
                    numberText.hTextAlign = "center";
                    numberText.value = value.toString();

                    buttonImage.onClick = new OnClick((): void => {
                        this.onInput(value);
                    });
                }

                buttonImage.sourceWidth = 171;
                buttonImage.sourceHeight = 171;
                buttonImage.width = buttonSize.x;
                buttonImage.height = buttonSize.y;
                buttonImage.positionX = panelPosition.x + col * (buttonSpace.x + buttonSize.x);
                buttonImage.positionY = panelPosition.y - row * (buttonSpace.y + buttonSize.y);
            }
        }
    }

    public display(message: string, color: Color4 = Color4.White()): void {
        for (let i = 0; i < this.panelInputs.length; i++) {
            const character = message.length > i ? message[i] : "";
            this.panelInputs[i].value = character;
            this.panelInputs[i].color = color;
        }
    }
}
