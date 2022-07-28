const Application = PIXI.Application;
const app = new Application({});

document.body.appendChild(app.view);

// mouse cursur change
const defaultIcon = "url('images/wine.png'),auto";
const hoverIcon = "url('images/wine_trippy.png),auto";

app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;
