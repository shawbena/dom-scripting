export interface JQueryContext extends ParentNode{
    querySelectorAll(selector: string): NodeList;
}

export default class JQuery {
    private readonly selector: string;
    private readonly context: JQueryContext;
    constructor(selector: string, context: JQueryContext = document){
        this.selector = selector;
        this.context = context;
    }	
    static text(e: Node): string {
        // use innerText
        let t = "";
        let r = e.childNodes;
        for (let i = 0; i < r.length; i++){
            // not comment node
            if (r[i].nodeType != 8){
                t += r[i].nodeType != 1 ?
                    r[i].nodeValue : JQuery.text(r[i]);
            } 
                
        }
            
        return t;
    }

    static each<T>(obj: Array<T> | { [prop: string]: any }, fn: (prop: string, index: number) => void) {
        // object
        if (obj instanceof Array) {
            for (let i = 0; i < obj.length; i++){
                fn.apply(obj[i], [obj[i], i]);
            }
               
        } else {
            for (let i in obj){
                fn.apply(obj[i], [obj[i], i]);
            }
        }
        return obj;
    }

    static hasClass(e: Element,a: string): boolean {
        return new RegExp("(^|\\s)" + a + "(\\s|$)").test(e.className);
    }
    static addClass(o: Element, c: string): void{
        if (JQuery.hasClass(o,c)) {
            return;
        }
        o.className += ( o.className ? " " : "" ) + c;
    }
    static removeClass(o: Element, c: string): void{
        o.className = !c ? "" :
            o.className.replace(
                new RegExp("(^|\\s*\\b[^-])"+c+"($|\\b(?=[^-]))", "g"), "");
    }


    static find(selector: string, context: JQueryContext): NodeList{
        return context.querySelectorAll(selector);
    }
     /**
	 * Remove the whitespace from the beginning and end of a string.
	 *
	 * @type String
	 * @param String str The string to trim.
	 */
	static trim(str: string): string{
		return str.replace(/^\s+|\s+$/g, "");
    }

     /**
     * 设置/获取HTML元素属性。
     * @param elem 
     * @param name 
     * @param value 对于 DOM 属性，属性名及属性值都是字符串
     */
    static attr(elem: HTMLElement & {[prop: string]: any}, name: string, value: any): string | null{
        let fix: {[prop: string]: string} = {
            "for": "htmlFor",
            "class": "className",
            "float": "cssFloat",
            innerHTML: "innerHTML",
            className: "className",
            value: "value",
            disabled: "disabled"
        }; 

        if ( fix[name] ) {
            if ( value != undefined ){
                elem[fix[name]] = value;
            }
            return elem[fix[name]];
        } else if ( elem.getAttribute ) {
            if ( value != undefined ) {
                elem.setAttribute( name, value );
            }
            return elem.getAttribute(name);
        } else {
            // e.g 'html-for' -> 'htmlFor', good
            name = name.replace(/-([a-z])/ig,function(z,b){return b.toUpperCase();});
            if ( value != undefined ) {
                elem[name] = value;
            }
            return elem[name];
        }
    }
    static curCSS(element: HTMLElement & { currentStyle: CSSStyleDeclaration }, prop: string){
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
       let style = element.style.getPropertyValue(prop);
       if(!style){
           if(element.currentStyle){
               style = element.currentStyle.getPropertyValue(prop);
           }else{
                style = getComputedStyle(element).getPropertyValue(prop); 
           }
       }
       return style;
    }
     /**
    * All ancestors of a given element.
    * @example let h1 = document.createElement('h1');
    * let h1Parents = parents(h1);
    * @name jQuery.parents
    * @type Array<Element>
    * @param Element elem The element to find the ancestors of.
    */
   static parents(elem: Node): Node[] {
        let matched: Node[] = [];
        let cur = elem.parentNode;
        while (cur && cur != document) {
            matched.push(cur);
            cur = cur.parentNode;
        }
        return matched;
    }
    sibling(){}
    /**
	 * Merge two arrays together, removing all duplicates.
	 *
	 * @private
	 * @name jQuery.merge
	 * @type Array
	 * @param Array a The first array to merge.
	 * @param Array b The second array to merge.
     * == for equal
     * */
    static  merge(first: any[], second: any[]): any[] {
        let result = [];
        
        // Move b over to the new array (this helps to avoid
        // StaticNodeList instances)
        for ( let k = 0; k < first.length; k++ ){
            result[k] = first[k];
        }
            
        // Now check for duplicates between a and b and only
        // add the unique items
        for ( let i = 0; i < second.length; i++ ) {
            let noCollision = true;
            
            // The collision-checking process
            for ( let j = 0; j < first.length; j++ ){
                if ( second[i] == first[j] ){
                    noCollision = false;
                }
            }
                
                
            // If the item is unique, add it
            if ( noCollision ){
                result.push( second[i] );
            }
        }

        return result;
    }

    static grep(){

    }

    static map(){}

    index(){
        // function( obj ) {
        //     var pos = -1;
        //     this.each(function(i){
        //         if ( this == obj ) pos = i;
        //     });
        //     return pos;
        // }
    }

   
    
   
}
