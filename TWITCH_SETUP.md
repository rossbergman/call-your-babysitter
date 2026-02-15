# Twitch Integration Setup Guide

Your website now has a complete Twitch section! Here's how to configure it.

## Quick Setup Checklist

- [ ] Replace `YOUR_TWITCH_USERNAME` with your actual Twitch username
- [ ] Replace `YOUR_DOMAIN.com` and `YOUR_USERNAME.github.io` in the iframe parent parameters
- [ ] Add your VOD links and thumbnails
- [ ] Test the embeds on your live site

---

## 1. Basic Twitch Setup

### Find and Replace These Values in `index.html`:

**YOUR_TWITCH_USERNAME** (appears 4 times)
- Replace with your actual Twitch channel name (e.g., `djross`)

**YOUR_DOMAIN.com** (appears 2 times in iframe parent parameters)
- Replace with your custom domain if you have one (e.g., `callyourbabysitter.com`)
- If you don't have a custom domain yet, you can remove this parameter

**YOUR_USERNAME.github.io** (appears 2 times)
- Replace with your GitHub Pages domain (e.g., `yourname.github.io`)

### Example:
```html
<!-- Before -->
<iframe src="https://player.twitch.tv/?channel=YOUR_TWITCH_USERNAME&parent=YOUR_DOMAIN.com&parent=YOUR_USERNAME.github.io"

<!-- After -->
<iframe src="https://player.twitch.tv/?channel=djross&parent=callyourbabysitter.com&parent=yourname.github.io"
```

---

## 2. What You Get

### Live Stream Embed
- Automatically shows when you're live
- Shows offline screen when you're not streaming
- Full video player with controls

### Chat Integration (Optional)
- Live Twitch chat appears next to the stream
- On mobile, chat is hidden for better experience
- To remove chat entirely, delete the `<div class="twitch-chat">` section

### Recent VODs Section
- Showcase your past streams
- Custom thumbnails and titles
- Links to watch full VODs

---

## 3. Customizing VODs (Past Streams)

### Getting Twitch VOD Links:
1. Go to your Twitch Creator Dashboard
2. Click **Content → Video Producer**
3. Find your past stream
4. Click the three dots → **Copy Link**

### Getting Twitch Thumbnails:
Twitch auto-generates thumbnails. The URL format is:
```
https://static-cdn.jtvnw.net/cf_vods/VIDEO_ID/THUMBNAIL_ID-320x180.jpg
```

**Easier option**: Use a placeholder or custom image for now, then grab the actual thumbnail from your VOD page.

### Update Each VOD Card:

```html
<div class="vod-card">
    <div class="vod-thumbnail">
        <img src="YOUR_THUMBNAIL_URL_OR_IMAGE" alt="Stream Title">
        <div class="vod-duration">2:45:30</div> <!-- Update duration -->
    </div>
    <h4>Your Stream Title</h4>
    <p class="vod-date">February 10, 2026</p> <!-- Update date -->
    <a href="https://twitch.tv/videos/YOUR_VOD_ID" target="_blank" class="vod-link">Watch</a>
</div>
```

---

## 4. Hide Chat (Optional)

If you don't want the chat displayed, find this section in `index.html` and delete it:

```html
<!-- DELETE THIS ENTIRE SECTION -->
<div class="twitch-chat">
    <iframe
        src="https://www.twitch.tv/embed/YOUR_TWITCH_USERNAME/chat?parent=YOUR_DOMAIN.com&parent=YOUR_USERNAME.github.io"
        height="400"
        width="100%">
    </iframe>
</div>
```

The player will then take up the full width.

---

## 5. Advanced: Auto-Update with Twitch API (Optional)

Want to automatically show when you're live with a "LIVE NOW" badge? You'd need to add some JavaScript:

1. Register your app at https://dev.twitch.tv/console
2. Get your Client ID
3. Use the Twitch API to check stream status
4. Update the page dynamically

This is more advanced - let me know if you want help with this!

---

## 6. Testing

### Before Going Live:
1. Check the embed loads (you'll see an offline screen)
2. Verify the parent domains match your actual domains
3. Click on VOD links to ensure they work

### When You Go Live:
- The embed should automatically show your live stream
- Test on both desktop and mobile

---

## 7. Troubleshooting

**"Embedded content is not available"**
- Double-check the `parent` parameter matches your actual domain
- Make sure you're using the exact domain (no http:// or https://)
- GitHub Pages domain must be in the format: `username.github.io`

**Stream not showing when live**
- Verify your Twitch username is spelled correctly
- Make sure your VODs are enabled in Twitch settings
- Check that your stream is set to public

**Chat not loading**
- Same parent domain issues as above
- Make sure you have chat enabled in Twitch settings

---

## 8. Optional Enhancements

### Live Status Indicator
Add a red "LIVE" badge when streaming (requires JavaScript + Twitch API)

### Schedule Display
Add your streaming schedule so viewers know when to tune in

### Follower Count
Display your Twitch follower count (requires Twitch API)

### Clips Gallery
Instead of VODs, showcase your best Twitch clips

Let me know if you want any of these features added!

---

## Quick Reference: All the Files You Need to Update

1. **index.html**
   - Replace `YOUR_TWITCH_USERNAME` (4 places)
   - Replace `YOUR_DOMAIN.com` (2 places)
   - Replace `YOUR_USERNAME.github.io` (2 places)
   - Update VOD cards with your actual streams

2. **No changes needed in:**
   - styles.css (already styled!)
   - script.js (already has smooth scrolling)

---

**Need help?** Let me know and I can walk you through any of these steps!
