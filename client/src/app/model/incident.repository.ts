import { Injectable } from '@angular/core';
import { Incident } from './incident.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class IncidentRepository
{
  private incidents: Incident[] = [];
  private customers: string[] = [];

  constructor(private dataSource: StaticDataSource)
  {
    dataSource.getIncidents().subscribe(data => {
      this.incidents = data;
      this.customers = data.map(i => i.customer)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getIncidents(customer: string = null): Incident[]
  {
    return this.incidents
      .filter(b => customer == null || customer === b.customer);
  }

  getIncident(id: number): Incident
  {
    return this.incidents.find(b => b._id === id);
  }

  getcustomers(): string[]
  {
    return this.customers;
  }
}
