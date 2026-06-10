# Haiti Sourcing

Haitian grocery delivery website — static site deployable via GitHub Pages.

## Project Structure

```
haiti-sourcing/
├── index.html        ← Main page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Interactions
└── README.md
```

## Deploy to GitHub Pages (Step-by-Step)

### 1. Create a new repository on GitHub
- Go to https://github.com/new
- Name it `haiti-sourcing` (or anything you like)
- Set it to **Public**
- Do NOT initialize with a README (you already have one)
- Click **Create repository**

### 2. Upload your files
On the new empty repo page, click **"uploading an existing file"** and drag in all files/folders:
- `index.html`
- `css/` folder
- `js/` folder
- `README.md`

Click **Commit changes**.

### 3. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages** (left sidebar)
- Under **Source**, select `Deploy from a branch`
- Branch: `main` / Folder: `/ (root)`
- Click **Save**

### 4. Your site is live!
After ~60 seconds, your site will be at:
```
https://YOUR-USERNAME.github.io/haiti-sourcing/
```

## Custom Domain (Optional)
If you have a domain like `haitisourcing.com`:
1. Go to repo → Settings → Pages → Custom domain
2. Enter your domain and save
3. At your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`

## Making Updates
To update the site after it's live:
- Go to your GitHub repo
- Click the file you want to edit
- Click the pencil ✏️ icon
- Make your changes
- Click **Commit changes**

The site updates automatically within ~30 seconds.
