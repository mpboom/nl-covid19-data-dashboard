import fs from 'fs';
import path from 'path';
import { Municipalities, Regions } from '~/types/data';
import { National } from '~/types/data.d';
import { parseMarkdownInLocale } from '~/utils/parse-markdown-in-locale';
import { sortNationalTimeSeriesInDataInPlace } from './data-sorting';
import { loadJsonFromFile } from './utils/load-json-from-file';

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

const vrCollection = loadJsonFromFile<Regions>(
  path.join(process.cwd(), 'public', 'json', 'VR_COLLECTION.json')
);

const gmCollection = loadJsonFromFile<Municipalities>(
  path.join(process.cwd(), 'public', 'json', 'GM_COLLECTION.json')
);

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

interface NationalPagePropsSettings<T1, T2> {
  choropleth: {
    vr?: (collection: Regions) => T1;
    gm?: (collection: Municipalities) => T2;
  };
}

export type NationalPageProps = Await<
  ReturnType<ReturnType<typeof getNationalStaticProps4>>
>['props'];

export function getNationalStaticProps4<T1 = undefined, T2 = undefined>(
  settings: NationalPagePropsSettings<T1, T2>
) {
  return async () => {
    const filePath = path.join(process.cwd(), 'public', 'json', 'NL.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents) as National;

    const lastGenerated = data.last_generated;

    sortNationalTimeSeriesInDataInPlace(data);

    const text = parseMarkdownInLocale(
      (await import('../locale/index')).default
    );

    const filterVr = settings.choropleth.vr || (() => undefined);
    const filterGm = settings.choropleth.gm || (() => undefined);

    return {
      props: {
        data,
        text,
        lastGenerated,
        choropleth: {
          vr: filterVr(vrCollection) as T1,
          gm: filterGm(gmCollection) as T2,
        },
      },
    };
  };
}
