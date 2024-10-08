/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // Add this line
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': `linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%'))`
            },
            colors: {
                neutral: colors.neutral,
                background: 'rgb(var(--background) / <alpha-value>)',
                text: 'rgb(var(--text) / <alpha-value>)',
                primary: 'rgb(var(--primary) / <alpha-value>)',
                secondary: 'rgb(var(--secondary) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
              },
            fontFamily: {
                sans: ['Mulish', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: '#ffae9c',
                    'primary-content': '#171227',
                    secondary: '#fff2d7',
                    'secondary-content': '#171227',
                    accent: '#e3f1ff',
                    'accent-content': '#171227',
                    neutral: '#171227',
                    'neutral-content': '#ffffff',
                    'base-100': '#ffffff',
                    'base-200': '#d7d8e4',
                    'base-content': '#171227',
                    '--rounded-btn': '.375rem',
                    '--rounded-badge': '9999px'
                }
            },
            {
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    primary: '#ffae9c',
                    'primary-content': '#171227',
                    secondary: '#fff2d7',
                    'secondary-content': '#171227',
                    accent: '#e3f1ff',
                    'accent-content': '#171227',
                    neutral: '#2e293c',
                    'neutral-content': '#ffffff',
                    'base-100': '#1a1a1a',
                    'base-200': '#2e293c',
                    'base-content': '#ffffff',
                    '--rounded-btn': '.375rem',
                    '--rounded-badge': '9999px'
                }
            }
        ]
    }
};
