
// GLOBAL VARIABLES

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const mat4 = glMatrix.mat4;

// FUNCTIONS

const startDemo = async () => {

  const loader = new Loader();
  const shader = new Shader(
    await loader.loadTextFromFile('./shaders/simple.vert'),
    await loader.loadTextFromFile('./shaders/simple.frag'));
  const renderer = new Renderer(45, canvas.width / canvas.height, 0.01, 1000.0);
  const camera = new Camera(
    [0, 0, 2],
    [0, 0, 0],
    [0, 1, 0]);
  const entity = new Entity(
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1]);

  const loop = () => {

    shader.bind();
    shader.setMatrix('proj', renderer.getProj());
    shader.setMatrix('view', camera.getView());
    loader.loadModel(shader, triangle.positions, triangle.colors, triangle.indices);
    renderer.prepareFrame();
    renderer.renderEntities(shader, [entity]);
    shader.unbind();
  
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

// MAIN METHOD

addEventListener('load', () => {
  canvas.width = 800;
  canvas.height = 600;
  gl.viewport(0, 0, canvas.width, canvas.height);
  startDemo();
});