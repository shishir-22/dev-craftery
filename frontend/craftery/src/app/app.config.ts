import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable()
export class AppConfig implements OnDestroy {

  public config: any = {}; // Annotate with any for flexibility

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.config;
  }

  getConfigByKey(key: string) {
    return this.config[key];
  }

  load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const envSubscription = this.http.get('./assets/env/env.json').subscribe(
        (envResponse: any) => {
          const env = envResponse['env'];
          if (env === 'development' || env === 'default') {
            const configUrl = `./assets/env/env.${env}.json`;
            const configSubscription = this.http.get(configUrl).subscribe(
              (configResponse: any) => {
                this.config = configResponse;
                resolve(true);
                configSubscription.unsubscribe();
              },
              error => {
                console.error(`Error loading config file: ${configUrl}`, error);
                reject(error);
                configSubscription.unsubscribe();
              }
            );
          } else {
            console.error(`Unsupported environment: ${env}`);
            reject(`Unsupported environment: ${env}`);
          }
          envSubscription.unsubscribe();
        },
        error => {
          console.error('Error loading env file', error);
          reject(error);
        }
      );
    });
  }

  ngOnDestroy() {
    // Clean up any subscriptions if needed
  }
}
