# Booleanput PACK

Extensión personalizada no empaquetada (Unsandboxed) para TurboWarp, PenguinMod y DinosaurMod. Permite la integración de adaptadores de tipo de datos (booleano, texto, número y bloques de sub-pila C) manteniendo el valor real de entrada sin forzar casteos automáticos y con soporte de recolor dinámico en el área de trabajo.

## Características principales

* **Retorno de valor puro:** El bloque booleano no realiza conversiones forzadas a `true` o `false`. Retorna el valor exacto introducido para que el motor de ejecución de Scratch lo procese según el contexto.
* **Recolor dinámico avanzado:** Detecta los bloques conectados escaneando la lista de conexiones (`inputList`) omitiendo campos sombra, adoptando el color del bloque interno y recalculando el contraste del texto según la luminancia.
* **Compatibilidad con DinosaurMod:** Implementa actualización explícita de renderizado para evitar bloqueos de color provocados por los motores gráficos modificados.
* **Adaptadores de comandos:** Soporta ejecución de pilas de bloques secundarias (substacks) para retornar valores o comportamientos booleanos.

## Bloques incluidos

1. **a booleano [INPUT]** (Booleano): Recibe cualquier tipo de valor y lo expone a través de un conector hexagonal sin alterarlo.
2. **a texto [INPUT]** (Reportero): Recibe un conector booleano o de valor y lo expone mediante una entrada circular de texto.
3. **a número [INPUT]** (Reportero): Permite la entrada de valores booleanos en ranuras numéricas.
4. **ejecutar [SUBSTACK] como booleano** (Booleano C): Ejecuta la pila de comandos contenida y retorna verdadero.
5. **ejecutar [SUBSTACK] y devolver [RET]** (Reportero C): Ejecuta la pila de comandos contenida y retorna la variable o texto especificado.

## Enlaces e instalación

* **Release en GitHub:** [Booleanput PACK Tag](https://github.com/carlitostavo89-a11y/Booleanput-Extension/releases/tag/turbowarp)
* **URL de despliegue (Netlify):** https://booleanput.netlify.app/booleanput.js

Para utilizar la extensión en PenguinMod o TurboWarp, selecciona la opción de cargar extensión personalizada mediante URL y asegúrate de habilitar el modo **Unsandboxed**.
