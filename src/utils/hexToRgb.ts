type HexString = string;

function isHexString(value: string): value is HexString {
  return /^#?[0-9a-fA-F]+$/.test(value);
}

export const hexToRgb = (hex: HexString) => {
  if (!isHexString(hex)) {
    throw new Error(`Invalid hex string: ${hex}`);
  }

  let newHex = hex.replace('#', '');
  if (newHex === 'ffffff') newHex = '808080';

  const r = parseInt(newHex.substring(0, 2), 16);
  const g = parseInt(newHex.substring(2, 4), 16);
  const b = parseInt(newHex.substring(4, 6), 16);

  return { r, g, b };
};
