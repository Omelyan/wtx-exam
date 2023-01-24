import { memo } from "react";
import { Path, Svg } from "react-native-svg";

import { useLayout, useTheme } from "~/hooks";

export default memo(() => {
  const { normalize } = useLayout();
  const { colors } = useTheme();

  return (
    <Svg width={normalize(34)} height={normalize(18)} viewBox="0 0 34 18">
      <Path d="M0 10.5458H33.9999V7.41699H0V10.5458Z" fill={colors.text} />
      <Path d="M1.58384 0L0 1.54507L1.58384 3.09014H33.9999V0H1.58384Z" fill={colors.text} />
      <Path
        d="M0.00012207 14.9092V17.9993L17.393 17.9993L18.9768 16.4542L17.393 14.9091L0.00012207 14.9092Z"
        fill={colors.text}
      />
    </Svg>
  );
});
