require('chromedriver');
const { By } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
const assert = require('assert');
const { title } = require('process');
var should=require('chai').should();
var capability=require('../capability').capability

describe("Test Case - 2",()=>{

    var driver;

    const user=capability['LT:Options'].username;
    const Key=capability['LT:Options'].accessKey;
    const host="hub.lambdatest.com/wd/hub";
    const url="https://"+user+":"+Key+"@"+host;

    beforeEach(()=>{
        capability.name=this.title;
        driver = new webdriver.Builder().usingServer(url).withCapabilities(capability).build();
    })
    afterEach(async()=>{
        await driver.quit();
    })

    it("Text is equal.",async()=>{
        // var driver =await new webdriver.Builder().forBrowser('chrome').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/')
        await driver.findElement(By.id("sampletodotext")).sendKeys("Say hii to akil",webdriver.Key.RETURN)
        let text= await driver.findElement(By.xpath("//li[last()]")).getText().then((res)=>{
            return res
        })
       // assert.strictEqual(text,"hii to akil")
       text.should.equal("Say hii to akil");
       //driver.get("D:\\seleniam\\mochawesome-report\\mochawesome.html")
       // await driver.quit()
        
    })
})

// const ex = async()=>{
// }
// ex()