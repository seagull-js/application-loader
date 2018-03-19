import { AWS, Resource } from 'cloudformation-declarations'
import { join } from 'path'
import { Memoize } from 'typescript-memoize'
import Folder from '../abstract/folder'
import { default as Apis, ILambdaEvent, ILambdaFunction } from './apis'
import Shrimps from './shrimps'

/**
 * Grouping together files & features of the "Backend" section of a seagull
 * app. Is responsible for APIs and Data.
 */
export default class Backend extends Folder {
  /**
   * list of all [[Apis]]
   */
  apis: Apis

  /**
   * list of all [[Shrimps]]
   */
  shrimps: Shrimps

  /**
   * Create a new backend folder.
   *
   * @param rootPath path to the backend folder
   */
  constructor(rootPath: string) {
    super(rootPath)
    this.shrimps = new Shrimps(join(rootPath, 'shrimps'))
    this.apis = new Apis(join(rootPath, 'api'))
  }

  /**
   * Accessor for the combined serverless template data of all backend features.
   * Can be merged with other templates.
   */
  @Memoize()
  get serverlessTemplate() {
    const functions = this.apis.functions
    const resources = { Resources: this.shrimps.resources }
    return { functions, resources }
  }
}
