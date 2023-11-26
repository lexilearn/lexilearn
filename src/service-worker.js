import { pageCache, imageCache, staticResourceCache, googleFontsCache } from "workbox-recipes"

pageCache()
imageCache()
// offlineFallback()
staticResourceCache()
googleFontsCache()