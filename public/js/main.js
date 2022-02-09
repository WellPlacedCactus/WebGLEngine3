
// GLOBAL VARIABLES

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

// FUNCTIONS

const init = async () => {

  const loader = new Loader();
  const shader = new Shader(
    await loader.loadTextFromFile('./shaders/simple.vert'),
    await loader.loadTextFromFile('./shaders/simple.frag'));
  const renderer = new Renderer();

  const loop = () => {

    shader.bind();
    renderer.prepareFrame(loader, shader);
    renderer.renderFrame();
    shader.unbind();
  
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

// EVENT HANDLING

addEventListener('load', () => {
  canvas.width = 800;
  canvas.height = 600;
  gl.viewport(0, 0, canvas.width, canvas.height);
  init();
});