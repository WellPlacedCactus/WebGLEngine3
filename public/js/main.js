
// GLOBAL VARIABLES

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const keys = {};
const mat4 = glMatrix.mat4;

// FUNCTIONS

const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startDemo = async () => {

  const loader = new Loader();
  const cubeShader = new Shader(
    await loader.loadTextFromFile('./shaders/cubeShader.vert'),
    await loader.loadTextFromFile('./shaders/cubeShader.frag'));
  const renderer = new Renderer(45, canvas.width / canvas.height, 0.01, 1000.0);
  const camera = new Camera(
    [0, 0, 10],
    [0, 0, 0],
    [0, 1, 0]);
  const entities = [];

  // CUBE GENERATION ALGORITHM

  const xzMargin = 10;
  const yMargin = 3;

  for (let z = -10; z < 10; z++) {
    for (let x = -10; x < 10; x++) {
      for (let y = 0; y < randint(1, 5); y++) {
        entities.push(new Entity(
          [x * xzMargin, y * yMargin, z * xzMargin],
          [0, 0, 0],
          [1, 1, 1]
        ));
      }
    }
  }

  const loop = () => {

    // prepare the frame
    renderer.prepareFrame();

    // render the cube
    entities[0].rotation[0] += 0.01;
    entities[0].rotation[1] += 0.01;
    cubeShader.bind();
    cubeShader.setMatrix('proj', renderer.getProj());
    cubeShader.setMatrix('view', camera.getView());
    cubeShader.setVec3('cameraPosition', camera.position);
    loader.loadCube(cubeShader);
    renderer.renderEntities(cubeShader, cube, entities);
    cubeShader.unbind();
  
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

// HANDLE INPUT EVENTS

addEventListener('keydown', ({key}) => {
  keys[key] = true;
});

addEventListener('keyup', ({key}) => {
  keys[key] = false;
});

// MAIN METHOD

addEventListener('load', () => {
  canvas.width = 800;
  canvas.height = 600;
  gl.viewport(0, 0, canvas.width, canvas.height);
  startDemo();
});