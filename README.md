# Cortizador de prestamos con Vue 3 + Vite

    1. abrir powershell 
    2. npm create vite@latest
        -   √ Project name: ... cotizador-prestamos-vue
            √ Select a framework: » Vue
            √ Select a variant: » JavaScript

        -   cd cotizador-prestamos-vue
            npm install
            npm run dev
    3. creara un url con el proyecto en Vitey Vue

    4. Instalar dependencias de desarrollo y ejecutar 
        - `npm install -D tailwindcss postcss autoprefixer`

        Ejecutar compandos para crear archivos de tailwindcss
        - `npx tailwindcss init -p`

    5. Configurar el archivo de config de tailwind para que lea los archivos con todas esas extensiones que sean creados
        - tailwind.config.js
            content: [
                "./index.html",
                "./src/**/*.{vue,js,jsx,ts,tsx}"
  ],

## Estructura de los archivos con extension vue 
    1. llevan lo qu se llama SFC (Single File Components) que seria llevar etiquetas de estilos de funcion (js) y etiquetas 
        - css
        - html
        - Javascript

        `<script setup>
        </script>

        <template>
        </template>

        <style scope>
        </style>`

## Existen dos tipos de API's para Vue 
    - Option 
        Se agrega los elementos a esportar 
            `<script >
                import Header from "./components/Header.vue";

                export default {
                    components: {
                    Header
                    }
                };
                </script>`

    - Composition 
        Se entiende que las importaciones se usaran como templates en la pagina
            `<script setup>
                import Header from "./components/Header.vue";
            </script>`

            
## Eventos 
    1. los eventos son las accriones que realiza mediante se utilizan botones en la aplicacion los eventos permiten escuchar cada una de esas accriones y existen dos manera de utilizar los eventos en Vue directamente en las etiquetas o componentes. Ambos funcionan igual de bien solo que lo ideal es utlizar el mar corto el que usa el @ 
    v-on:input="handlerChange" 
    @input="handlerChange"


## States
    1.  se ejecutan en base a ciertas funciones o condiciones en el codigo lo que llaman como (source of truth) funte de la verdad
        - ref (toma valore primitivos)
        - reactive (mandar solo objetos)

### el VModel 
    es una gran herramienta cuando se trata de reducir codigo ya que no tienes que hacer un set al valor y mandarlo en una variable este v-model permite realizar la busqueda del elemento y el set de el valor nuevo en tiempo real
    v-model.number="cantidad"

## Props
    Los props son para hacer las etiquetas o templates inteligentes que permite pasar por parametros (props) algunos datos como sean necesarios para que el componente con 1 solo puedas reutilizarlo multiples veces 

## props y Evento personalizado 
    Se diferencian de la siguiente manera 
    - props
        :operador = "'-'"
        :fn="handlerChangeDecremento"

    - Evento personalizado 
        @operador = "'-'"
        @fn="handlerChangeDecremento"

            Al usar eventos personalizados tambien llamados Emitir Eventos (emirt) podemos pasarle por parametros datos 
             @click="$emit('fn')"
            Con parametros o datos al campo padre agrega una variable de nombre hola pasalo como argumento y en la funcion agrega el parametro en donde se manda a llamar la funcion y se imprime en la funcion a llamar 
             @click="$emit('fn' , hola )"
             

## Watchers 
    Los cahcers son elementos de tipo escuchas que cuando se realiza un cambio en un elemento o un arreglo de elementos realiza cambios este watch esta en la esperad e cambios para realizar la accion que se le agrega como funcion 