import age from '../src/main'

describe('new tests', () => {
  describe('common cases', () => {
    test('string', () => {
      expect(age('2017-05-06', '2018-05-05')).toBe(0)
      expect(age('2017-05-05', '2018-05-05')).toBe(1)
      expect(age('2016-06-05', '2018-05-05')).toBe(1)
      expect(age('2016-06-04', '2018-05-05')).toBe(1)
      expect(age('2016-05-07', '2018-05-05')).toBe(1)
      expect(age('2016-05-06', '2018-05-05')).toBe(1)
      expect(age('2016-05-05', '2018-05-05')).toBe(2)
      expect(age('2016-05-04', '2018-05-05')).toBe(2)
      expect(age('2016-05-03', '2018-05-05')).toBe(2)
      expect(age('2016-04-05', '2018-05-05')).toBe(2)
    })

    test('date', () => {
      expect(age(new Date('2017-05-06'), '2018-05-05')).toBe(0)
      expect(age(new Date('2017-05-05'), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-06-05'), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-06-04'), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-05-07'), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-05-06'), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-05-05'), '2018-05-05')).toBe(2)
      expect(age(new Date('2016-05-04'), '2018-05-05')).toBe(2)
      expect(age(new Date('2016-05-03'), '2018-05-05')).toBe(2)
      expect(age(new Date('2016-04-05'), '2018-05-05')).toBe(2)
    })

    test('number', () => {
      expect(age(new Date('2017-05-06').valueOf(), '2018-05-05')).toBe(0)
      expect(age(new Date('2017-05-05').valueOf(), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-06-05').valueOf(), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-06-04').valueOf(), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-05-07').valueOf(), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-05-06').valueOf(), '2018-05-05')).toBe(1)
      expect(age(new Date('2016-05-05').valueOf(), '2018-05-05')).toBe(2)
      expect(age(new Date('2016-05-04').valueOf(), '2018-05-05')).toBe(2)
      expect(age(new Date('2016-05-03').valueOf(), '2018-05-05')).toBe(2)
      expect(age(new Date('2016-04-05').valueOf(), '2018-05-05')).toBe(2)
    })
  })
})

describe('the original tests', () => {
  // years since Aug 26, 2015 (when this was made)
  const fix = age(1440629663548)

  test('should accept Dates', () => {
    const now      = new Date()
    const lastYear = new Date(String(now.getFullYear() - 1))
    expect(age(now)).toBe(0)
    expect(age(lastYear)).toBe(1)
  })


  test('should accept dateStrings', () => {
    expect(age('Aug 3 2012')).toBe(fix + 3)
  })

  test('should accept timestamps', () => {
    expect(age(1343977200000)).toBe(fix + 3) // same as aug 3 2012
  })
})
