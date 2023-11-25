import { pageCache, imageCache, staticResourceCache, googleFontsCache } from "workbox-recipes"

// eslint-disable-next-line no-constant-condition
if (false) {
    pageCache()
    imageCache()
// offlineFallback()
    staticResourceCache()
    googleFontsCache()
}