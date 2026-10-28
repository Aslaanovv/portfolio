# Yuchiie showcase

Route: `/projects/yuchiie`. Listed first in Projects and linked from a new homepage section; the previous featured project is preserved.

## Source and content boundaries

Reviewed `Aslaanovv/YUCHIIE` (main) on 2026-10-28: README, homepage configuration, Liquid sections, CSS/JS, and original theme assets. The public store redirected to its password page when inspected. No access to earlier chat history was available.

Case-study text describes the implemented theme, not verified commercial results. Demo photography is generated imagery supplied by the theme repository. No sales, conversion, launch, or performance metrics have been invented. Wishlist limitations and Shopify-managed checkout are explicit.

## Visuals

`public/projects/yuchiie/` includes selected theme assets, three client-supplied actual screenshots (desktop, mobile, intro), and a screenshot-based device composition. The homepage, project grid, and case-study hero use `screenshot-mockup.webp`. Screenshots are resized proportionally, without invented navigation or cropping. The collection study remains illustrative and is labeled separately. Rebuild the composition and collection study with:

```sh
node scripts/create-yuchiie-mockups.mjs
```

The composition script uses the existing Sharp dev dependency. No image-generation API or new production dependency is required.

Source screenshots: `3127c288-d36f-476d-a905-2718b0fd14a8.jpeg` (desktop), `IMG_5297.jpeg` (mobile), `IMG_5298.jpeg` (intro). WebP sources are persisted in the project assets; rebuilding does not require the original upload directory.

## Checks

- TypeScript check and Vite production build passed.
- Browser automation attempted but blocked by unavailable browser downloads / missing system shared libraries. Desktop/mobile visual and interaction testing remains a manual review step.
- Live-store checkout, merchant configuration, and publication were not tested or changed.
