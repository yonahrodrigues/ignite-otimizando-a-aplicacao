import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

function ButtonBase({ iconName, title, selected, ...rest }: ButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonBase, (prevProps, nextProps) => {
  return Object.is(prevProps.title, nextProps.title) && 
         Object.is(prevProps.iconName, nextProps.iconName) && 
        Object.is(prevProps.selected, nextProps.selected);
})