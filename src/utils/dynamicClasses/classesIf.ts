import css from '../tailwindCssBuilder/tailwindCssBuilder';

const classesIf = (condition: boolean, ...classNames: string[]): string => {
  if (condition) {
    return css(...classNames);
  }
  return '';
};

export default classesIf;
