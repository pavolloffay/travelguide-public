import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');

// Page-specific configurations
const PAGES = {
    'privacy-policy': {
        title: 'Privacy Policy - Nunu TravelGuide',
        description: 'Privacy Policy for Nunu TravelGuide app. Learn how we collect, use, and protect your personal data.',
        canonical: 'https://nunutravelguide.com/privacy-policy/',
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - Nunu TravelGuide",
            "description": "Privacy Policy for Nunu TravelGuide app",
            "url": "https://nunutravelguide.com/privacy-policy/",
            "isPartOf": {
                "@type": "WebSite",
                "name": "Nunu TravelGuide",
                "url": "https://nunutravelguide.com"
            }
        },
        fallbackContent: `
    <div style="min-height:100vh;background:#000;color:#fff;font-family:system-ui,sans-serif;">
      <header style="padding:40px 20px;text-align:center;border-bottom:1px solid #333;">
        <a href="/" style="color:#fff;text-decoration:none;font-size:1.5rem;font-weight:bold;">Nunu TravelGuide</a>
      </header>
      <main style="max-width:800px;margin:0 auto;padding:40px 20px;">
        <h1 style="font-size:2rem;margin-bottom:2rem;">Privacy Policy</h1>
        <p style="color:#999;line-height:1.8;">
          This Privacy Policy describes how Nunu TravelGuide collects, uses, and shares your personal information
          when you use our mobile application. We are committed to protecting your privacy and ensuring the
          security of your personal data.
        </p>
        <p style="color:#999;margin-top:1rem;">Loading full policy...</p>
      </main>
      <footer style="padding:40px 20px;text-align:center;border-top:1px solid #333;">
        <a href="/" style="color:#999;">Back to Home</a>
      </footer>
    </div>`
    },
    'terms': {
        title: 'Terms of Service - Nunu TravelGuide',
        description: 'Terms of Service for Nunu TravelGuide app. Read our terms and conditions for using our AI travel guide service.',
        canonical: 'https://nunutravelguide.com/terms/',
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - Nunu TravelGuide",
            "description": "Terms of Service for Nunu TravelGuide app",
            "url": "https://nunutravelguide.com/terms/",
            "isPartOf": {
                "@type": "WebSite",
                "name": "Nunu TravelGuide",
                "url": "https://nunutravelguide.com"
            }
        },
        fallbackContent: `
    <div style="min-height:100vh;background:#000;color:#fff;font-family:system-ui,sans-serif;">
      <header style="padding:40px 20px;text-align:center;border-bottom:1px solid #333;">
        <a href="/" style="color:#fff;text-decoration:none;font-size:1.5rem;font-weight:bold;">Nunu TravelGuide</a>
      </header>
      <main style="max-width:800px;margin:0 auto;padding:40px 20px;">
        <h1 style="font-size:2rem;margin-bottom:2rem;">Terms of Service</h1>
        <p style="color:#999;line-height:1.8;">
          Welcome to Nunu TravelGuide. By using our application, you agree to these Terms of Service.
          Please read them carefully before using our AI-powered travel guide service.
        </p>
        <p style="color:#999;margin-top:1rem;">Loading full terms...</p>
      </main>
      <footer style="padding:40px 20px;text-align:center;border-top:1px solid #333;">
        <a href="/" style="color:#999;">Back to Home</a>
      </footer>
    </div>`
    }
};

function generateStaticPages() {
    const indexHtmlPath = path.join(DIST_DIR, 'index.html');

    if (!fs.existsSync(indexHtmlPath)) {
        console.error('Error: dist/index.html not found. Run vite build first.');
        process.exit(1);
    }

    const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

    Object.entries(PAGES).forEach(([route, config]) => {
        const routeDir = path.join(DIST_DIR, route);

        if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
        }

        // Create page-specific HTML
        let pageHtml = indexHtmlContent;

        // Update title
        pageHtml = pageHtml.replace(
            /<title>.*?<\/title>/,
            `<title>${config.title}</title>`
        );

        // Update meta description
        pageHtml = pageHtml.replace(
            /<meta name="description"\s+content="[^"]*"\s*\/?>/,
            `<meta name="description" content="${config.description}" />`
        );

        // Update canonical
        pageHtml = pageHtml.replace(
            /<link rel="canonical" href="[^"]*"\s*\/?>/,
            `<link rel="canonical" href="${config.canonical}" />`
        );

        // Update Open Graph URL and title
        pageHtml = pageHtml.replace(
            /<meta property="og:url" content="[^"]*"\s*\/?>/,
            `<meta property="og:url" content="${config.canonical}" />`
        );
        pageHtml = pageHtml.replace(
            /<meta property="og:title" content="[^"]*"\s*\/?>/,
            `<meta property="og:title" content="${config.title}" />`
        );
        pageHtml = pageHtml.replace(
            /<meta property="og:description"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:description" content="${config.description}" />`
        );

        // Update Twitter URL and title
        pageHtml = pageHtml.replace(
            /<meta property="twitter:url" content="[^"]*"\s*\/?>/,
            `<meta property="twitter:url" content="${config.canonical}" />`
        );
        pageHtml = pageHtml.replace(
            /<meta property="twitter:title" content="[^"]*"\s*\/?>/,
            `<meta property="twitter:title" content="${config.title}" />`
        );
        pageHtml = pageHtml.replace(
            /<meta property="twitter:description"\s+content="[^"]*"\s*\/?>/,
            `<meta property="twitter:description" content="${config.description}" />`
        );

        // Replace SoftwareApplication schema with page-specific WebPage schema
        pageHtml = pageHtml.replace(
            /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
            `<script type="application/ld+json">\n${JSON.stringify(config.schema, null, 2)}\n  </script>`
        );

        // Replace fallback content in <div id="root">
        // Match from <div id="root"> to </div>\n</body>
        pageHtml = pageHtml.replace(
            /(<div id="root">)[\s\S]*?(<\/div>\n<\/body>)/,
            `$1${config.fallbackContent}\n  </div>\n</body>`
        );

        const targetPath = path.join(routeDir, 'index.html');
        fs.writeFileSync(targetPath, pageHtml);
        console.log(`Generated static page for: /${route}`);
        console.log(`  - Title: ${config.title}`);
        console.log(`  - Canonical: ${config.canonical}`);
    });

    console.log('\nStatic pages generation complete.');
}

generateStaticPages();
