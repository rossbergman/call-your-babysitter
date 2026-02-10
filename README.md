# Call Your Babysitter - DJ ROSS

A vibrant 80s neon-themed website for the "Call Your Babysitter" DJ party series, featuring disco balls, whiskey glasses, and endless neon vibes.

![Call Your Babysitter](Call_Your_Babysitter_260124_Square.png)

## Features

- 🎵 **Mixes Section** - Showcase your latest MixCloud mixes
- 🎉 **Party Updates** - Display upcoming party information
- 💌 **Email Signup** - Integrate with Substack or other email services
- ✨ **80s Neon Aesthetic** - Animated backgrounds, neon text effects, and retro vibes
- 📱 **Fully Responsive** - Looks great on all devices

## Setup & Deployment

### Quick Start with GitHub Pages (FREE)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it whatever you like (e.g., `call-your-babysitter`)
   - Make it public

2. **Upload Your Files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Customization

#### 1. Add Your Party Image
- Replace `Call_Your_Babysitter_260124_Square.png` with your party flyer
- Update the filename in `index.html` if needed

#### 2. Connect MixCloud
In `index.html`, find the `.mix-card` sections and add your MixCloud embeds:

```html
<div class="mixcloud-embed">
    <iframe width="100%" height="120" 
            src="https://www.mixcloud.com/widget/iframe/?feed=YOUR_MIX_URL" 
            frameborder="0"></iframe>
</div>
```

To get the embed code:
- Go to your mix on MixCloud
- Click "Share" → "Embed"
- Copy the iframe code

#### 3. Add Substack Email Signup

**Option A: Use Substack Embed Widget**
- Log into your Substack
- Go to Settings → Publication details
- Find "Embed this form on your website"
- Copy the iframe URL
- Paste it in `index.html` where it says `YOUR_SUBSTACK_EMBED_URL`

**Option B: Link to Your Substack**
- Simply replace `YOUR_SUBSTACK_URL` with your Substack link (e.g., `https://yourname.substack.com`)

**Option C: Use a Free Form Service**
- [Formspree](https://formspree.io/) - Free tier available
- [Netlify Forms](https://www.netlify.com/products/forms/) - 100 submissions/month free
- [Google Forms](https://www.google.com/forms/about/) - Unlimited and free

#### 4. Update Social Links
Replace these placeholder URLs in `index.html`:
- `YOUR_INSTAGRAM_URL`
- `YOUR_MIXCLOUD_URL`
- `YOUR_SUBSTACK_URL`

#### 5. Update Party Details
Edit the party information in the `#next-party` section:
- Date and time
- Venue name and address
- Any special details

## File Structure

```
call-your-babysitter/
├── index.html              # Main HTML file
├── styles.css              # All styling and animations
├── script.js               # Interactive features
├── README.md               # This file
└── Call_Your_Babysitter_260124_Square.png  # Party flyer image
```

## Alternative Hosting Options (All Free)

### Netlify
1. Drag and drop your files into [Netlify Drop](https://app.netlify.com/drop)
2. Get an instant URL
3. Can connect custom domain

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in your project folder
3. Follow prompts
4. Instant deployment

### Cloudflare Pages
1. Push to GitHub
2. Connect GitHub repo to Cloudflare Pages
3. Auto-deploys on every push

## Customizing Colors

Want different neon colors? Edit the CSS variables in `styles.css`:

```css
:root {
    --neon-pink: #ff006e;     /* Main pink glow */
    --neon-blue: #00f5ff;     /* Blue accents */
    --neon-purple: #8b00ff;   /* Purple elements */
    --neon-yellow: #ffea00;   /* Yellow highlights */
    --neon-orange: #ff6b00;   /* Orange touches */
    --whiskey: #d4a052;       /* Whiskey glass color */
}
```

## Features Breakdown

### Animated Elements
- Retro grid background with perspective
- Twinkling star field
- Flickering neon text effects
- Smooth scroll animations
- Hover glow effects
- Parallax scrolling

### Sections
1. **Hero** - Eye-catching title with neon effects
2. **Navigation** - Sticky nav with smooth scrolling
3. **Next Party** - Featured party card with image and details
4. **Mixes** - Grid layout for your latest tracks
5. **Subscribe** - Email signup form integration
6. **Footer** - Social links and copyright

## Tips for Best Results

1. **Images**: Use high-quality square images for party flyers (1080x1080px recommended)
2. **Colors**: Party flyers with dark backgrounds work best with the neon theme
3. **Content**: Keep party descriptions concise and exciting
4. **Updates**: Regularly update mix listings and party information
5. **Mobile**: Test on mobile devices - the site is responsive but always verify

## Browser Support

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Need Help?

Common issues:
- **Images not showing**: Check file path and name match exactly
- **Fonts not loading**: Ensure internet connection (uses Google Fonts)
- **Animations choppy**: Try on a different browser or device

## License

Free to use and modify for your DJ events!

---

**Party on! 🎉🎵✨**

For updates and more mixes, follow DJ ROSS on your socials.
