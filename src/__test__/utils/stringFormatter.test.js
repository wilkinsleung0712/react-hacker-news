import { formatNumWithComma } from '../../utils/stringFormatter'

describe('stringFormatter', () => {

  describe('formatNumWithComma', () => {
    test('should add one comma to number with more than 3 digits', () => {
      const expectedResult = '111,111'
      const actualResult = formatNumWithComma(111111)
      expect(actualResult).toBe(expectedResult)
    })

    test('should add two commas to number with more than 6 digits', () => {
      const expectedResult = '1,111,111'
      const actualResult = formatNumWithComma(1111111)
      expect(actualResult).toBe(expectedResult)
    })

    test('should NOT add comma to number with less than or equal to 3 digits', () => {
      const expectedResult = '111'
      const actualResult = formatNumWithComma(111)
      expect(actualResult).toBe(expectedResult)
    })
  })

})
