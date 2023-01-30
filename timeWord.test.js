const timeWord = require('./timeWord');

describe('#timeword', () => {

  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test("timeWord to work am with no mins ", () => {
    const time = timeWord("09:00");
    expect(time).toEqual("nine am");
  })

  test("timeWord to work am with mins ", () => {
    const time = timeWord("09:35");
    expect(time).toEqual("nine thirty-five am");
  })

  test("timeWord to work pm with no mins ", () => {
    const time = timeWord("12:00");
    expect(time).toEqual("twelve pm");
  })

  test("timeWord to work pm with mins ", () => {
    const time = timeWord("12:56");
    expect(time).toEqual("twelve fifty-six pm");
  })

  test("timeWord return error msg when invalid time passed in ", () => {
    const time = timeWord("26:75");
    expect(time).toEqual("Need to enter a valid time");
  })

});