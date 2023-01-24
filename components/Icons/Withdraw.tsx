import { memo } from "react";
import { Path, Svg } from "react-native-svg";

import { useLayout, useTheme } from "~/hooks";

export default memo(() => {
  const { normalize } = useLayout();
  const { colors } = useTheme();

  return (
    <Svg width={normalize(26)} height={normalize(19)} viewBox="0 0 26 19">
      <Path
        d="M13.1282 12.6003L17.2908 8.07654V6.75019H16.0639L14.0046 8.95286V0H12.2519V8.95286L10.2145 6.75019H8.96574V8.07654L13.1282 12.6003Z"
        fill={colors.text}
      />
      <Path
        d="M23.3311 1.97852H15.1241V3.82114H23.3311C23.8204 3.82114 24.2207 4.23573 24.2207 4.74245V6.70023H18.4602V8.54285H24.2207V16.2358C24.2207 16.7655 23.8204 17.1801 23.3311 17.1801H2.66896C2.17966 17.1801 1.77931 16.7655 1.77931 16.2588V8.54285H7.51756V6.70023H1.77931V4.74245C1.77931 4.21269 2.17966 3.82114 2.66896 3.82114H10.8537V1.97852H2.66896C1.20104 1.97852 1.52588e-05 3.22228 1.52588e-05 4.74245V16.2358C1.52588e-05 17.7559 1.20104 18.9997 2.66896 18.9997H23.3311C24.799 18.9997 26 17.7559 26 16.2358V4.74245C26 3.19925 24.799 1.97852 23.3311 1.97852Z"
        fill={colors.text}
      />
    </Svg>
  );
});
