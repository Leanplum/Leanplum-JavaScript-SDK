export default class ValueTransforms {
  public static decodeColor(color: number): string {
    const b = color & 0xff; color >>= 8
    const g = color & 0xff; color >>= 8
    const r = color & 0xff; color >>= 8
    const a = (color & 0xff) / 255
    return `rgba(${r},${g},${b},${a})`
  }

  public static encodeColor(color: string | number): number {
    if (typeof color === 'number') {
      return color
    }

    // rgba -> number
    const rgbaRe = /^rgba\((\d+),(\d+),(\d+),(\d+(\.\d+)?)\)$/
    const rgba = rgbaRe.exec(color)
    if (rgba) {
      const a = parseInt(rgba[4], 10) * 255
      const r = parseInt(rgba[1], 10) & 0xff
      const g = parseInt(rgba[2], 10) & 0xff
      const b = parseInt(rgba[3], 10) & 0xff

      return (a << 24) + (r << 16) + (g << 8) + b
    }

    // hex -> number
    const hexRe = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i
    const hex = hexRe.exec(color)
    if (hex) {
      const r = parseInt(hex[1], 16) & 0xff
      const g = parseInt(hex[2], 16) & 0xff
      const b = parseInt(hex[3], 16) & 0xff

      return (255 << 24) + (r << 16) + (g << 8) + b
    }

    throw new Error(`Could not parse color "${color}"`)
  }
}
