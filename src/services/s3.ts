import { AWS, Resource } from 'cloudformation-declarations'

export default class S3 {
  constructor(private appName: string, private accountId: string) {}

  get resources(): Resource {
    const res: { [name: string]: AWS.S3.Bucket } = {}
    const bucketName = `${this.appName}-${this.accountId}-assets-bucket`
    return null
  }
}
