
precision highp float;

// INPUT

varying vec3 fPosition;
varying vec3 fNormal;

// LIGHTING UNIFORMS

uniform vec3 cameraPosition;

// LIGHTING CALCULATIONS

float getPointLight()
{
  vec3 normal = normalize(fNormal);
  vec3 sunDirection = normalize(cameraPosition - fPosition);
  return dot(normal, sunDirection);
}

// MAIN

void main()
{
  gl_FragColor = vec4(vec3(0.1, 0.9, 0.9) * getPointLight(), 1.0);
}