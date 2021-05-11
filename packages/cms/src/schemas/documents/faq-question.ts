import { selectedLanguages$ } from '../../plugins/translate/datastore';
import { prepareLocalized } from '../../plugins/translate/prepare-localized';

let selectedLanguage = 'nl';
selectedLanguages$.subscribe((selected: any[]) => {
  selectedLanguage = selected.length ? selected[0] : 'nl';
});

export const faqQuestion = {
  title: 'Veelgestelde vraag',
  name: 'faqQuestion',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Titel',
      validation: (Rule: any) =>
        Rule.fields({
          nl: (fieldRule: any) => fieldRule.reset().required(),
          en: (fieldRule: any) => fieldRule.reset().required(),
        }),
    },
    {
      name: 'content',
      type: 'localeBlock',
      title: 'Inhoud',
      validation: (Rule: any) =>
        Rule.fields({
          nl: (fieldRule: any) => fieldRule.reset().required(),
          en: (fieldRule: any) => fieldRule.reset().required(),
        }),
    },
    {
      name: 'group',
      type: 'reference',
      to: [{ type: 'veelgesteldeVragenGroups' }],
      title: 'Groep',
      validation: (Rule: any) => Rule.reset().required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'group.group',
    },
    prepare: prepareLocalized,
  },
};