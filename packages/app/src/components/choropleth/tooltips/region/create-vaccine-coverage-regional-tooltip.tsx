import {
  VrCollectionVaccineCoverage,
  SafetyRegionProperties,
} from '@corona-dashboard/common';
import { Text } from '~/components-styled/typography';
import { TooltipContent } from '~/components/choropleth/tooltips/tooltipContent';
import { formatPercentage } from '~/utils/formatNumber';

export const createVaccineCoverageRegionalTooltip = () => (
  context: SafetyRegionProperties & VrCollectionVaccineCoverage
) => {
  const { vrname, percentage } = context;

  return (
    <TooltipContent title={vrname}>
      <Text m={0} fontWeight="bold">
        {formatPercentage(percentage)}%
      </Text>
    </TooltipContent>
  );
};