const listHelper = require('../utils/list_helper')

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }
]

// 4.3: apufunktioita ja yksikkötestejä, step1
describe('dummy', () => {
  test('returns one', () => {
    expect(listHelper.dummy([])).toBe(1)
  })
})

// 4.4: apufunktioita ja yksikkötestejä, step2
describe('total likes', () => {

  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('when list has only one blog equals likes of that', () => {
    expect(listHelper.totalLikes([blogs[0]])).toBe(7)
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.totalLikes(blogs)).toBe(36)
  })
})

// 4.5*: apufunktioita ja yksikkötestejä, step3
describe('favourite blog', () => {

  test('of empty list is empty', () => {
    expect(listHelper.favouriteBlog([])).toEqual('')
  })

  test('of a bigger list is selected right', () => {
    const expt = {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    }
    expect(listHelper.favouriteBlog(blogs)).toEqual(expt)
  })
})

// 4.6*: apufunktioita ja yksikkötestejä, step4
describe('most blogs', () => {

  test('of empty list is empty', () => {
    expect(listHelper.favouriteBlog([])).toEqual('')
  })

  test('of a bigger list is selected right', () => {
    const expt = {
      author: 'Robert C. Martin',
      blogs: 3
    }
    expect(listHelper.mostBlogs(blogs)).toEqual(expt)
  })
})

// 4.7*: apufunktioita ja yksikkötestejä, step5
describe('most likes', () => {

  test('of empty list is empty', () => {
    expect(listHelper.mostLikes([])).toEqual('')
  })

  test('of a bigger list is selected right', () => {
    const expt = {
      author: 'Edsger W. Dijkstra',
      likes: 17
    }
    expect(listHelper.mostLikes(blogs)).toEqual(expt)
  })
})