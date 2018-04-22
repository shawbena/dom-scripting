declare class MoveElement {
    private eleId;
    private finalX;
    private finalY;
    readonly interval: number;
    private movementTimeoutId;
    constructor(eleId: string, finalX: number, finalY: number, interval: number);
    clearMove(): void;
    move(): void;
}
export default MoveElement;
