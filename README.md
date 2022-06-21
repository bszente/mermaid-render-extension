# Mermaid Render Browser Extension

Simple browser extension to render Mermaid diagrams in web pages.

Supported web pages:

* Bitbucket
* Pandoc generated HTML files

## Install

Supported browsers:

* Firefox: [Mermaid Render - Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/mermaid-render/)

### From source in Chrome/Chromium

1. Clone the repository:

       git clone https://github.com/bszente/mermaid-render-extension.git

2. Enable *Developer mode* in chrome://extensions (*More tools -> Extensions*)
3. Click on *Load unpacked* button
4. Select the cloned repository folder

## Privacy

The extension does not use any cloud services to display the diagrams. It just
injects the Mermaid JavaScript source file and replaces those `<pre><code>`
elements that may contain diagrams with `<div class="mermaid">` elements. All
the rendering is done *client side* in the browser.
