# Storing & Embedding Your DJ Set Recordings

Since you have OBS recordings and can't use Twitch VODs (copyright restrictions), here are your best options:

---

## Recommended: YouTube (Unlisted)

### Why YouTube?
- ✅ **FREE unlimited storage**
- ✅ **Best video player** on any device
- ✅ **Easy embedding**
- ✅ **DJ-friendly**: Usually just adds ads, rarely removes content
- ✅ **Works on all devices**

### How to Upload:
1. Go to [YouTube Studio](https://studio.youtube.com)
2. Click **"Create"** → **"Upload videos"**
3. Select your OBS recording
4. **Important**: Set visibility to **"Unlisted"**
   - Won't show in search results
   - Only people with the link can watch
   - Still embeddable on your site
5. Add title, description
6. Click **"Publish"**

### How to Get the Embed Code:
1. Go to your video on YouTube
2. Click **"Share"** → **"Embed"**
3. Copy the video ID from the URL
   - URL looks like: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID is: `dQw4w9WgXcQ` (the part after `v=`)
4. In your `index.html`, replace `YOUR_YOUTUBE_VIDEO_ID` with this ID

**Example:**
```html
<iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    ...
</iframe>
```

### What About Copyright?
- YouTube's Content ID will likely detect some tracks
- **Usually result**: Ads added to your video (revenue goes to rights holders)
- **Rarely**: Video blocked in specific countries
- **Almost never**: Full removal (unless you get multiple strikes)
- Many DJs successfully post mixes on YouTube this way

---

## Alternative: Vimeo

### Why Vimeo?
- ✅ **More DJ/creative-friendly**
- ✅ **Less aggressive copyright detection**
- ✅ **Professional appearance**
- ✅ **Better privacy controls**
- ❌ **Limited on free plan**: 500MB/week upload, 5GB total storage

### How to Upload:
1. Create account at [Vimeo.com](https://vimeo.com)
2. Click **"New video"** → **"Upload"**
3. Upload your OBS file
4. Set privacy to **"Unlisted"** or **"Hide from Vimeo"**

### How to Embed:
1. Go to your video
2. Click **"Share"** → Get the video ID from URL
3. Vimeo embed format:
```html
<iframe 
    src="https://player.vimeo.com/video/VIDEO_ID" 
    width="100%" 
    height="200" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen>
</iframe>
```

### Pricing (if you upload a lot):
- **Free**: 5GB total storage
- **Vimeo Plus** ($7/month): 5GB/week, 250GB total
- **Vimeo Pro** ($20/month): 20GB/week, 1TB total

---

## Using Dropbox (Since You Have Storage)

### Why Dropbox?
- ✅ You already have large storage
- ✅ Full control over files
- ❌ **Not ideal for video playback**
- ❌ Bandwidth limits on shared links
- ❌ No good native video player

### How to Use:
1. Upload video to Dropbox
2. Get shareable link
3. Modify link for direct playback:
   - Change `www.dropbox.com` → `dl.dropboxusercontent.com`
   - Change `?dl=0` → `?raw=1`
4. Use HTML5 video tag:
```html
<video width="100%" height="200" controls>
    <source src="YOUR_MODIFIED_DROPBOX_LINK" type="video/mp4">
</video>
```

**Cons**: 
- Player isn't as good as YouTube/Vimeo
- Can hit bandwidth limits if video gets lots of views
- Dropbox might throttle direct video streaming

---

## Archive.org (Internet Archive)

### Why Archive.org?
- ✅ **FREE unlimited storage**
- ✅ **Designed for archiving**
- ✅ **Very DJ-friendly** (preservation mission)
- ✅ **Never removes content** (unless illegal)
- ❌ Slower uploads
- ❌ Basic video player

### How to Upload:
1. Create account at [Archive.org](https://archive.org)
2. Go to **"Upload"**
3. Upload your video
4. Set metadata (title, description, tags)
5. License: Choose "Creative Commons" or equivalent

### How to Embed:
Archive.org provides embed codes - look for the `<iframe>` option on your video page.

---

## My Recommendation

**Best choice**: **YouTube (Unlisted)**
- Easiest to use
- Best player experience
- Free unlimited storage
- Works everywhere
- Copyright claims rarely remove DJ mixes

**Second choice**: **Vimeo** (if you upload less than 500MB/week)
- More professional
- Less likely to get copyright claims

**Third choice**: **Archive.org** (if you want a permanent archive)
- True archival storage
- Never removes content

---

## Already Using Dropbox?

Since you have large Dropbox storage, you could:
1. **Store master files** in Dropbox as backup
2. **Upload to YouTube** for website embedding
3. Best of both worlds: full backup + easy playback

---

## Need Help Setting Up?

Let me know which platform you choose and I can:
- Update your website code for that platform
- Help you get the embed codes working
- Troubleshoot any issues

The YouTube setup is really the easiest - just set to unlisted and embed!
