import { National } from '@corona-dashboard/common';
import { css } from '@styled-system/css';
import { useState } from 'react';
import { Box } from '~/components-styled/base';
import { KpiTile } from '~/components-styled/kpi-tile';
import { KpiValue } from '~/components-styled/kpi-value';
import { Markdown } from '~/components-styled/markdown';
import { RadioGroup } from '~/components-styled/radio-group';
import { TwoKpiSection } from '~/components-styled/two-kpi-section';
import { InlineText, Text } from '~/components-styled/typography';
import { useIntl } from '~/intl';
import { replaceVariablesInText } from '~/utils/replaceVariablesInText';

export function VaccineAdministrationsKpiSection({ data }: { data: National }) {
  const { siteText } = useIntl();

  const text = siteText.vaccinaties;

  const [selectedTab, setSelectedTab] = useState(
    text.gezette_prikken.tab_first.title
  );

  return (
    <TwoKpiSection>
      <KpiTile
        title={text.gezette_prikken.title}
        metadata={{
          date:
            data.vaccine_administered_total.last_value.date_of_insertion_unix,
          source: text.bronnen.all_left,
        }}
      >
        <Box css={css({ '& div': { justifyContent: 'flex-start' } })} mb={3}>
          <RadioGroup
            value={selectedTab}
            onChange={(value) => setSelectedTab(value)}
            items={[
              {
                label: text.gezette_prikken.tab_first.title,
                value: text.gezette_prikken.tab_first.title,
              },
              {
                label: text.gezette_prikken.tab_second.title,
                value: text.gezette_prikken.tab_second.title,
              },
            ]}
          />
        </Box>
        {selectedTab == text.gezette_prikken.tab_first.title && (
          <>
            <KpiValue
              absolute={data.vaccine_administered_total.last_value.estimated}
            />
            <Box display="flex" flexDirection={{ _: 'column', lg: 'row' }}>
              <Box flex={{ lg: '1 1 50%' }} mb={3}>
                <Markdown
                  content={text.gezette_prikken.tab_first.description}
                />
              </Box>
              <Box flex={{ lg: '1 1 50%' }} ml={{ lg: 4 }}>
                <VaccineAdministeredItem
                  value={data.vaccine_administered_ggd.last_value.estimated}
                  description={text.gezette_prikken.estimated.ggd}
                  date={data.vaccine_administered_ggd.last_value.date_unix}
                  isReported
                />

                <VaccineAdministeredItem
                  value={
                    data.vaccine_administered_hospitals_and_care_institutions
                      .last_value.estimated
                  }
                  description={
                    text.gezette_prikken.estimated
                      .hospitals_and_care_institutions
                  }
                  date={
                    data.vaccine_administered_hospitals_and_care_institutions
                      .last_value.date_unix
                  }
                />

                <VaccineAdministeredItem
                  value={data.vaccine_administered_doctors.last_value.estimated}
                  description={text.gezette_prikken.estimated.doctors}
                  date={data.vaccine_administered_doctors.last_value.date_unix}
                />
              </Box>
            </Box>
          </>
        )}
        {selectedTab == text.gezette_prikken.tab_second.title && (
          <>
            <KpiValue
              absolute={data.vaccine_administered_total.last_value.reported}
            />
            <Box display="flex" flexDirection={{ _: 'column', lg: 'row' }}>
              <Box flex={{ lg: '1 1 50%' }}>
                <Markdown
                  content={text.gezette_prikken.tab_second.description}
                />
              </Box>
              <Box flex={{ lg: '1 1 50%' }} ml={{ lg: 4 }}>
                <VaccineAdministeredItem
                  value={data.vaccine_administered_ggd_ghor.last_value.reported}
                  description={text.gezette_prikken.reported.ggd_ghor}
                  date={data.vaccine_administered_ggd_ghor.last_value.date_unix}
                  isReported
                />
              </Box>
            </Box>
          </>
        )}
      </KpiTile>
    </TwoKpiSection>
  );
}

interface VaccineAdministeredProps {
  value: number;
  date: number;
  description: string;
  isReported?: boolean;
}

function VaccineAdministeredItem(props: VaccineAdministeredProps) {
  const { value, date, description, isReported } = props;

  const { siteText, formatNumber, formatDateFromSeconds } = useIntl();

  return (
    <Text fontWeight="bold">
      <InlineText css={css({ color: 'data.primary' })}>
        {formatNumber(value)}
      </InlineText>{' '}
      {description}
      <br />
      <InlineText fontWeight="normal" fontSize={1} color="annotation">
        {replaceVariablesInText(
          isReported
            ? siteText.vaccinaties.gezette_prikken.reported_until
            : siteText.vaccinaties.gezette_prikken.estimated_until,
          {
            reportedDate: formatDateFromSeconds(date, 'weekday-medium'),
          }
        )}
      </InlineText>
    </Text>
  );
}