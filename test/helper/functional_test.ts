import * as mockFS from 'mock-fs'

const mockFolder = path => mockFS({ [path]: {} })
const restoreFolder = () => mockFS.restore()

export default class UnitTest {
  static mockFolder = mockFolder
  static restoreFolder = restoreFolder

  mockFolder = mockFolder
  restoreFolder = restoreFolder
}
