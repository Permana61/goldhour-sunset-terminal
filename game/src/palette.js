// The look plan, in one place. Sunset Terminal: a golden-hour dockyard —
// warm amber sun against violet shade, Solstice gold against Umbra violet.
// The same names are the CSS custom properties in index.html.
export const PALETTE = {
  canvas: '#1a120c',
  surface: '#241a12',
  hairline: '#3d2c1e',
  ink: '#fdf3e3',
  muted: '#c2a98e',
  accent: '#ffb02e',
  teal: '#ff9a5c',
  ember: '#b44dff',
};

export function shade(name) {
  return PALETTE[name];
}
