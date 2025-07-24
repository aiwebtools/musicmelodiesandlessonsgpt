
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
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyberpunk: {
					background: '#0f1119',
					foreground: '#e0e0ff',
					primary: '#6644ff',
					secondary: '#ff44aa',
					accent: '#44ddff',
					muted: '#1a1b2e',
					border: '#323456'
				}
			},
			fontFamily: {
				'rajdhani': ['Rajdhani', 'sans-serif'],
				'orbitron': ['Orbitron', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) blur(0px)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) blur(3px)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) translateX(0)' },
					'50%': { transform: 'translateY(-5px) translateX(2px)' }
				},
				'waveform': {
					'0%': { height: '20%' },
					'25%': { height: '90%' },
					'50%': { height: '40%' },
					'75%': { height: '60%' },
					'100%': { height: '20%' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shooting': {
					'0%': { 
						opacity: '1',
						transform: 'translateX(0) translateY(0)',
					},
					'70%': { 
						opacity: '1',
					},
					'100%': { 
						opacity: '0',
						transform: 'translateX(-500px) translateY(300px)',
					}
				},
				'shooting-tail': {
					'0%': { 
						width: '0',
					},
					'30%': { 
						width: '100px',
					},
					'100%': { 
						width: '0',
					}
				},
				'twinkle': {
					'0%, 100%': { 
						opacity: '0.3',
						transform: 'scale(1)',
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.2)',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 4s infinite ease-in-out',
				'float': 'float 8s infinite ease-in-out',
				'waveform-1': 'waveform 1.5s infinite ease-in-out',
				'waveform-2': 'waveform 1.7s infinite ease-in-out 0.1s',
				'waveform-3': 'waveform 1.9s infinite ease-in-out 0.2s',
				'waveform-4': 'waveform 2.1s infinite ease-in-out 0.3s',
				'shimmer': 'shimmer 3s infinite linear',
				'rotate-slow': 'rotate-slow 12s infinite linear',
				'shooting': 'shooting 3s linear infinite',
				'shooting-tail': 'shooting-tail 3s linear infinite',
				'twinkle': 'twinkle 4s ease-in-out infinite'
			},
			backgroundImage: {
				'cyberpunk-gradient': 'linear-gradient(135deg, #6644ff 0%, #ff44aa 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
				'neon-glow': 'linear-gradient(180deg, rgba(102, 68, 255, 0.3) 0%, rgba(102, 68, 255, 0) 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
			},
			boxShadow: {
				'neon-purple': '0 0 5px 2px rgba(102, 68, 255, 0.7)',
				'neon-pink': '0 0 5px 2px rgba(255, 68, 170, 0.7)',
				'neon-blue': '0 0 5px 2px rgba(68, 221, 255, 0.7)'
			},
			dropShadow: {
				'neon-purple': '0 0 5px rgba(102, 68, 255, 0.7)',
				'neon-pink': '0 0 5px rgba(255, 68, 170, 0.7)',
				'neon-blue': '0 0 5px rgba(68, 221, 255, 0.7)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
