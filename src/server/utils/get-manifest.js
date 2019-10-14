import fs from 'fs'

export const getManifest = () => {
    let file
    try {
        file = JSON.parse(fs.readFileSync(`${__dirname}/../public/manifest.json`, 'utf8'))
    } catch (error) {
        console.log(error)
    }
    return file
}
