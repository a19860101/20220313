module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      sans: ['PT sans','Noto Sans TC'],
      serif: ['georgia'],
    } , 
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors:{
        primary: '#42C2FF',
        danger: '#FF6363',
        success: '#00C897',
      },
    },
  },
  plugins: [],
}
