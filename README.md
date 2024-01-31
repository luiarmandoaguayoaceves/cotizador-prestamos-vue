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

            
