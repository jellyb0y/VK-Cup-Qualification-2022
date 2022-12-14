import classnames from 'classnames';

import { ButtonMode, ContentAlign } from './types';

import S from './Button.scss';

import type { ButtonProps } from './types';
import type { FC } from 'react';

const Button: FC<ButtonProps> = ({
  onClick,
  mode = ButtonMode.Transparent,
  contentAlign = ContentAlign.Left,
  children,
  stretch,
  selected,
  className,
}) => {
  const rootCn = classnames(
    S.root,
    S[`contentAlign_${contentAlign}`],
    {
      [S.primary]: mode === ButtonMode.Primary,
      [S.stretch]: stretch,
      [S.selected]: selected,
    },
    className,
  );

  return (
    <div onClick={onClick} className={rootCn}>
      {children}
    </div>
  );
};

export default Button;
