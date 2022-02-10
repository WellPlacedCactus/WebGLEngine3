
class Entity {

  constructor(position, rotation, scale) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }

  getModel() {
    const mat = new Float32Array(16);
    mat4.identity(mat);
    mat4.translate(mat, mat, this.position);
    mat4.rotate(mat, mat, this.rotation[0], [1, 0, 0]);
    mat4.rotate(mat, mat, this.rotation[1], [0, 1, 0]);
    mat4.rotate(mat, mat, this.rotation[2], [0, 0, 1]);
    mat4.scale(mat, mat, this.scale);
    return mat;
  }
}