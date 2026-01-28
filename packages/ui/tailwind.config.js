/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                background: '#ffffff',
                foreground: '#030213', // oklch conversion approx
                primary: '#030213',
                secondary: '#f3f3f5', // approx
                destructive: '#d4183d',
            }
        }
    },
    plugins: [],
};
