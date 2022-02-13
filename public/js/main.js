
// GLOBAL VARIABLES

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const keys = {};
const mat4 = glMatrix.mat4;

// FUNCTIONS

const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
  
  // CALL THE SCENE FUNCTION HERE
  triangleScene();
});