export const isDev = (): boolean => {
  return import.meta.env.DEV === true;
};

export const isStudio = (): boolean => {
  return process.argv.includes('--studio');
};