import express, { Request, Response } from 'express';
import { scrapeBlogs } from './scrape';

const app = express();
app.use(express.json());

app.post('/scrape', async (req: Request, res: Response) => {
  try {
    const data = await scrapeBlogs();
    await fetch('https://divij45.app.n8n.cloud/webhook-test/scrape', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    });
    res.json({ status: 'success', items: data.length });
  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to scrape blogs' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));