import { pageCache, imageCache, offlineFallback, staticResourceCache, googleFontsCache } from "workbox-recipes"

pageCache()
imageCache()
// offlineFallback()
staticResourceCache()
googleFontsCache()