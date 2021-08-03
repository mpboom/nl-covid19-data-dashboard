import {
  VrCollectionNursingHome,
  VrGeoProperties,
} from '@corona-dashboard/common';
import { vrThresholds } from '~/components/choropleth/logic';
import {
  TooltipContent,
  TooltipSubject,
} from '~/components/choropleth/tooltips';
import { InlineText } from '~/components/typography';
import { useIntl } from '~/intl';
import { useReverseRouter } from '~/utils/use-reverse-router';

export function VrInfectedLocationsTooltip({
  context,
}: {
  context: VrGeoProperties & VrCollectionNursingHome;
}) {
  const { siteText, formatPercentage, formatNumber } = useIntl();
  const reverseRouter = useReverseRouter();
  const subject = siteText.choropleth_tooltip.infected_locations;
  const thresholdValues =
    vrThresholds.nursing_home.infected_locations_percentage;

  return (
    <TooltipContent
      title={context.vrname}
      link={reverseRouter.vr.verpleeghuiszorg(context.vrcode)}
    >
      <TooltipSubject
        subject={subject}
        thresholdValues={thresholdValues}
        filterBelow={context.infected_locations_percentage}
      >
        <InlineText fontWeight="bold">
          {`${formatPercentage(
            context.infected_locations_percentage
          )}% (${formatNumber(context.infected_locations_total)})`}{' '}
        </InlineText>
      </TooltipSubject>
    </TooltipContent>
  );
}