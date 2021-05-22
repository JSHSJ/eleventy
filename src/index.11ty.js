class Index {
  data() {
    return {
      name: 'Josh',
      layout: 'default',
      title: 'Cool',
      description: 'cool index',
    };
  }

  async render({ name }) {
    return `<p>hello ${name}</p>
    ${await this.img(
      'https://joshuastuebner.com/static/61215ef99e0f97e74f88e35ffdced7ac/111ba/katzen.webp',
      'meine katzen',
      ''
    )}
    `;
  }
}

module.exports = Index;
