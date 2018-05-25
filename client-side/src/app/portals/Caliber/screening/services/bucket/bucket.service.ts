import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bucket } from '../../entities/bucket';
import { BUCKETS } from '../../mock-data/mock-buckets';
import { UrlUtilService } from '../UrlUtil/url-util.service';

/**
 * Gets / Sets the buckets necessary for conducting the interview.
 * The buckets are chosen when the screener selects
 * tags to interview on upon reviewing the candidate's introduction.
 * Last modified by the Avengers
 *
 * Last Modified from Hydra -> Gambit
 *
 * Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 *
 * Danny S Chhunn | 1803-USF-MAR26 | Wezley Singleton
 *
 * Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 *
 * Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 */
@Injectable()
export class BucketService {

  /**
   * Last Modified by the Avengers to make endpoint more consistent
   * through out application by adding a forward slash to the end
   * of bucket.
   */
  private ROOT_URL: string = this.urlUtilService.getBase() + 'bucket/';

  /**
   * buckets necessary for conducting screening interview
   * the buckets contained in filteredBuckets are based on the
   * skills selected from the candidates skills.
   */
  private filteredBuckets: Bucket[];
  private allBuckets: Bucket[];
  headers = new HttpHeaders({
    'Content-type': 'application/json'
  });

  constructor(private httpClient: HttpClient,
    private urlUtilService: UrlUtilService) { }

  /**
   * Return a mock observable array of buckets (categories)
   */
  getBuckets(): Observable<Bucket[]> {
    return of(BUCKETS);
  }

  /**
   * Set the filteredBuckets array to the input
   * @param buckets
   */
  setBuckets(buckets: Bucket[]): void {
    this.filteredBuckets = buckets;
  }
}
