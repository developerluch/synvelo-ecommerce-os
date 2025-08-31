import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'xs': '475px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'nunito': ['Nunito', 'sans-serif'],
				'sans': ['Nunito', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				'background-secondary': 'hsl(var(--background-secondary))',
				'background-tertiary': 'hsl(var(--background-tertiary))',
				foreground: 'hsl(var(--foreground))',
				skeleton: 'hsl(var(--skeleton))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					secondary: 'hsl(var(--foreground-secondary))',
					muted: 'hsl(var(--foreground-muted))'
				},
				navy: {
					DEFAULT: 'hsl(var(--navy))',
					secondary: 'hsl(var(--navy-secondary))',
					muted: 'hsl(var(--navy-muted))',
					foreground: 'hsl(var(--navy-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))'
				},
				glass: {
					DEFAULT: 'rgba(var(--glass-background))',
					hover: 'rgba(var(--glass-background-hover))',
					border: 'rgba(var(--glass-border))',
					'border-hover': 'rgba(var(--glass-border-hover))'
				}
			},
		borderRadius: {
			lg: '6px',
			md: '4px', 
			sm: '2px',
			professional: '3px'
		},
		boxShadow: {
			'input': [
				'0px 2px 3px -1px rgba(0, 0, 0, 0.1)',
				'0px 1px 0px 0px rgba(25, 28, 33, 0.02)',
				'0px 0px 0px 1px rgba(25, 28, 33, 0.08)'
			].join(', ')
		},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(30px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				'scale-in': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.9)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1)' 
					}
				},
				'slide-in-left': {
					'0%': { 
						opacity: '0', 
						transform: 'translateX(-30px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateX(0)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-electric': {
					'0%, 100%': { 
						boxShadow: '0 0 var(--glow-size) hsl(var(--electric) / 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 calc(var(--glow-size) * 2) hsl(var(--electric) / 0.5)' 
					}
				},
				'typewriter': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'text-reveal': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(100%)',
						clipPath: 'inset(100% 0 0 0)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)',
						clipPath: 'inset(0 0 0 0)'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'ripple': {
					'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
					'50%': { transform: 'translate(-50%, -50%) scale(0.9)' }
				},
				'orbit': {
					'0%': {
						transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
					}
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-electric': 'pulse-electric 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'typewriter': 'typewriter 3s steps(50, end) infinite',
				'text-reveal': 'text-reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'shimmer': 'shimmer 2s linear infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'ripple': 'ripple 2s ease calc(var(--i, 0) * 0.2s) infinite',
				'orbit': 'orbit calc(var(--duration) * 1s) linear infinite',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite alternate'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-navy': 'var(--gradient-navy)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-hero': 'var(--gradient-hero)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
