
/* Contains all the rendering stuff like vertex data, frame preparation... */

class Renderer {

  constructor() {

    this.positions = [
      0.0,  0.5,
     -0.5, -0.5,
      0.5, -0.5
   ];
   
   this.colors = [
     1.0, 0.0, 0.0,
     0.0, 1.0, 0.0,
     0.0, 0.0, 1.0
   ];
   
   this.indices = [
     0, 1, 2
   ];


  }

  prepareFrame(loader, shader) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    loader.loadModel(shader, this.positions, this.colors, this.indices);
  }

  renderFrame() {
    gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
  }
}