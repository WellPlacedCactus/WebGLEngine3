
/* Contains all the rendering stuff like vertex data, frame preparation... */

class Renderer {

  constructor(fov, aspectRatio, nearPlane, farPlane) {
    this.fov = fov;
    this.aspectRatio = aspectRatio;
    this.nearPlane = nearPlane;
    this.farPlane = farPlane;
  }

  prepareFrame() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.frontFace(gl.CCW);
    gl.cullFace(gl.BACK);
  }

  renderEntities(shader, primativeDataStructure, entities) {
    entities.forEach(entity => {
      shader.setMatrix('model', entity.getModel());
      gl.drawElements(gl.TRIANGLES, primativeDataStructure.indices.length, gl.UNSIGNED_SHORT, 0);
    });
  }

  getProj() {
    const mat = new Float32Array(16);
    mat4.perspective(mat, this.fov * Math.PI / 180, this.aspectRatio, this.nearPlane, this.farPlane);
    return mat;
  }
}