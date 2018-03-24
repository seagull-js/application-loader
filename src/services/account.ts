import * as AWS from 'aws-sdk'

/**
 * The Account loads itself from various possible sources. If nothing given,
 * it will use the AWS profile 'default' and loads the credentials from your
 * `~/.aws/credentials` file.
 */
export default class Account {
  /**
   * the AWS profile name, defaults to `'default'`
   */
  profile: string

  /**
   * the resulting aws credentials data object
   */
  credentials: AWS.SharedIniFileCredentials

  /**
   * checks whether the currently loaded account configuration can be used
   * for deployment, ... .
   */
  isValid: boolean = false

  /**
   * get an [[Account]] instance with the given profile.
   *
   * @param profile if not given, uses `'AWS_PROFILE'` env setting or 'default'
   */
  constructor(profile?: string) {
    this.profile = profile || process.env.AWS_PROFILE || 'default'
    this.loadFromDotFile()
    this.setEnvironmentConfiguration()
    this.isValid = !!this.credentials.accessKeyId
  }

  // use the AWS SDK to load the file and parse it automatically
  private loadFromDotFile() {
    const config = { profile: this.profile }
    this.credentials = new AWS.SharedIniFileCredentials(config)
  }

  // set ENV variables correctly, overriding existing ones
  private setEnvironmentConfiguration(): void {
    AWS.config.credentials = this.credentials
    process.env.AWS_PROFILE = this.profile
  }
}
