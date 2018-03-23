import * as fs from 'fs'
import * as mockFS from 'mock-fs'

const mockFolder = path => mockFS({ [path]: {} })
const restoreFolder = () => mockFS.restore()

const mockCredentials = (name: string) => {
  process.env.HOME = '~'
  delete process.env.AWS_PROFILE
  mockFolder('~/.aws')
  const lines = [
    `[${name}]`,
    'aws_access_key_id = AKID',
    'aws_secret_access_key = YOUR_SECRET_KEY',
  ]
  fs.writeFileSync('~/.aws/credentials', lines.join('\n'))
}

export default class UnitTest {
  static mockCredentials = mockCredentials
  static mockFolder = mockFolder
  static restoreFolder = restoreFolder

  mockCredentials = mockCredentials
  mockFolder = mockFolder
  restoreFolder = restoreFolder
}
