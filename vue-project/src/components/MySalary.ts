import { reactive, ref } from "vue";

export default function(){
    let salaryInfo = reactive({
        userName:"Hanson",
        salary:15000
    })
    function addSalary(){
        salaryInfo.salary += 1000
    }

    return {salaryInfo, addSalary}
}