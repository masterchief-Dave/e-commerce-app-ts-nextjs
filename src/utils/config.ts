export const { JWT_SECRET } = process.env
export const { JWT_EXPIRES } = process.env
export const { MONGODB_URI } = process.env
export const { MONGODB_PASSWORD } = process.env
export const { MONGODB_USERNAME } = process.env
export const { NEXTAUTH_SECRET } = process.env
export const { GOOGLE_CLIENT_ID } = process.env
export const { GOOGLE_CLIENT_SECRET } = process.env
export const { NEXT_PUBLIC_production_server } = process.env
export const { NEXT_PUBLIC_development_server } = process.env
export const BASE_URL = process.env.NODE_ENV === 'development' ? NEXT_PUBLIC_development_server : NEXT_PUBLIC_production_server


