
precision highp float;

// INPUT

varying vec3 fPosition;
varying vec3 fNormal;

// LIGHTING UNIFORMS

uniform vec3 cameraDirection;

// MAIN

vec3 getTotalLight()
{
  vec3 ambientLight = vec3(0.1, 0.1, 0.1);
  vec3 sunColor = vec3(0.9, 0.9, 0.9);
  vec3 sunDirection = vec3(0.0, 0.0, 1.0);
  float sunlight = max(dot(fNormal, sunDirection), 0.0);
  return ambientLight + (sunColor * sunlight);
}

void main()
{
  vec3 light = getTotalLight();
  gl_FragColor = vec4(vec3(0.1, 0.9, 0.9) * light, 1.0);
}