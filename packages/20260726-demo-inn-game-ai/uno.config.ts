// Copied from AyakaNeko's VueConf 2026 deck and trimmed to this deck's icons.
// @ts-expect-error - Slidev does not expose types for its UnoCSS config entry.
import config from '@slidev/client/uno.config'
import { mergeConfigs, presetIcons } from 'unocss'

const cuteFontFamily = '"Nunito Variable", "Nunito", "ChillRoundM", "Kiwi Maru", "Comfortaa Variable", "Comfortaa", "DM Sans Variant", "DM Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
const roundedFontFamily = '"Comfortaa Variable", "Comfortaa", "DM Sans Variant", "DM Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'

export default mergeConfigs([
  config,
  {
    rules: [
      ['font-math', { 'font-family': 'Latin Modern Roman, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }],
      ['font-cover', { 'font-family': `${roundedFontFamily} !important` }],
    ],
    safelist: [
      'font-sans',
      'font-cover',
      ...Array.from({ length: 30 }, (_, i) => `delay-${(i + 1) * 100}`),
    ],
    presets: [
      presetIcons(),
    ],
    theme: {
      fontFamily: {
        sans: cuteFontFamily,
        cute: cuteFontFamily,
        cuteen: cuteFontFamily,
        cutejp: cuteFontFamily,
        rounded: roundedFontFamily,
        comfortaa: roundedFontFamily,
      },
    },
  },
])
