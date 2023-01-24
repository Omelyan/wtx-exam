import { memo } from "react";
import { Path, Svg } from "react-native-svg";

import { useLayout } from "~/hooks";

export default memo(() => {
  const { normalize } = useLayout();

  return (
    <Svg width={normalize(18)} height={normalize(23)} viewBox="0 0 18 23">
      <Path d="M8.0447 6.80859H6.03353V19.325H8.0447V6.80859Z" fill="#FF0063" />
      <Path d="M11.9669 6.80859H9.95571V19.325H11.9669V6.80859Z" fill="#FF0063" />
      <Path
        d="M13.9776 4.99707V20.2323C13.9776 20.7467 13.5251 21.1631 12.972 21.1631H5.02788C4.47481 21.1631 4.0223 20.7467 4.0223 20.2323V4.99707H2.01112V20.2323C2.01112 21.751 3.36866 23.0002 5.02788 23.0002H12.972C14.6312 23.0002 15.9888 21.751 15.9888 20.2323V4.99707H13.9776Z"
        fill="#FF0063"
      />
      <Path d="M11.9916 1.86155V0H6.05866V1.86155H0V3.6986H18V1.86155H11.9916Z" fill="#FF0063" />
    </Svg>
  );
});
