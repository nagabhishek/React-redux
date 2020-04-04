import { BUY_ICECREAM } from './icecreamType';

export const buyIceCream = (number) => {
    return {
        type: BUY_ICECREAM,
        payload:number
    }
}