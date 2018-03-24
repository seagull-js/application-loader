import { join } from 'path'
import Folder from './abstract/folder'
import Backend from './backend/backend'
import Frontend from './frontend/frontend'
import Account from './services/account'

/**
 * This file represents the state of a seagull application, which files
 * exist in which folders, and so on. There are nested properties representing
 * specific features, mirroring the folder paths where seagull expects files
 * to be.
 */
export default class App extends Folder {
  /**
   * grouped features and components for the backend part (AWS). Must
   * be located at `${rootPath}/backend`
   */
  backend: Backend

  /**
   * grouped features and componentes for the frontend part (React). Must
   * be located at `${rootPath}/frontend`
   */
  frontend: Frontend

  /**
   * precise [[Account]] metadata useful for deployment
   */
  account: Account

  /**
   * Create an instance of the seagull app located at the given path.
   *
   * @param rootPath path to the app folder
   */
  constructor(rootPath = process.cwd()) {
    super(rootPath || process.cwd())
    this.account = new Account()
    this.backend = new Backend(join(rootPath, 'backend'))
    this.frontend = new Frontend(join(rootPath, 'frontend'))
  }
}
