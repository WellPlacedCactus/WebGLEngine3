
precision highp float;

varying vec3 fPosition;
varying vec3 fColor;
varying vec3 fNormal;

uniform vec3 cameraPosition;

float calculateLight()
{
  float brightness = 0.5;
  vec3 normal = normalize(fNormal);
  vec3 fragToLight = normalize(cameraPosition - fPosition);
  return max(dot(normal, fragToLight), 0.0) + brightness;
}

void main()
{
  gl_FragColor = vec4(fColor * calculateLight(), 1.0);
}