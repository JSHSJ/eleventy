const Image = require('@11ty/eleventy-img');

module.exports = async function (
  url,
  alt,
  sizes = '',
  widths = [null],
  classes = '',
  formats = ['avif', 'webp', 'jpeg']
) {
  // if widths.length > 1, then we need a sizes string
  if (widths.length > 1 && sizes.length === 0) {
    widths = [widths[0]];
  }

  const metadata = await Image(url, {
    widths,
    formats,
    urlPath: '/images/',
    outputDir: './dist/images/',
    useCache: false,
    sharpJpegOptions: {
      quality: 75,
    },
  });

  const imageAttributes = {
    sizes,
    class: classes,
    alt,
    loading: 'lazy',
    decoding: 'async', // might have to change later
  };

  const lowsrc = metadata.jpeg[0];

  return `
    <picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(', ')}" sizes="${sizes}">`;
      })
      .join('\n')}
      <img src="${this.lowsrc.url}" width="${this.lowsrc.width}" height="${
    this.lowsrc.height
  }" alt="${alt}" loading="lazy" decoding="async"
    </picture>
  `;

  // return Image.generateHTML(metadata, imageAttributes, {
  //   whitespaceMode: 'inline',
  // });
};
