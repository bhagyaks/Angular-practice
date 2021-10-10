import { Component, OnInit } from '@angular/core';
import { __assign } from 'tslib';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
    selector: 'fetch-checks',
    templateUrl: './fetchChecks.component.html',
    styleUrls: ['./fetchChecks.component.scss'] 
})
export class FetchChecksComponent implements OnInit{
    fetchData: any;
    dataArray: Array<any> = [];
    length: 0;
    domEles:any;
    constructor( private apiService: ApiService,
        private route: Router){}
    ngOnInit() {
        this.apiService.fetchChecks().then(data => {
            this.fetchData = data;
            this.fetchData.sort((a,b) => a.priority - b.priority);
            for(let i=0;i<this.fetchData.length;i++) {
                this.dataArray[i]={'id': i,'checkId':this.fetchData[i].id, 'value': null};
            }
        });

    }
    /**
   * @param check - check 
   * disables all elements except first div. create data array, to  update yes no button values
   */
    disableElement(check) {
        return check === this.fetchData[0] ? false : true; 
    }
     /**
   * @param event - check 
   * handle thew mouse on click of  yes and no button to enable and disable next and previous children
   */
    handleButton(event) {
        event.target.parentNode.childNodes.forEach(e => {
            e.classList.remove("active");
        });
        event.target.classList.add("active");
        if (event.target) {
            this.dataArray[Number(event.target.parentNode.id)].value = event.target.value;
            if (event.target.value === "Yes") {
                this.enableNextQuestion(Number(event.target.parentNode.id) + 1);
            }
            else {
                this.updateOnNo(Number(event.target.parentNode.id) + 1);
            }
        }
    }
     /**
   * @param check - element id 
   * enable elements and submit button enables/disabled based on yes/no button.
   */
      enableNextQuestion(elementId) {
        if (document.getElementById(elementId)) {
            document.getElementById(elementId).parentElement.classList.remove("disabled");
            for (let i=0;i<this.dataArray.length;i++)
            {
                if(this.dataArray[i].value===null)
                {
                    document.getElementById("app_submit").setAttribute("disabled", "true");
                    break;
                }
            }
        }
        else {
            document.getElementById("app_submit").removeAttribute("disabled");
        }
    }
     /**
   * @param check - element id 
   * disable elements and submit button enables/disabled based on yes/no button.
   */
    updateOnNo(elementId){
        for (let i=elementId;i<this.dataArray.length;i++)
        {
            this.dataArray[i].value=null;
            document.getElementById(i).parentElement.classList.add("disabled");
            (document.getElementById(i).childNodes).forEach(e => {
                (<Element>e).classList.remove("active");
            });
        }
        document.getElementById("app_submit").removeAttribute("disabled");
    }
         /**
   * submit the data and catch error if submission failed
   */
    submitData() {
        let finalData = [];
        for (let i = 0; i < this.dataArray.length; i++) {
            if (this.dataArray[i].value !== null) {
                finalData[i] = { 'checkId': this.dataArray[i].checkId, 'result': this.dataArray[i].value };
            }
        }
        this.apiService.submitCheckResults(finalData).then(() => {
            this.route.navigate(['./success']);
        }).catch(() => alert('Submission Failed!!!!'));
    }
         /**
   * @param event -
   * handles keys press 1 for yes, 2 for no and arrow up and down for movement in checks.
   */
    handleKey(event) {
        if (event.keyCode === 49) {
            event.target.parentNode.childNodes.forEach(e => {
                if (e.id === "yes") {
                    e.click();
                }
            });
        } else if (event.keyCode === 50) {
            event.target.parentNode.childNodes.forEach(e => {
                if (e.id === "no") {
                    e.click();
                }
            });
        } else if (event.keyCode === 40) {
            if (event.target.parentNode.parentNode.nextElementSibling && !event.target.parentNode.parentNode.nextElementSibling.classList.contains("disabled")) {
                if(event.target.parentNode.parentNode.nextElementSibling.lastChild)
                    event.target.parentNode.parentNode.nextElementSibling.lastChild.firstChild.focus();
            }
        } else if (event.keyCode === 38) {
            if (event.target.parentNode.parentNode.previousElementSibling && !event.target.parentNode.parentNode.previousElementSibling.classList.contains("disabled")) {
                if(event.target.parentNode.parentNode.previousElementSibling.lastChild)
                    event.target.parentNode.parentNode.previousElementSibling.lastChild.firstChild.focus();
            }
        }else if (event.keyCode === 13){
            event.preventDefault();
            event.stopPropogation();
            return false;
        }
    }
}