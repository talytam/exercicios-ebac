import TabBar from '../screenobjects/components/TabBar.js';
import LoginScreen from '../screenobjects/LoginScreen.js';
import NativeAlert from '../screenobjects/components/NativeAlert.js';

describe('Módulo 17 - Automação de Login Android', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('deve realizar login com sucesso', async () => {
        await LoginScreen.tapOnLoginContainerButton();

        await LoginScreen.submitLoginForm({
            username: 'test@webdriver.io',
            password: 'Test1234!'
        });

        await NativeAlert.waitForIsShown();

        await expect(
            await NativeAlert.text()
        ).toContain('Success');

        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
});