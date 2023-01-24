import { memo } from "react";
import { Path, Svg } from "react-native-svg";

import { useLayout } from "~/hooks";

export default memo(() => {
  const { normalize } = useLayout();

  return (
    <Svg width={normalize(24)} height={normalize(18)} viewBox="0 0 24 18">
      <Path
        d="M23.5749 15.8952L14.8596 10.8613L13.6753 12.9664L22.3602 18.0002L24 17.5731L23.5749 15.8952Z"
        fill="#34AA54"
      />
      <Path
        d="M8.66485 2.44065C9.75805 2.44065 10.8209 2.71523 11.7623 3.26438C14.7382 4.97284 15.7707 8.81687 14.0398 11.8067C12.9162 13.7287 10.8513 14.949 8.63449 14.949C7.54129 14.949 6.47845 14.6744 5.53708 14.1253C2.56114 12.4168 1.52867 8.5728 3.25957 5.58299C4.38314 3.63047 6.44808 2.44065 8.66485 2.44065ZM8.66485 0C5.65854 0 2.7737 1.55591 1.16426 4.36267C-1.23472 8.51178 0.192523 13.8507 4.35277 16.2304C5.71927 17.0236 7.20725 17.3897 8.66485 17.3897C11.6712 17.3897 14.556 15.8338 16.1654 13.027C18.5644 8.87788 17.1372 3.53895 12.9769 1.15931C11.6408 0.366095 10.1528 0 8.66485 0Z"
        fill="#34AA54"
      />
    </Svg>
  );
});
