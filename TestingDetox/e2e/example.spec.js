describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });

  it('should be able to enter text', async () => {
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText("Some new text :-)");
  })

  it('tap say goodby when keyboard is up', async () => {
    await element(by.id('textInput')).tap();
    await element(by.id('goodbye_button')).tap();
  })

  it('failed test, not found textInput_2', async () => {
    await element(by.id('textInput_2')).tap();
  })
});
