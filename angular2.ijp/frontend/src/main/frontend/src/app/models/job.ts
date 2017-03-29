import { Category } from "app/models/category";
import { Team } from "app/models/team";
import { Employee } from "app/models/employee";

export interface Job {
    jId:number;
    category:Category;
    team:Team;
    postedBy:Employee;
    description:string;
    recruited:Employee;
    postedOn:string;
}