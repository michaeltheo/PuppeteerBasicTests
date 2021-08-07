// achive access in everything inside puppetter package
const puppeteer = require('puppeteer')
//import chai expect assertion
const expect = require('chai').expect

describe('First Puppeteer Test', () => {
	it('should open browser', async function () {
		// headless false always open physical browser
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 1,
			devtools: false,
		})
		// get text
		const page = await browser.newPage()

		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)

		await page.goto('https://example.com')
		//find by Xpath
		await page.waitForXPath('/html/body/div/h1')
		const title = await page.title()
		const url = await page.url()
		const text = await page.$eval('h1', element => element.textContent)
		const count = await page.$$eval('p', el => el.length)

		expect(title).to.be.a('string', 'Example Domain')
		expect(url).to.include('example.com')
		expect(text).to.be.a('string', 'Example Domain')
		expect(count).to.equal(2)

		await page.goto('http://zero.webappsecurity.com/')
		await page.waitForSelector('#searchTerm')
		await page.type('#searchTerm', 'FreeMikeWasHere')
		await page.keyboard.press('Enter', { delay: 5 })
		await page.waitForTimeout(5000)

		//always close browser after script
		await browser.close()
	})
})

// //visit url
// await page.goto('https://example.com/')
// //put a pause for 3 sec
// await page.waitForTimeout(3000)

// //find element h1 return true
// await page.waitForSelector('h1')

// //Reload browser
// await page.reload()
// await page.waitForTimeout(3000)
// await page.waitForSelector('h1')

//input type
//await page.type()

//Some stuff
// const page = await browser.newPage()
// 		await page.goto('https://devexpress.github.io/testcafe/example/')

// 		await page.type('#developer-name', 'FreeMike')
// 		//check button
// 		await page.click('#tried-test-cafe', { clickCount: 1 })

// 		//dropdown Menu id,value
// 		await page.select('#preferred-interface', 'JavaScript API')

// 		//text-area
// 		const message = 'this comment was filled by an Automation Tool'
// 		await page.type('#comments', message)

// 		await page.click('#submit-button')

//Title Url
// //extract and store value
// await page.goto('https://example.com/')
// const title = await page.title()
// const url = await page.url()

// console.log(title)
// console.log(url)

// get text
// const page = await browser.newPage()
// await page.goto('https://example.com')
// const text = await page.$eval('h1', element => element.textContent)
// console.log('text in text1 ' + text)

// find all the <p> tags in the page and return the number
// const count = await page.$$eval('p', el => el.length)

//Assertion
//import chai expect assertion
// const expect = require('chai').expect
// const page = await browser.newPage()
// 		await page.goto('https://example.com')
// 		const title = await page.title()
// 		const url = await page.url()
// 		const text = await page.$eval('h1', element => element.textContent)
// 		const count = await page.$$eval('p', el => el.length)

// 		expect(title).to.be.a('string', 'Example Domain')
// 		expect(url).to.include('example.com')
// 		expect(text).to.be.a('string', 'Example Domain')
// 		expect(count).to.equal(3)
