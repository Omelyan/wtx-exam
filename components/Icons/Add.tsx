import { memo } from "react";
import { Path, Svg } from "react-native-svg";

import { useLayout } from "~/hooks";

export default memo(() => {
  const { normalize } = useLayout();

  return (
    <Svg width={normalize(15)} height={normalize(15)} viewBox="0 0 15 15">
      <Path
        d="M15 7.5L13.8189 6.3189L8.68112 6.28937V1.1811L7.50002 0L6.3189 1.1811V6.3189H1.1811L0 7.5L1.1811 8.6811L6.3189 8.65157V13.8189L7.50002 15L8.68112 13.8189V8.6811H13.8189L15 7.5Z"
        fill="#34AA54"
      />
    </Svg>
  );
});
