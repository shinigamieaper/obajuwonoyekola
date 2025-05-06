declare module 'tailwindcss' {
  export interface PluginAPI {
    addBase: (base: Record<string, Record<string, string>>) => void;
    theme: (path: string) => Record<string, string>;
    matchUtilities: (utils: Record<string, (value: string) => Record<string, string>>, options?: { values?: Record<string, string>, type?: string }) => void;
  }

  export type Config = {
    darkMode?: 'class' | 'media' | ['class'] | ['media'];
    content?: string[];
    theme?: {
      extend?: Record<string, any>;
      colors?: Record<string, string>;
    };
    plugins?: Array<(api: PluginAPI) => void>;
  }
}

declare module 'mini-svg-data-uri' {
  function svgToDataUri(svg: string): string;
  export = svgToDataUri;
  
  export default svgToDataUri;
}
