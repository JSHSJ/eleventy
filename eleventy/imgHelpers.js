// By Default we generate 7 widths based on the following values. Adjust this if you want/must/need.
const defaultWidths = [3840, 1920, 1600, 1366, 1024, 768, 640];
// We use the layout width for some size queries to generate sizes based on the layout width. Changes this to the max width of your layout.
const layoutWidth = 1180;
const layoutUnit = 'px'


/**
 * Helper function to generate the widths based on the defaultWidths
 * and the given percentage. Rough estimates shoudld be fine
 *
 * @param {number} viewportPercentage
 * @return {Array<number>} Array of widths
 */
const generateWidths = (viewportPercentage) => {
  return defaultWidths.map(w => w * viewportPercentage);
}

// Same sample image sizes, that can be used as image sizes. Helps with consistency and ease of use. Adjust as necessary.
const DefaultImageSizes = {
  FULL_WIDTH = "100vw",
  HALF_WIDTH = "50vw",
  LAYOUT_FULL_WIDTH = `(max-width: ${layoutWidth}${layoutUnit}) 100vw, ${layoutWidth}${layoutUnit}`,
  LAYOUT_FULL_HALF = `(max-width: ${layoutWidth}${layoutUnit}) 50vw, ${layoutWidth / 2}${layoutUnit}`,
}


module.exports = {
  generateWidths,
  DefaultImageSizes
}