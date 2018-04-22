class MoveElement {
    private eleId: string;
    private finalX: number;
    private finalY: number;
    readonly interval: number;
    private movementTimeoutId: number = -9999;

    constructor(eleId: string, finalX: number, finalY: number, interval: number) {
        this.eleId = eleId;
        this.finalX = finalX;
        this.finalY = finalY;
        this.interval = interval;
    }
    clearMove(): void{
        clearTimeout(this.movementTimeoutId);
    }
    move(): void {
        if (!document.getElementById) {
            return;
        }
        let elem = document.getElementById(this.eleId);
        if (!elem) {
            return;
        }
       
        if(!elem.style.left){
            elem.style.left = '0px';
        }
        if(!elem.style.top){
            elem.style.top = '0px';
        }
        let xpos = parseInt(elem.style.left as string);
        let ypos = parseInt(elem.style.top as string);
        let delX = this.finalX - xpos;
        let delY = this.finalY - ypos;
        if (xpos == this.finalX && ypos == this.finalY) {
            return;
        }
         
        let speed = 15.0;
        // 向左或向右移动但没移动过目标
        if(delX <= 0 && xpos < this.finalX || delX > 0 && xpos > this.finalX){
            xpos = this.finalX;
        }else{
            if(delX < 0){
                xpos += Math.floor(delX / speed);
            }else{
                xpos += Math.ceil(delX / speed);
            }
        }
        if(delY < 0 && ypos < this.finalY || delY > 0 && ypos > this.finalY){
            ypos = this.finalY;
        } else {
            if(delY < 0){
                ypos += Math.floor(delY / speed);
            }else{
                ypos += Math.ceil(delY / speed);
            }
        }
        elem.style.left = `${xpos}px`;
        elem.style.top = `${ypos}px`;
        this.movementTimeoutId = setTimeout(() => this.move());
    }
}

export default MoveElement;