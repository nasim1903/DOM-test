/**
 * @jest-environment jsdom
 */

const fs = require("fs")
const path = require("path")

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"));

describe("index page", () => {
    
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    test("displays title", () =>  {

        const heading = document.getElementById("title");

        expect(heading).toBeTruthy();

        expect(heading.textContent).toEqual("Title");

    })

    test('display three divs', () => {

        const div = document.querySelectorAll("div");

        expect(div).toBeTruthy;

        expect(div.length).toEqual(3);
    });
    

})