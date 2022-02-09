
/* Used to load all buffers through the WebGL API... */

class Loader {

  constructor() {}

  loadTextFromFile(path) {
    return new Promise(async resolve => {
      const response = await fetch(path);
      resolve(response.text());
    });
  }

  loadModel(shader, positions, colors, indices) {
    this.loadAttribute(shader, 'vPosition', 2, positions);
    this.loadAttribute(shader, 'vColor', 3, colors);
    this.loadIndices(indices);
  }

  loadAttribute(shader, attributeNameInShader, vertexSize, data) {
    const vbo = gl.createBuffer();
    const location = gl.getAttribLocation(shader.program, attributeNameInShader);

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    gl.vertexAttribPointer(location, vertexSize, gl.FLOAT, false, vertexSize * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(location);
  }

  loadIndices(data) {
    const ebo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), gl.STATIC_DRAW);
  }
}