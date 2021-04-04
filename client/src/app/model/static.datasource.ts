import { Injectable } from '@angular/core';
import{ Incident } from './incident.model';
import { from, Observable } from 'rxjs';


@Injectable()
export class StaticDataSource
{
    private incidents: Incident[] =
[
new Incident(1, 'Incident 1', 'Customer 1','Recordnumber 1','Shortdescription 1','High' ),
new Incident(2, 'Incident 2', 'Customer 2','Recordnumber 2','Shortdescription 2','High' ),
new Incident(3, 'Incident 3', 'Customer 3','Recordnumber 3','Shortdescription 3','Low' ),
new Incident(4, 'Incident 4', 'Customer 4','Recordnumber 4','Shortdescription 4','High' ),
new Incident(5, 'Incident 5', 'Customer 5','Recordnumber 5','Shortdescription 5','High' ),
new Incident(6, 'Incident 6', 'Customer 6','Recordnumber 6','Shortdescription 6','High' ),
new Incident(7, 'Incident 7', 'Customer 7','Recordnumber 7','Shortdescription 7','Low' ),
new Incident(8, 'Incident 8', 'Customer 8','Recordnumber 8','Shortdescription 8','High' ),
new Incident(9, 'Incident 9', 'Customer 9','Recordnumber 9','Shortdescription 9','High' ),
new Incident(10, 'Incident 10', 'Customer 10','Recordnumber 10','Shortdescription 10','High' ),
new Incident(11, 'Incident 11', 'Customer 11','Recordnumber 11','Shortdescription 11','High' ),
new Incident(12, 'Incident 12', 'Customer 12','Recordnumber 12','Shortdescription 12','High' ),

 ];
 getIncidents(): Observable<Incident[]>
  {
    return from([this.incidents]);
  }
}
