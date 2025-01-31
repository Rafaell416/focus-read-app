import { Dimensions, PixelRatio } from 'react-native';

// Get the screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Get pixel ratio
const pixelRatio = PixelRatio.get();

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Scale width based on screen size and pixel density
 * @param size - Size in pixels
 */
export const horizontalScale = (size: number): number => {
  const screenScale = SCREEN_WIDTH / guidelineBaseWidth;
  const newSize = size * screenScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * Scale height based on screen size and pixel density
 * @param size - Size in pixels
 */
export const verticalScale = (size: number): number => {
  const screenScale = SCREEN_HEIGHT / guidelineBaseHeight;
  const newSize = size * screenScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * Scale font size based on screen size and pixel density
 * Uses a more moderate scaling factor to prevent too large text
 * @param size - Font size in pixels
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  const scale = horizontalScale(size);
  const newSize = size + (scale - size) * factor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * Scale both width and height proportionally
 * Useful for scaling images and square components
 * @param size - Size in pixels
 */
export const scale = (size: number): number => {
  const newSize = size * (SCREEN_WIDTH / guidelineBaseWidth);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Export screen dimensions and pixel ratio for convenience
export const screenWidth = SCREEN_WIDTH;
export const screenHeight = SCREEN_HEIGHT;
export const devicePixelRatio = pixelRatio;


