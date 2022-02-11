
precision highp float;

attribute vec2 vPosition;
attribute vec3 vColor;

varying vec2 fPosition;
varying vec3 fColor;

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

void main()
{
  fPosition = vPosition;
  fColor = vColor;
  gl_Position = proj * view * model * vec4(vPosition, 0.0, 1.0);
}