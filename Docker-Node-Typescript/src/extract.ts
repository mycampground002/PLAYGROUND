import { load } from "cheerio";

function extract(html: string) {
  if (html === '') return [];
  const $ = load(html);
  const crawledRealtimeKeywords = $(
    '.ah_roll_area.PM_CL_realtimeKeyword_rolling ul > li span.ah_k',
  );
  const keywords: string[] = $(crawledRealtimeKeywords)
    .map((i, el): string => {
      return $(el).text();
    })
    .get();
  return keywords;
}

export { extract };