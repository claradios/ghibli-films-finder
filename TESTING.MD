# TESTING

- test unitarios (testear un único componente)
- test integracion (que varios componentes funcionen bien entre ellos)
- test end to end (carrito de la compra)

## LIBRERIAS
jest

Documentación oficial: https://jestjs.io/docs/en/getting-started;

En mi repo corriente y moliente (que tiene un index.html y un main.js) digo:

`npm init`

Así se me crea el package.json y los node modules.Ahora ya puedo instalar jest:

`npm install --save-dev jest`

Mete en un .gitignore todo lo de npm para que no se esté subiendo al repo.

Ahora añadimos babel para que entiendad ECMASCRIPT 6

`npm install --dev babel-jest @babel/core @babel/preset-env`

en el package.json añadimos la siguiuente línea:

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

y para hacerlo funcionar:

`npm run test`


