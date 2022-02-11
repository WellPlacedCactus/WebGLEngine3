
precision highp float;

// INPUT

attribute vec3 vPosition;
attribute vec3 vNormal;

// OUTPUT

varying vec3 fPosition;
varying vec3 fNormal;

// TRANSFORMATION UNIFORMS

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

// MAIN

void transformVectors()
{
  fPosition = (model * vec4(vPosition, 1.0)).xyz;
  fNormal = (model * vec4(vNormal, 0.0)).xyz;
}

void main()
{
  transformVectors();
  gl_Position = proj * view * model * vec4(vPosition, 1.0);
}