import dotenv from 'dotenv'
import approotpath from 'app-root-path'
export function DotenvConfigs() {
    dotenv.config({
        path : approotpath.resolve("/configs/env/.env")
    })
}