export class Incident
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public name?: string,
    public customer?: string,
    public recordnumber?: string,
    public description?: string,
    public priority?: string
  ){}
}
