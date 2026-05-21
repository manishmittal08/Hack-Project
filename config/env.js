import path from 'path';

export const ENV = {
    BASE_URL: 'https://www.justdial.com/',
    DEFAULT_TIMEOUT: 5000,
    LONG_TIMEOUT: 30000,
    USER_DATA_DIR: path.join(process.cwd(), 'jd_reliable_session'),
    // Force coordinates matching your test design criteria
    GEOLOCATION: { latitude: 19.0760, longitude: 72.8777 }, 
    PERMISSIONS: ['geolocation']
};