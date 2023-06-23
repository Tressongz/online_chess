import {Figure, FiguresNames} from "./Figure";
import {Colors} from "../Colors";
import blackLogo from "../../assets/black-rook.png";
import whiteLogo from "../../assets/white-rook.png";
import {Cell} from "../Cell";

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FiguresNames.ROOK;
    }
}