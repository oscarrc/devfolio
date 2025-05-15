import { isDev, isStudio } from "./utils/environment";

import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const isStudioPath = context.url.pathname.startsWith('/studio');
  
  // In studio mode + dev mode:
  if (isStudio() && isDev()) {
    // If already on a studio path, allow it
    if (isStudioPath) {
      return next();
    }
    
    // If on root path, redirect to studio
    if (context.url.pathname === '/') {
      return Response.redirect(new URL('/studio', context.url), 302);
    }
    
    // If not on studio path, redirect to preview path
    const previewPath = `/preview${context.url.pathname}`;
    return Response.redirect(new URL(previewPath, context.url), 302);
  }
  
  // In production: block access to studio paths
  if (!isDev() && isStudioPath) {
    return new Response("Not found", { status: 404 });
  }
  
  // Otherwise, allow the request to proceed:
  // - In dev mode (any variant): access to all paths
  // - In production: access to non-studio paths
  return next();
});