
precision highp float;

attribute vec2 vPosition;
attribute vec3 vColor;
attribute vec3 vNormal;

varying vec3 fPosition;
varying vec3 fColor;
varying vec3 fNormal;

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

void main()
{
  fPosition = (model * vec4(vPosition, 0.0, 1.0)).xyz;
  fColor = vColor;
  fNormal = vNormal;
  gl_Position = proj * view * model * vec4(vPosition, 0.0, 1.0);
}