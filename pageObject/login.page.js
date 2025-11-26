export class CRMLoginPage{
      /**
   * @param {import('playwright').Page} page
   */
  constructor (page){
      this.page=page
      this.userName=page.locator('//input[@name="user_name"]');
      this.password=page.locator('//input[@name="user_password"]');
      this.loginButtion=page.locator('//input[@id="submitButton"]');
  } 

  async userCredentials(uName,pass){
    await this.userName.fill(uName);
    await this.password.fill(pass);
    await this.loginButtion.click();
  }
}