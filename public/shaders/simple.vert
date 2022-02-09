
precision highp float;

attribute vec2 vPosition;
attribute vec3 vColor;

varying vec2 fPosition;
varying vec3 fColor;

void main()
{
  fPosition = vPosition;
  fColor = vColor;
  gl_Position = vec4(vPosition.x, vPosition.y, 0.0, 1.0);
}