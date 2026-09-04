# Booleanput PRO v2

Extension para TurboWarp y Scratch que permite adaptar entradas de cualquier tipo a un contenedor de bloque booleano, manteniendo la sincronizacion automatica de colores con el bloque alojado.

## Caracteristicas
- Entrada circular dinamica: Acepta datos de cualquier bloque dentro de un contenedor hexagonal booleano.
- Sincronizacion de color automatica: Copia los tonos principal, secundario y terciario del bloque hijo insertado.
- Deteccion de contraste: Ajusta el texto a blanco o negro dependiendo del brillo del bloque insertado.
- Rendimiento optimizado: Utiliza addChangeListener junto con requestAnimationFrame para evitar parpadeos.
- Inicializacion adaptativa: Bucle de reintentos para asegurar que Blockly este cargado antes de enganchar eventos.

## Uso en TurboWarp
1. Abre tu proyecto en TurboWarp.
2. Ve a la seccion "Añadir extension".
3. Selecciona la opcion "Custom Extension" o "Cargar por URL".
4. Pega la URL directa de tu archivo subido:
   https://booleanput.netlify.app/booleanput.js

## Desarrollo local
Para probar modificaciones en local:
python -m http.server 8080
