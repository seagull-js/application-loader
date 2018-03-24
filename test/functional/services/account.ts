import { Account } from '@lib'
import 'chai/register-should'
import * as fs from 'fs'
import { skip, slow, suite, test, timeout } from 'mocha-typescript'
import FunctionalTest from '../../helper/functional_test'

@suite('Account')
class Test extends FunctionalTest {
  after() {
    delete process.env.AWS_PROFILE
    this.restoreFolder()
  }

  @test
  'can be loaded with defaults'() {
    this.mockCredentials('default')
    const account = new Account()
    account.should.be.an('object')
    account.isValid.should.be.equal(true)
    account.profile.should.be.equal('default')
    account.credentials.accessKeyId.should.be.a('string')
    account.credentials.secretAccessKey.should.be.a('string')
  }

  @test
  'can be loaded with named profile'() {
    this.mockCredentials('dude')
    const account = new Account('dude')
    account.should.be.an('object')
    account.isValid.should.be.equal(true)
    account.profile.should.be.equal('dude')
    account.credentials.accessKeyId.should.be.a('string')
    account.credentials.secretAccessKey.should.be.a('string')
  }

  @test
  'profile can be set from environment variable'() {
    this.mockCredentials('dude')
    process.env.AWS_PROFILE = 'dude'
    const account = new Account()
    account.should.be.an('object')
    account.isValid.should.be.equal(true)
    account.profile.should.be.equal('dude')
    account.credentials.accessKeyId.should.be.a('string')
    account.credentials.secretAccessKey.should.be.a('string')
  }

  @test
  'can handle missing config file'() {
    this.mockFolder('~/.aws')
    const account = new Account()
    account.should.be.an('object')
    account.isValid.should.be.equal(false)
    account.profile.should.be.equal('default')
  }
}
