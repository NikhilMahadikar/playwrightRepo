import { test, expect} from "@playwright/test";
import { CRMLoginPage } from "../pageObject/organisation.page";
import data from "../testData/testData.json";

test.describe("whole test", async () => {

    test.describe.configure({mode:'serial'})
    /** @type {import('@playwright/test').Page} */
        let page;
    test.beforeAll(async({browser})=>{
        page = await browser.newPage();
    })

  
  test(`"Test automation for VTiger Login @highPri`, async () => {
    await page.goto(data.gotoUrl);
    let crmPage = new CRMLoginPage(page);
    await crmPage.userCredentials(
      data.loginCredentials.userName,
      data.loginCredentials.password
    );
    await crmPage.organizationsTabOpen();
    await crmPage.createNewOrganisation();
  });

  test(`VTiger Form FillUp`, async () => {
    let crmPage = new CRMLoginPage(page);
    await crmPage.fillTheForm(
      data["Organization Information"][0].organizationName
    );
    await page.pause();
  });
})
