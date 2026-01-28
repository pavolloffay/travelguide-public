
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const ROUTES = ['privacy-policy', 'terms'];

function generateStaticPages() {
    const indexHtmlPath = path.join(DIST_DIR, 'index.html');

    if (!fs.existsSync(indexHtmlPath)) {
        console.error('Error: dist/index.html not found. Run vite build first.');
        process.exit(1);
    }

    const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

    ROUTES.forEach(route => {
        const routeDir = path.join(DIST_DIR, route);

        if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
        }

        const targetPath = path.join(routeDir, 'index.html');
        fs.writeFileSync(targetPath, indexHtmlContent);
        console.log(`Generated static page for: /${route}`);
    });

    console.log('Static pages generation complete.');
}

generateStaticPages();
