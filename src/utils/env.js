import { Platform } from "react-native"

const localHost = 'http://127.0.0.1:5001/mealstogo-c1f28/us-central1'

export const isAndroid = Platform.OS === 'android'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isMock = true
export const host = (isDevelopment || !isAndroid) && localHost