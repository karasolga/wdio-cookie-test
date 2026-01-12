import { browser, expect } from '@wdio/globals';

describe('tests cookies', () => {
    it('should successfully retrieve all session cookies after page load', async () => {
        await browser.url('https://github.com');
        const wdCookieValue = (await browser.getCookies());
        console.log(`Webdriver sees Secure Cookie: ${wdCookieValue}`);
        expect(wdCookieValue).not.toHaveLength(0);
    });
});


