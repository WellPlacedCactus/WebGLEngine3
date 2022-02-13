
/* Used to load different models through the WebGL API... */

class Loader {

  constructor() {}

  loadTextFromFile(path) {
    return new Promise(async resolve => {
      const response = await fetch(path);
      resolve(response.text());
    });
  }

  loadTriangle(shader) {
    this.loadAttribute(shader, 'vPosition', 2, triangle.positions, false);
    this.loadAttribute(shader, 'vColor', 3, triangle.colors, false);
    this.loadAttribute(shader, 'vNormal', 3, triangle.normals, true);
    this.loadIndices(triangle.indices);
  }

  loadCube(shader) {
    this.loadAttribute(shader, 'vPosition', 3, cube.positions, false);
    this.loadAttribute(shader, 'vNormal', 3, cube.normals, true);
    this.loadIndices(cube.indices);
  }

  loadAttribute(shader, attributeNameInShader, vertexSize, data, normalized) {
    const vbo = gl.createBuffer();
    const location = gl.getAttribLocation(shader.program, attributeNameInShader);

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    gl.vertexAttribPointer(location, vertexSize, gl.FLOAT, normalized, vertexSize * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(location);
  }

  loadIndices(data) {
    const ebo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), gl.STATIC_DRAW);
  }
}