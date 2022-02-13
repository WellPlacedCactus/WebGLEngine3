
const triangleScene = async () => {

  const loader = new Loader();
  const shader = new Shader(
    './shaders/triangleShader.vert',
    './shaders/triangleShader.frag');
  const renderer = new Renderer(45, canvas.width / canvas.height, 0.01, 1000.0);
  const camera = new Camera(
    [0, 0, 5],
    [0, 0, 0],
    [0, 1, 0]);
  const entities = [];

  entities.push(new Entity(
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1]
  ));

  const loop = () => {

    // prepare the frame
    renderer.prepareFrame();

    // entities[0].rotation[0] += 0.01;
    // entities[0].rotation[1] += 0.01;

    shader.bind();
    shader.setMatrix('proj', renderer.getProj());
    shader.setMatrix('view', camera.getView());
    shader.setVec3('cameraPosition', camera.position);
    loader.loadTriangle(shader);
    renderer.renderEntities(shader, triangle, entities);
    shader.unbind();
  
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};