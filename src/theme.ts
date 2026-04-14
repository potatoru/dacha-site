// src/theme.ts
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

export const DachaPreset = definePreset(Aura, {
  semantic: {

    primary: {
      0: '#ffffff',
      50: '#fef6f1',
      100: '#fdeadd',
      200: '#facfae',
      300: '#f6b07a',
      400: '#f1924f',
      500: '#eb7528', // Пастельно-лисий
      600: '#da5f1d',
      700: '#b54816',
      800: '#8f3b16',
      900: '#733215',
      950: '#3e1707'
    },

    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f9fafb', // Нейтральный фон без желтизны
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
      },
      dark: {
        surface: {
          0: '#111827',
          50: '#1f2937',
          100: '#374151',
          200: '#4b5563',
          300: '#6b7280',
          400: '#9ca3af',
          500: '#d1d5db',
          600: '#e5e7eb',
          700: '#f3f4f6',
          800: '#f9fafb',
          900: '#ffffff',
          950: '#ffffff'
        }
      }
    }
  }
});