import { Router } from 'express';
import { loadHTML } from '../services/scrapper.js';

const router = Router();

// Sample route to get hymns
router.get('/', async (req, res) => {
  try {
    const hymnary = req.query.hymnary || 'classic'; // default to 'classic'
    const lang = req.query.lang || 'en'; // default to 'en'
    
    const $ = await loadHTML(hymnary, lang);
    
    // Parse the HTML with cheerio selectors
    const hymns = [];
    $('a[data-testid="ContentLink"]').each((i, element) => {
      const title = $(element).text().trim();
      const link = $(element).attr('p');
      
      if (title && link) {
        hymns.push({ title, link });
      }
    });
    
    res.json({ hymnary, lang, hymns });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;