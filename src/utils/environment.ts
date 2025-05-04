/**
 * Check if the app is running in development mode
 */
export const isDev = (): boolean => {
  return import.meta.env.DEV === true;
};

/**
 * Check if the app is running in studio mode
 * This looks for the --studio flag in process.argv or the ASTRO_STUDIO env variable
 */
export const isStudio = (): boolean => {
  // Check if running with --studio flag
  if (process.argv.includes('--studio')) {
    return true;
  }
  
  return false;
};