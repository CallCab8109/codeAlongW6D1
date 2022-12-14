 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  test('identitive property', () => {
    expect(2).toBe(2)
  })

  test('first name should be Patten', () => {
    expect(testData.firstName).toBe("Patten")
  })

describe('formatTitle', () => {

  })

//   test('formats title with individual words capitalized', () => {
//       expect(formatTitle(testData.title)).toBe('Nulla Ac')
//       expect(formatTitle('hi There luke!')).toBe('Hi There Luke!')
//   })
// })

describe('shortenBio', () => {
   test('returns a string', () => {
    expect(typeof formatTitle(testData.bio)).toBe('string')
   })

   test('returns a shorter string than the original where bio is long', () => {
    expect(shortenBio(testData.bio).length).toBeLessThan(testData.bio.length)
   })

   test('returns a string that has "About the speaker" inside of it', () => {
    expect(shortenBio(testData.bio)).toContain('About the Speaker')
   })
})