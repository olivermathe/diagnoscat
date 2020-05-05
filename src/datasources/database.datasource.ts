import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
  ValueOrPromise,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import config from './database.datasource.config.json';

@lifeCycleObserver('datasource')
export class DatabaseDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'database';

  constructor(
    @inject('datasources.config.database', {optional: true})
    dsConfig: any = config,
  ) {
    dsConfig.host = process.env.DB_HOST ?? dsConfig.host
    dsConfig.user = process.env.DB_USER ?? dsConfig.user
    dsConfig.password = process.env.DB_PASS ?? dsConfig.password
    dsConfig.database = process.env.DB_NAME ?? dsConfig.database
    dsConfig.url = `${dsConfig.connector}://${dsConfig.user}:${dsConfig.password}@${dsConfig.host}/${dsConfig.database}`
    super(dsConfig);
  }

  /**
   * Start the datasource when application is started
   */
  start(): ValueOrPromise<void> {
    // Add your logic here to be invoked when the application is started
  }

  /**
   * Disconnect the datasource when application is stopped. This allows the
   * application to be shut down gracefully.
   */
  stop(): ValueOrPromise<void> {
    return super.disconnect();
  }
}
