import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily: 
    {
      montserrat: ['Montserrat'],
      roboto: ['Roboto'],
    },
    extend: {
      colors: {
        colormain_pedal: '#89ccca',
        coloralt_pedal: '#339999',
        colormain_botes_aix: '#58568c',
        coloralt_botes_aix: '#333366',
        colormain_gasolineras: '#943850',
        coloralt_gasolineras: '#6b102c',
        colormain_bpb: '#00a19a',
        coloralt_bpb: '#006666',
        colormain_caninos: '#e71d73',
        coloralt_caninos: '#9b0e4b',
        colormain_cestos: '#31ab66',
        coloralt_cestos: '#04804e',
        colormain_bancas_madera: '#ca9e67',
        coloralt_bancas_madera: '#ad702d',
        colormain_bancas_metalicas: '#29235c',
        coloralt_bancas_metalicas: '#060647',
        colormain_bancas_jardin: '#c67813',
        coloralt_bancas_jardin: '#a25b00',
        colormain_casas_perros: '#cb569a',
        coloralt_casas_perros: '#a52674',
        colormain_ceniceros: '#706f6f',
        coloralt_ceniceros: '#4e4e4e',
        colormain_estacionamientos_bici: '#9685a5',
        coloralt_estacionamientos_bici: '#7a55a0',
        colormain_macetas_inox: '#b7a60c',
        coloralt_macetas_inox: '#998a03',
        colormain_botes_reciclaje: '#14983d',
        coloralt_botes_reciclaje: '#066323',
        colormain_botes_pilas: '#ff8a2b',
        coloralt_botes_pilas: '#c45f00',
        colormain_estaciones_reciclaje: '#95c11d',
        coloralt_estaciones_reciclaje: '#739710',
        colormain_carros_barrenderos: '#82368c',
        coloralt_carros_barrenderos: '#5a0a64',
        colormain_botes_grandes: '#00708a',
        coloralt_botes_grandes: '#07454f',
        colormain_metalicos_grandes: '#95c11f',
        coloralt_metalicos_grandes: '#669900',
        colormain_portaextintor: '#e6332a',
        coloralt_portaextintor: '#991b1b',
        colormain_tarimas: '#e2c417',
        coloralt_tarimas: '#e2a217',
        colormain_barreras: '#f29073',
        coloralt_barreras: '#cc4425',
        colormain_bolardo: '#e94e1b',
        coloralt_bolardo: '#a32b0c',
        colormain_conos: '#f29073',
        coloralt_conos: '#cc4425',
        colormain_topes: '#85a09a',
        coloralt_topes: '#526863',
        colormain_trafitambos: '#ee7203',
        coloralt_trafitambos: '#993300',
        colormain_vialetas: '#ffd86a',
        coloralt_vialetas: '#dd9e00',
        applewhite:'#fbfbfb',
        appleblack:'#1d1d1f'
      }
    },
  },
  plugins: [
    require('tw-elements/plugin.cjs')
  ],
  darkMode: "class"
}

