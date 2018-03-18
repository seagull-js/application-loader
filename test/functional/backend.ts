import { Backend } from '@lib'
import 'chai/register-should'
import { skip, slow, suite, test, timeout } from 'mocha-typescript'
import FunctionalTest from '../helper/functional_test'

@suite('Backend')
class Test extends FunctionalTest {
  @test
  'can be instantiated'() {
    const rootPath = '/some/path'
    const backend = new Backend(rootPath)
    backend.should.be.an('object')
    backend.should.be.instanceOf(Backend)
  }

  @test
  'does store rootPath variable after instantiation'() {
    const rootPath = '/some/path'
    const backend = new Backend(rootPath)
    backend.rootPath.should.be.equal(rootPath)
  }

  @test
  'has child components'() {
    const backend = new Backend('/some/path')
    backend.apis.should.be.an('object')
    backend.shrimps.should.be.an('object')
  }
}
