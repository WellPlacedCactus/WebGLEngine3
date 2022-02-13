

/**

scene {
  loader,
  shader,
  renderer,
  camera,

}

**/

const cubeScene = async () => {

  const loader = new Loader();
  const cubeShader = new Shader(
    './shaders/cubeShader.vert',
    './shaders/cubeShader.frag');
  const renderer = new Renderer(45, canvas.width / canvas.height, 0.01, 1000.0);
  const camera = new Camera(
    [0, 0, 10],
    [0, 0, 0],
    [0, 1, 0]);
  const entities = [];

  entities.push(new Entity(
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1]
  ));

  // CUBE GENERATION ALGORITHM

  const xzMargin = 10;
  const yMargin = 3;

  // for (let z = -10; z < 10; z++) {
  //   for (let x = -10; x < 10; x++) {
  //     for (let y = 0; y < randint(1, 5); y++) {
  //       entities.push(new Entity(
  //         [x * xzMargin, y * yMargin, z * xzMargin],
  //         [0, 0, 0],
  //         [1, 1, 1]
  //       ));
  //     }
  //   }
  // }

  const loop = () => {

    // prepare the frame
    renderer.prepareFrame();

    // entities[0].rotation[0] += 0.01;
    // entities[0].rotation[1] += 0.01;

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