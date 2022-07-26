const Application = PIXI.Application;
const app = new Application({
  width: 1920,
  height: 1080,
});

document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;
loader.add('backgroundImage', './images/backgroundWine.jpg').load(setup);

function setup(loader, resources) {
  const backgroundImage = PIXI.Sprite.from(resources.backgroundImage.texture);
  backgroundImage.anchor.set(0.5);
  backgroundImage.x = app.renderer.width / 2;
  backgroundImage.y = app.renderer.height / 2;

  const container = new PIXI.Container();
  container.addChild(backgroundImage);
  app.stage.addChild(container);

  const style = new PIXI.TextStyle({
    fontFamily: 'Segoe UI',
    fontSize: 20 + window.innerWidth * 0.06,
    fill: '#ffffff',
    dropShadow: true,
    dropShadowDistance: 2,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur: 3,
    dropShadowColor: '#000000',
  });

  window.addEventListener('resize', function () {
    style.fontSize = 20 + window.innerWidth * 0.06;
  });

  const myText = new PIXI.Text('Sip Happens!', style);

  container.addChild(myText);
  myText.anchor.set(0.5);
  myText.x = app.screen.width / 2;
  myText.y = app.screen.height / 2;

  const displacementSprite = PIXI.Sprite.from(
    './images/displacedBackground.jpeg'
  );
  const displacementFilter = new PIXI.filters.DisplacementFilter(
    displacementSprite
  );

  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  displacementSprite.scale.set(0.5);

  container.addChild(displacementSprite);
  container.filters = [displacementFilter];

  const options1 = {
    amplitude: 40, //300 default value
    wavelength: 30, //160 default value
    speed: 200, //500 default value
    radius: 80,
  };

  const shockwaveFilter1 = new PIXI.filters.ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    options1,
    0
  );

  const options2 = {
    amplitude: 80, //300
    wavelength: 45, //160
    speed: 240, //500
    radius: 100,
  };

  const shockwaveFilter2 = new PIXI.filters.ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    options2,
    0
  );

  const options3 = {
    amplitude: 105, //300
    wavelength: 65, //160
    speed: 300, //500
    radius: 160,
  };

  const shockwaveFilter3 = new PIXI.filters.ShockwaveFilter(
    [Math.random() * app.screen.width, Math.random() * app.screen.height],
    options3,
    0
  );

  container.filters = [
    displacementFilter,
    shockwaveFilter1,
    shockwaveFilter2,
    shockwaveFilter3,
  ];

  app.ticker.add(function () {
    displacementSprite.x++;
    if (displacementSprite.x > displacementSprite.width)
      displacementSprite.x = 0;

    createRaindrops(shockwaveFilter1, 0.7);
    createRaindrops(shockwaveFilter2, 0.5);
    createRaindrops(shockwaveFilter3, 1);
  });

  function createRaindrops(filter, resetTime) {
    filter.time += 0.01;
    if (filter.time > resetTime) {
      filter.time = 0;
      filter.center = [
        Math.random() * app.screen.width,
        Math.random() * app.screen.height,
      ];
    }
  }
}
