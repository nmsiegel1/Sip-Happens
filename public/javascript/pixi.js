// wine glass - mouse icon
const Application = PIXI.Application;
const app = new Application({});

document.body.appendChild(app.view);

// mouse cursor change
const defaultIcon = "url('images/wine.png'),auto";

app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
