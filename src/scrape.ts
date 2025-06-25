import { chromium } from 'playwright';

export async function scrapeBlogs() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const blogs = [
    'https://towardsdatascience.com/search/speech-to-text',
    'https://developer.ibm.com/search/?q=speech+to+text',
  ];

  const data: { title: string; content: string; url: string }[] = [];

  for (const url of blogs) {
    await page.goto(url, { waitUntil: 'networkidle' });
    const articles = await page.$$eval('article, .post, .card', (elements) =>
      elements.map((el) => ({
        title: el.querySelector('h2, h3, .title')?.textContent?.trim() || '',
        content: el.querySelector('p, .content')?.textContent?.trim() || '',
        url: el.querySelector('a')?.href || '',
      }))
    );
    data.push(...articles.filter(a => a.title && a.content && (a.content.includes('speech') || a.content.includes('transcription'))));
  }

  await browser.close();
  return data;
}

scrapeBlogs().then(console.log).catch(console.error);