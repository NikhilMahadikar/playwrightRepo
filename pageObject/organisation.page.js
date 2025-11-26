export class CRMLoginPage{
      /**
   * @param {import('playwright').Page} page
   */
  constructor (page){
      this.page=page
      this.userName=page.locator('//input[@name="user_name"]');
      this.password=page.locator('//input[@name="user_password"]');
      this.loginButtion=page.locator('//input[@id="submitButton"]');
      this.organizations=page.getByRole("link",{name:"Organizations"});
      this.newOrganisation=page.getByAltText("Create Organization...");
      this.orgName=page.locator('//input[@name="accountname"]');
  } 

  async userCredentials(uName,pass){
    await this.userName.fill(uName);
    await this.password.fill(pass);
    await this.loginButtion.click();
  }

  async organizationsTabOpen(){
    await this.organizations.click();
  }
  async createNewOrganisation(){
    await this.newOrganisation.click();
  }
  async fillTheForm(oName,website,Phone,tickerSymbol,faxMemberOf,otherPhone,employees,email,otherEmail,ownership,industry,rating,type,sICCode,annualRevenue,assignedTo,addressInformation,shippingAddress,billingAddress,billingPOBox,shippingPOBox,billingCity,shippingCity,billingState,shippingState,billingPostalCode,shippingPostalCode,billingCountry,shippingCountry,description){
    await this.orgName.fill(oName);
    // await this.orgWebsite.fill(website);
    
  }
}