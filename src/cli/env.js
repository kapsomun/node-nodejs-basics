import { env } from 'node:process';


const parseEnv = () => {
    const prefix = "RSS_"
    const keys = Object.keys(env).filter(key => key.startsWith(prefix));
    const findedProperties = keys.map(e => {
        console.log(`${e}=${env[e]};`)
    })
    return findedProperties
}

parseEnv();
