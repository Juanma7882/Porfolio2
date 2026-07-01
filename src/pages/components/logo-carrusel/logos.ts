import { technologyIcons } from '../../../data/icons';

export interface LogoItem {
  name: string;
  colors: string[];
  svg: string;
}

const CAROUSEL_NAMES = ['CSS3', 'HTML', 'React', 'Angular', 'Tailwind', 'GitHub', 'JavaScript', 'Docker', 'C#'];

export const LOGOS: LogoItem[] = CAROUSEL_NAMES
  .map(name => technologyIcons.find(t => t.nombre === name))
  .filter((t): t is NonNullable<typeof t> & { svg: string; colors: string[] } =>
    t !== undefined && t.svg !== undefined && t.colors !== undefined
  )
  .map(t => ({ name: t.nombre, colors: t.colors, svg: t.svg }));
