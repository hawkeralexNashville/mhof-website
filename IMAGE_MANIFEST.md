# MHOF Website — Image Manifest

This document maps every image referenced in the code to where it belongs and what it should be.
Drop your exported WordPress images into the correct folders under `/public/images/`.

---

## Logo

| Filename | Location | From WordPress | Notes |
|----------|----------|----------------|-------|
| `mhof-logo.svg` | `/public/images/logo/` | `wp-content/uploads/2020/06/mhof-logo.svg` | Main logo — used in header and footer |

---

## Hero

| Filename | Location | Description | Recommended Size |
|----------|----------|-------------|-----------------|
| `hero-museum-interior.jpg` | `/public/images/hero/` | Wide interior shot of the museum — used as the full-screen hero background | 1920x1080 minimum, landscape |

> **Note:** The current WP site uses a slider with multiple hero images. The new design uses a single hero image with a Ken Burns (slow zoom) animation. Choose the best/most dramatic museum interior shot. The hero slider images from WordPress are likely in `wp-content/uploads/` — look for large landscape images of the museum interior.

---

## Banners (Promotional)

| Filename | Location | From WordPress | Notes |
|----------|----------|----------------|-------|
| `9th_ConcertAndInduction_1512x336px.jpg` | `/public/images/banners/` | `wp-content/uploads/2026/02/9th_ConcertAndInduction_1512x336px.jpg` | 9th Induction Ceremony banner — **exact filename match** |

---

## Exhibits (6 cards)

These are for the "What You'll Discover" grid section. Each exhibit needs a **4:3 landscape** photo.

| Filename | Location | Description |
|----------|----------|-------------|
| `exhibit-la-wrecking-crew.jpg` | `/public/images/exhibits/` | Photo from the L.A. / Wrecking Crew exhibit |
| `exhibit-nashville-a-team.jpg` | `/public/images/exhibits/` | Photo from the Nashville A-Team exhibit |
| `exhibit-memphis-american-sound.jpg` | `/public/images/exhibits/` | Photo from the Memphis / American Sound Studio exhibit |
| `exhibit-muscle-shoals.jpg` | `/public/images/exhibits/` | Photo from the Muscle Shoals / Swampers exhibit |
| `exhibit-jimi-hendrix.jpg` | `/public/images/exhibits/` | Photo from the Jimi Hendrix exhibit |
| `exhibit-detroit-funk-brothers.jpg` | `/public/images/exhibits/` | Photo from the Detroit / Funk Brothers exhibit |

> **Finding these in WordPress:** Check `/museum/` page on the current site — these are the exhibit section images. Also try searching the uploads folder for exhibit-related images. Ideal size: 800x600 or larger.

---

## Highlights (Instruments & Memorabilia — 4 images)

These appear in an asymmetric grid on the right side of the "Instruments & Memorabilia" section.
The first image is tall (portrait/square), the other three are square.

| Filename | Location | Description |
|----------|----------|-------------|
| `highlight-elvis-american-sound.jpg` | `/public/images/exhibits/` | Elvis / American Sound Studio memorabilia (tall, portrait orientation) |
| `highlight-hendrix-strat.jpg` | `/public/images/exhibits/` | Hendrix Stratocaster guitar closeup (square) |
| `highlight-glen-campbell.jpg` | `/public/images/exhibits/` | Glen Campbell guitars (square) |
| `highlight-johnny-cash.jpg` | `/public/images/exhibits/` | Johnny Cash instruments/memorabilia (square) |

> **Tip:** If you don't have individual instrument photos, any good museum interior shots of these exhibit areas will work. You can also swap these names/descriptions for other highlights you prefer.

---

## Backstage Video Thumbnails (3 images)

| Filename | Location | Description |
|----------|----------|-------------|
| `backstage-brooks-dunn.jpg` | `/public/images/hero/` | Thumbnail for Brooks & Dunn Backstage interview |
| `backstage-booker-t.jpg` | `/public/images/hero/` | Thumbnail for Booker T / Steve Cropper interview |
| `backstage-garth-brooks.jpg` | `/public/images/hero/` | Thumbnail for Garth Brooks interview |

> **Note:** These are YouTube video thumbnails. You can either screenshot them from the YouTube videos or use any press photos of these artists. **Also:** You'll need to replace the placeholder YouTube video IDs in `/components/VideoSection.tsx` with the real video IDs from your YouTube channel. The IDs are in the embed URLs on the current WordPress site.

---

## Private Events (1 image)

| Filename | Location | Description |
|----------|----------|-------------|
| `private-events-venue.jpg` | `/public/images/events/` | Wide shot of the venue set up for an event — this is the full-width parallax background | 1920x1080+ |

> **Finding in WordPress:** Check the `/private-events/` page on the current site for venue photos.

---

## GRAMMY Museum Gallery (1 image)

| Filename | Location | Description |
|----------|----------|-------------|
| `grammy-gallery-interactive.jpg` | `/public/images/gallery/` | Photo of visitors using the interactive GRAMMY Gallery exhibits | 800x600+ |

> **Finding in WordPress:** Check the `/grammy-museum-gallery/` page for gallery photos.

---

## Merchandise (3 images)

| Filename | Location | Description |
|----------|----------|-------------|
| `merch-hats.jpg` | `/public/images/merchandise/` | MHOF hat product photo (square) |
| `merch-tshirts.jpg` | `/public/images/merchandise/` | MHOF t-shirt product photo (square) |
| `merch-youth.jpg` | `/public/images/merchandise/` | MHOF youth shirt product photo (square) |

> **Finding in WordPress:** These are likely pulled from the Shopify store. Check `shop.musicianshalloffame.com` for product images, or use the ones cached in WordPress uploads.

---

## Open Graph / Social Sharing (1 image)

| Filename | Location | Description |
|----------|----------|-------------|
| `og-image.jpg` | `/public/images/` | Social media sharing image — shows up when the URL is shared on Facebook/Twitter | Exactly 1200x630 |

> **Tip:** Create this by combining the MHOF logo with a compelling museum interior photo at 1200x630px.

---

## Favicon

| Filename | Location | Description |
|----------|----------|-------------|
| `favicon.ico` | `/public/` | Browser tab icon |
| `apple-touch-icon.png` | `/public/` | iOS home screen icon (180x180) |

---

## Summary: Quick Checklist

- [ ] `/public/images/logo/mhof-logo.svg`
- [ ] `/public/images/hero/hero-museum-interior.jpg`
- [ ] `/public/images/banners/9th_ConcertAndInduction_1512x336px.jpg`
- [ ] `/public/images/exhibits/exhibit-la-wrecking-crew.jpg`
- [ ] `/public/images/exhibits/exhibit-nashville-a-team.jpg`
- [ ] `/public/images/exhibits/exhibit-memphis-american-sound.jpg`
- [ ] `/public/images/exhibits/exhibit-muscle-shoals.jpg`
- [ ] `/public/images/exhibits/exhibit-jimi-hendrix.jpg`
- [ ] `/public/images/exhibits/exhibit-detroit-funk-brothers.jpg`
- [ ] `/public/images/exhibits/highlight-elvis-american-sound.jpg`
- [ ] `/public/images/exhibits/highlight-hendrix-strat.jpg`
- [ ] `/public/images/exhibits/highlight-glen-campbell.jpg`
- [ ] `/public/images/exhibits/highlight-johnny-cash.jpg`
- [ ] `/public/images/hero/backstage-brooks-dunn.jpg`
- [ ] `/public/images/hero/backstage-booker-t.jpg`
- [ ] `/public/images/hero/backstage-garth-brooks.jpg`
- [ ] `/public/images/events/private-events-venue.jpg`
- [ ] `/public/images/gallery/grammy-gallery-interactive.jpg`
- [ ] `/public/images/merchandise/merch-hats.jpg`
- [ ] `/public/images/merchandise/merch-tshirts.jpg`
- [ ] `/public/images/merchandise/merch-youth.jpg`
- [ ] `/public/images/og-image.jpg`
- [ ] `/public/favicon.ico`
- [ ] `/public/apple-touch-icon.png`

**Total: 22 images needed for the homepage**

---

## YouTube Video IDs to Update

In `/components/VideoSection.tsx`, replace these placeholders with real YouTube video IDs:

- `BROOKS_DUNN_VIDEO_ID` → Get from the Brooks & Dunn embed on the current site
- `BOOKER_T_VIDEO_ID` → Get from the Booker T embed on the current site
- `GARTH_BROOKS_VIDEO_ID` → Get from the Garth Brooks embed on the current site

The video ID is the part after `v=` in a YouTube URL (e.g., `youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`).
