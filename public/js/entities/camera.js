


class Camera {
  
  constructor(position, direction, up) {
    this.position = position;
    this.direction = direction;
    this.up = up;
    this.theta = 0;
  }

  getView() {
    if (keys['w']) this.moveInDirection(this.theta);
    if (keys['s']) this.moveInDirection(this.theta + Math.PI);
    if (keys['a']) this.moveInDirection(this.theta - Math.PI / 2);
    if (keys['d']) this.moveInDirection(this.theta + Math.PI / 2);
    if (keys['ArrowLeft']) this.theta -= 0.05;
    if (keys['ArrowRight']) this.theta += 0.05;

    this.direction = [
      this.position[0] + Math.cos(this.theta),
      this.position[1],
      this.position[2] + Math.sin(this.theta)];

    const mat = new Float32Array(16);
    mat4.lookAt(mat, this.position, this.direction, this.up);
    return mat;
  }

  moveInDirection(angle) {
    const c = 0.1;
    this.position[0] += Math.cos(angle) * c;
    this.position[2] += Math.sin(angle) * c;
  }
}