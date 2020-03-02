import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export const API = publicRuntimeConfig.PRODUCTION 
    ? 'https://seoblog.com' 
    : 'http://localhost:8000/api';
export const APP_NAME = publicRuntimeConfig.APP_NAME;

// ============================== ABOVE IS ORIGINAL WORKING CONTENT

// export const API = publicRuntimeConfig.PRODUCTION 
//     ? publicRuntimeConfig.API_PRODUCTION 
//     : publicRuntimeConfig.DEVELOPMENT;

// export const APP_NAME = publicRuntimeConfig.APP_NAME;

// export const DOMAIN = publicRuntimeConfig.PRODUCTION 
// ? publicRuntimeConfig.DOMAIN_DEVELOPMENT 
// : publicRuntimeConfig.DOMAIN_PRODUCTION;
