import { App } from '@lib'
import { App as AppGenerator } from '@seagull/code-generators'
import 'chai/register-should'
import { skip, slow, suite, test, timeout } from 'mocha-typescript'
import Test from '../helper/functional_test'

@suite('App')
class FunctionalTest extends Test {
  before() {
    this.mockFolder('./tmp')
  }

  after() {
    this.restoreFolder()
  }

  @test
  'can be instantiated'() {
    const rootPath = './tmp'
    const appPath = `./tmp/demo`
    new AppGenerator('demo', '0.1.0').toFolder(appPath)
    const app = new App(appPath)
    app.should.be.an('object')
    app.should.be.instanceOf(App)
    app.backend.should.be.an('object')
    app.frontend.should.be.an('object')
    app.meta.should.be.an('object')
  }
}
