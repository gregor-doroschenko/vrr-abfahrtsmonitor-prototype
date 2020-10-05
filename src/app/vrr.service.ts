import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VrrService {

  testFormData = 'table%5Bdeparture%5D%5BstationId%5D=20016074&table%5Bdeparture%5D%5BstationName%5D=Duisburg%2C+M%C3%BCnchener+Stra%C3%9Fe&table%5Bdeparture%5D%5BplatformVisibility%5D=0&table%5Bdeparture%5D%5Btransport%5D=3%2C4&table%5Bdeparture%5D%5BuseAllLines%5D=1&table%5Bdeparture%5D%5BlinesFilter%5D=&table%5Bdeparture%5D%5BoptimizedForStation%5D=0&table%5Bdeparture%5D%5BrowCount%5D=6&table%5Bdeparture%5D%5BrefreshInterval%5D=60&table%5Bdeparture%5D%5Bdistance%5D=0&table%5Bdeparture%5D%5Bmarquee%5D=0&table%5BsortBy%5D=0';

  formDataProps = [
    "table[departure][stationId]=20016074",
    "table[departure][stationName]=Duisburg%2C+Münchener+Straße",
    "table[departure][platformVisibility]=0",
    "table[departure][transport]=3%2C4",
    "table[departure][useAllLines]=1",
    "table[departure][linesFilter]=",
    "table[departure][optimizedForStation]=0",
    "table[departure][rowCount]=6",
    "table[departure][refreshInterval]=60",
    "table[departure][distance]=0",
    "table[departure][marquee]=0",
    "table[sortBy]=0"
]

  url = 'https://cors.bublik.rocks/https://abfahrtsmonitor.vrr.de/backend/api/stations/table'

  constructor(private http: HttpClient) { }

  getTable(): Observable<any> {
    let formData = new FormData();
    formData.append('table[departure][stationId]', '20016074');
    formData.append('table[departure][stationName]', 'Duisburg, Münchener Straße');
    formData.append('table[departure][platformVisibility]', '0');
    formData.append('table[departure][transport]', '3');
    formData.append('table[departure][useAllLines]', '1');
    formData.append('table[departure][linesFilter]', '');
    formData.append('table[departure][optimizedForStation]', '0');
    formData.append('table[departure][rowCount]', '12');
    formData.append('table[departure][refreshInterval]', '60');
    formData.append('table[departure][distance]', '0');
    formData.append('table[departure][marquee]', '0');
    formData.append('table[sortBy]', '0');
    return this.http.post(this.url, formData);
  }

}

