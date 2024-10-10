function getPlatformSelector(selector) {
    const platform = browser.capabilities.platformName;

    if (platform === 'Android') {
        return selector;
    } else if (platform === 'iOS') {
        return selector;
    } else {
        throw new Error(`Plataforma desconhecida: ${platform}`);
    }
}
module.exports = getPlatformSelector;