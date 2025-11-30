# Testing PWA on Android Device

## Option 1: Test PWA Directly (RECOMMENDED - No SDK needed) ✅

### Steps:
1. **Deploy your PWA to HTTPS server** (required for PWA)
   - Build is ready: `npm run build` ✓
   - Deploy `dist/` folder to your hosting

2. **Open on Android phone**
   - Open Chrome browser
   - Visit your HTTPS URL (e.g., https://yourdomain.com)

3. **Wait for install prompt**
   - After ~30 seconds, you'll see:
     - **Chrome**: Bottom banner "Install"
     - **In-app**: Our custom install banner

4. **Click Install**
   - Choose location to install
   - App appears on home screen

5. **Test offline functionality**
   - Close WiFi/mobile data
   - App should still work with cached content

---

## Option 2: Test Locally with USB Device (Requires Android SDK setup)

### Prerequisites:
- Android SDK installed
- USB debugging enabled on phone
- USB cable connection

### Steps:
1. Set Android SDK path:
```powershell
$env:ANDROID_HOME = "C:\Android\sdk"
$env:ANDROID_SDK_ROOT = "C:\Android\sdk"
```

2. Run app:
```powershell
npm run cap-run-android
```

---

## Option 3: Use Android Emulator (Requires Android SDK setup)

### From Android Studio:
1. Open Android Studio
2. Go to: Device Manager → Create Virtual Device
3. Select Pixel device
4. Install Android version
5. Run emulator
6. Execute: `npm run cap-run-android`

---

## Current Build Status ✓

Your PWA is fully built and ready:
- ✅ Build successful (3.99s)
- ✅ Service Worker configured
- ✅ Manifest valid
- ✅ Icons present
- ✅ Install prompt ready
- ✅ Offline support enabled

### To Deploy:
```bash
npm run build
# Upload dist/ folder to HTTPS hosting
```

### Recommended Hosting Options:
- **Vercel** (easiest, auto HTTPS)
- **Netlify** (auto HTTPS)
- **Firebase Hosting** (HTTPS included)
- **Your own server** (requires SSL certificate)

---

## Testing Checklist (PWA on Android):

- [ ] Deployed to HTTPS server
- [ ] Opened on Android Chrome
- [ ] Waited 30+ seconds
- [ ] Saw install banner/prompt
- [ ] Clicked Install
- [ ] App installed to home screen
- [ ] Launched from home screen
- [ ] Works offline
- [ ] Can access cached pages

---

## Troubleshooting

### Install prompt not showing?
- ✓ Must be HTTPS (not HTTP)
- ✓ Must be Chrome-based browser
- ✓ Must wait 30+ seconds
- ✓ Check DevTools → Application → Manifest
- ✓ Verify Service Worker registered

### Offline not working?
- Check DevTools → Application → Service Workers
- Verify Service Worker is "activated"
- Check Cache Storage tab for cached files

### Icon not showing?
- Check: `dist/image.png` exists
- Check: `dist/manifest.json` icon paths
- Check: Manifest has both "any" and "maskable" purposes

---

## Quick Deploy to Vercel:

```bash
npm install -g vercel
cd g:\project\E-commerce-web\client
vercel --prod
```

This will give you an HTTPS URL to test on mobile immediately!
