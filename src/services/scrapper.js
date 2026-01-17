import axios from 'axios'
import { load } from 'cheerio';

const urls = {
  "classic": "https://www.churchofjesuschrist.org/study/manual/hymns?lang=",
  "new": "https://www.churchofjesuschrist.org/study/music/hymns-for-home-and-church?lang=",
  "children": "https://www.churchofjesuschrist.org/study/manual/children-s-songbook?lang="
};

const languages = {
  "en":"eng",
  "es":"spa",
  "fr":"fra"
};

export async function loadHTML(hymnary, lang = "en") {
    const res = await fetch(`${urls[hymnary]}${languages[lang]}`, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }
    });
    const html = await res.text();
    const $ = load(html);
    return $;
}