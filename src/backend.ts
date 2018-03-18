import { join } from 'path'
import Folder from './folder'
import Shrimps from './shrimps'

/**
 * Grouping together files & features of the "Backend" section of a seagull
 * app. Is responsible for APIs and Data.
 */
export default class Backend extends Folder {
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
  }
}
