import { Municipalities, Regions } from '~/types/data';
import get from 'lodash/get';
import set from 'lodash/set';
import fs from 'fs';
import path from 'path';
import { National } from '~/types/data.d';
import { parseMarkdownInLocale } from '~/utils/parse-markdown-in-locale';
import { sortNationalTimeSeriesInDataInPlace } from './data-sorting';
import { TALLLanguages } from '~/locale/index';
import { loadJsonFromFile } from './utils/load-json-from-file';

export interface NationalPageProps {
  data: National;
  lastGenerated: string;
  text: TALLLanguages;
  choropleth: ReturnType<typeof getChoroplethData>;
}

/**
 * getNlData loads the data for /landelijk pages.
 * It needs to be used as the Next.js `getStaticProps` function.
 *
 * Example:
 * ```ts
 * PositivelyTestedPeople.getLayout = getNationalLayout;
 *
 * export const getStaticProps = getNlData
 *
 * export default PositivelyTestedPeople;
 * ```
 *
 * The `INationalData` should be used in conjunction with `FCWithLayout`
 *
 * Example:
 * ```ts
 * const PositivelyTestedPeople: FCWithLayout<INationalData> = props => {
 *   // ...
 * }
 * ```
 */

export async function getNationalStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'json', 'NL.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents) as National;

  const lastGenerated = data.last_generated;

  sortNationalTimeSeriesInDataInPlace(data);

  const text = parseMarkdownInLocale((await import('../locale/index')).default);

  return {
    props: {
      data,
      text,
      lastGenerated,
    },
  };
}

export function getNationalStaticProps3(settings: {
  choropleth?: GetChoroplethDataSettings;
}): () => Promise<{
  props: NationalPageProps & ReturnType<typeof getChoroplethData>;
}> {
  return async () => {
    const filePath = path.join(process.cwd(), 'public', 'json', 'NL.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents) as National;

    const lastGenerated = data.last_generated;

    sortNationalTimeSeriesInDataInPlace(data);

    const text = parseMarkdownInLocale(
      (await import('../locale/index')).default
    );

    return {
      props: {
        data,
        text,
        lastGenerated,
        choropleth: getChoroplethData(settings.choropleth),
      },
    };
  };
}

interface GetChoroplethDataSettings {
  vr?: Array<keyof Regions>;
  gm?: Array<keyof Municipalities>;
}

function getChoroplethData(settings?: GetChoroplethDataSettings) {
  if (
    ([] as unknown[]).concat(settings?.vr).concat(settings?.gm).length === 0
  ) {
    return undefined;
  }
  return {
    ...(settings?.vr && {
      vr: loadAndFilter<Regions>('REGIONS.json', settings.vr),
    }),
    ...(settings?.gm && {
      gm: loadAndFilter<Municipalities>('MUNICIPALITIES.json', settings.gm),
    }),
  };
}

function loadAndFilter<T extends Regions | Municipalities>(
  file: string,
  keys: Array<keyof T>
) {
  const data = loadJsonFromFile<T>(
    path.join(process.cwd(), 'public', 'json', file)
  );
  const returnData: Partial<T> = {};

  keys.forEach((key) => set(returnData, key, get(data, key)));

  return returnData as Pick<T, keyof T>;
}
