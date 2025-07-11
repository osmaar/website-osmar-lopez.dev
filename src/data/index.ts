export const SITE_TITLE = 'Espacio de Osmar López';
export const SITE_DESCRIPTION = 'Osmar López desarrollador full stack.';

export interface MenuItem {
  label: string;
  url?: string;
  external?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    label: 'osmi-dev',
    url: '/',
  },
  {
    label: 'portafolio',
    url: 'https://cv.osmar-lopez.dev',
    external: true,
  },
  {
    label: 'freelance',
    url: '/freelance',
  },
];

export const title = 'Espacio de Osmar López';
export const description = 'Osmar López desarrollador full stack.';
export const image = '/images/ogimage.png';
export const url = 'https://osmar-lopez.dev';

export const ogImage = {
  src: '/images/ogimage.png',
  alt: 'Osmar Space',
};

export const products = [
  {
    name: 'Fli.so',
    url: 'https://fli.so',
    image: '/products/fli.png',
  },
  {
    name: 'Uiino',
    url: 'https://uiino.com',
    image: '/products/uiino.png',
  },
  {
    name: 'SticAI',
    url: 'https://sticai.com',
    image: '/products/sticai.png',
  },
  {
    name: 'Dun',
    url: 'https://dunsuite.com',
    image: '/products/dun.png',
  },
  {
    name: 'DunTasks',
    url: 'https://duntasks.com',
    image: '/products/duntasks.png',
  },
];

export const socialLinks = [
  {
    label: 'email',
    url: 'mailto:contacto@osmar-lopez.dev',
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@Est-Funny',
  },
  {
    label: 'github',
    url: 'https://github.com/osmaar',
  },
  {
    label: 'linkedin',
    url: 'https://www.linkedin.com/in/osmi-developer/',
  },
];
