export default class MediaLibAdapter {
  static get toolbox() {
      return {
          title: 'Image Strapi',
          icon: '<svg width="17" height="15" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"></path></svg>'
      };
  }

  constructor({api, config}) {
      this.api = api;
      this.config = config || {};
  }

  render() {
      const currentIndex = this.api.blocks.getCurrentBlockIndex();

      if (this.config.mediaLibToggleFunc) {
          this.config.mediaLibToggleFunc(currentIndex);
      }

      return document.createElement('p');
  }

  save() {
      return {
          name: "media-library-block"
      }
  }
}