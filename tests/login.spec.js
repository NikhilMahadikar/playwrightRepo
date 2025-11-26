import {test,expect} from "@playwright/test"
import { CRMLoginPage } from '../pageObject/login.page.js'
import data from "../testData/testData.json"


test (`"Test automation for VTiger Login @highPr`,async ({page})=>{
     await page.goto(data.gotoUrl);
    let crmPage=new CRMLoginPage(page);
   await crmPage.userCredentials(data.loginCredentials.userName,data.loginCredentials.password)
});