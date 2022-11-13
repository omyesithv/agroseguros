import {isundefined} from "util";
import Cookies from "universal-cookie";

const cookies = new Cookies;

export default function calculaExtraccionSesion() 
{
    const now = new Date().getTime();
    const newDate = now + 60 + 30 + 1000;
    return new Date(newDate)
} 

export function getSesion()
{
   return isundefined(cookies.get("_s") ? false: cookies.get("_s"));
}
