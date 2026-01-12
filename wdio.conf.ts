export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './test/tsconfig.json',
    specs: [
        './test/specs/**/*.spec.ts'
    ],
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
            '--disable-extensions',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--no-sandbox',
            '--guest',]
        },
        'wdio:enforceWebDriverClassic': false 
    }],
}
    