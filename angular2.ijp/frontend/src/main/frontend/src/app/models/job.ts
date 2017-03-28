import { Category } from "app/category";
import { Team } from "app/team";
import { Employee } from "app/employee";

export interface Job {
    jId:number;
    category:Category;
    team:Team;
    postedBy:Employee;
    description:string;
    recruited:Employee;
    postedOn:string;
}