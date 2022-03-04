module.exports = {
  
  content: ['./build/index.html',
  './build/**/*.{html,js}',],
  theme: {
    maxWidth: {
      '1/2': '50%',
    },
    extend: {backgroundSize: { 'size-200': '200% 200%', }, backgroundPosition: { 'pos-0': '0% 0%', 'pos-100': '100% 100%', },},
  },
  plugins: [],
}
