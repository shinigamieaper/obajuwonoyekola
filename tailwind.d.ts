declare module 'mini-svg-data-uri' {
  function svgToDataUri(svg: string): string;
  export = svgToDataUri;
}

declare module 'tailwindcss/colors' {
  const colors: Record<string, string>;
  export = colors;
}

declare module 'tailwindcss/lib/util/flattenColorPalette' {
  function flattenColorPalette(colors: Record<string, string>): Record<string, string>;
  export = flattenColorPalette;
}
