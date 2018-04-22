import { addLoadEvent } from '../../lib';
import './index.sass';

function stripTables(): void{
    if(!document.getElementsByTagName){
        return;
    }
    
    let tables = document.getElementsByTagName('table');
    for(let i = 0; i < tables.length; i++){
        let odd = false;
        let rows = tables[i].getElementsByTagName('tr');
        for(let i = 0; i < rows.length; i++){
            if(odd){
                rows[i].style.backgroundColor = '#ffc';
                odd = false;
            }else{
                rows[i].style.backgroundColor = '#fff';
                odd = true;
            }
        }
    }
}

function highlightRows(): void{
    if(!document.getElementsByTagName){
        return;
    }
    let rows = document.getElementsByTagName('tr');
    for(let i = 0; i < rows.length; i++){
        rows[i].onmouseover = function(){
            this.style.fontWeight = 'bold';
        };
        rows[i].onmouseout = function(){
            this.style.fontWeight = 'normal';
        };
    }
}

addLoadEvent(stripTables);
addLoadEvent(highlightRows);