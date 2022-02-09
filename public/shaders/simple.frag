
precision highp float;

varying vec2 fPosition;
varying vec3 fColor;

void main()
{
  gl_FragColor = vec4(fColor, 1.0);
}