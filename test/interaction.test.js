import { filterTitle } from '../js/interaction.js';


describe("Filter function", () => {

    test("it should filter by a search term (a)", () => {
        const input = [
            { title: 'fast and furious', description: "https://www.url1.dev" },
            { title: 'oooooo', description: "https://www.url2.dev" },
            { title: 'eeeeeee', description: "https://www.link3.dev" }
        ];
        const text = 'a';
        const output = [{ title: 'fast and furious', description: "https://www.url1.dev" }];
        expect(filterTitle(input, text)).toEqual(output);
    });
});

