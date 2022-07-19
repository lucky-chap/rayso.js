/*
 * Unofficial API for Ray.So that turns your code into beautiful images.
 * Choose from a range of syntax colors, hide or show the background, and
 * toggle between a dark and light window.
 *
 * Source: ray.so
 * Author: Quavo https://github.com/lucky-chap with help from s0ftik3
 */

const puppeteer = require('puppeteer-core');

module.exports = class RaySo {
	/** 
     * @param {Object} [options]
            Query parameters used to create
            image from ray.so
          * @param {String} [options.title]
            The title of the code snippet to be created
            The default name is 'Untitled-1'
          * @param {('breeze'|'candy'|'crimson'|'falcon'|'meadow'|'midnight'|'raindrop'|'sunset')} [options.theme]
            The theme you want to use for the image. 
            Default theme is 'breeze'
          * @param {(true|false)} [options.background]
            Option to hide or show the background. Default is true
          * @param {(true|false)} [options.darkMode]
            Option to set light or dark mode. Default is true
          * @param {('16'|'32'|'64'|'128')} [options.padding]
            Padding to be used around the code. Default padding is '32px'
          * @param {String} [options.language]
            This is the language the code is going to be in. Default is auto
          * @param {(ture|false)} [options.localPreview]
            Generates a local file for the returned output. Buffer is still returned. 
            Default is true
    */
};
