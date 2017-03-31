export class Meal{
constructor(public name: string, public details: string, public calories: number, public date:number){}

//add values to extrapolate date information into readable info (month, day)
public d = new Date(this.date)
public displayTime=this.d.getMonth()+1 + "/" + this.d.getDay() + " at " + this.d.getHours() + ":" + this.d.getMinutes();
}
