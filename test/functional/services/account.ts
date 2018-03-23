import { Account } from '@lib'
import 'chai/register-should'
import * as fs from 'fs'
import { skip, slow, suite, test, timeout } from 'mocha-typescript'
import FunctionalTest from '../../helper/functional_test'

@suite('Account')
class Test extends FunctionalTest {
  after() {
    this.restoreFolder()
  }

  @test
  'can be loaded with defaults'() {
    this.mockCredentials('default')
    const account = new Account()
    account.should.be.an('object')
    account.credentials.accessKeyId.should.be.a('string')
    account.credentials.secretAccessKey.should.be.a('string')
  }
}
