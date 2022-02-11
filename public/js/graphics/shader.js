
/* Contains all things related to shaders */

class Shader {

  constructor(vsSource, fsSource) {
    const vs = this.createShader(gl.VERTEX_SHADER, 'vertex', vsSource);
    const fs = this.createShader(gl.FRAGMENT_SHADER, 'fragment', fsSource);
    this.program = this.createProgram(vs, fs);
  }

  createShader(type, typeString, source) {
    const shader = gl.createShader(type);
    
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.log('Could not compile ' + typeString + ' shader :(');
      console.log(gl.getShaderInfoLog(shader));
      return null;
    } else {
      return shader;
    }
  }

  createProgram(vs, fs) {
    const program = gl.createProgram();

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);

    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log('Could not link program :(');
      console.log(gl.getProgramInfoLog(program));
      return null;
    }

    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
      console.log('Could not validate program :(');
      console.log(gl.getProgramInfoLog(program));
      return null;
    }

    gl.deleteShader(vs);
    gl.deleteShader(fs);

    return program;
  }

  bind() {
    gl.useProgram(this.program);
  }

  unbind() {
    gl.useProgram(null);
  }

  setMatrix(variableName, value) {
    const location = gl.getUniformLocation(this.program, variableName);
    gl.uniformMatrix4fv(location, gl.FALSE, value);
  }

  setVec3(variableName, value) {
    const location = gl.getUniformLocation(this.program, variableName);
    gl.uniform3fv(location, value);
  }
}