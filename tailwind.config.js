const {colors} = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './public/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.blue,
            },

            fontFamily: {
                headline: "Lexend",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
