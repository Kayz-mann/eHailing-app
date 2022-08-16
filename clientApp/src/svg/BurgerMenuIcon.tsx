import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BurgerMenuIcon = (props: SvgProps) => (
  <Svg {...props} width={24} height={24} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.948 6h16.104c.521 0 .948.427.948.949v.102a.952.952 0 0 1-.948.949H3.948A.95.95 0 0 1 3 7.051v-.102A.95.95 0 0 1 3.948 6Zm16.104 5H3.948a.95.95 0 0 0-.948.949v.102a.95.95 0 0 0 .948.949h16.104a.952.952 0 0 0 .948-.949v-.102a.952.952 0 0 0-.948-.949Zm0 5H3.948a.95.95 0 0 0-.948.949v.102a.95.95 0 0 0 .948.949h16.104a.952.952 0 0 0 .948-.949v-.102a.952.952 0 0 0-.948-.949Z"
      fill="#636366"
    />
  </Svg>
);

export default BurgerMenuIcon;
