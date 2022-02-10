


class Camera {
  
  constructor(position, direction, up) {
    this.position = position;
    this.direction = direction;
    this.up = up;
  }

  getView() {
    const mat = new Float32Array(16);
    mat4.lookAt(mat, this.position, this.direction, this.up);
    return mat;
  }
}