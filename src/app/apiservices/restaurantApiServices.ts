
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { serviceApi } from "../../lib/config";
import { Restaurant } from "../../types/user";
import axios from "axios";


class RestaurantApiService {
  
    private readonly path: string;
    constructor () {
        this.path = serviceApi;
    }
 async getTodaysMenus () {
       try {
            const url = "/restaurants?order=top&page=1&limit=4",
            result = await axios.get(this.path + url, { withCredentials: true });
        console.log("1");
         console.log("url::", url);
         console.log("result::", result);
         assert.ok(result, Definer.general_err1);     

            console.log("state:",  result.data.state);
            const today_menus: Restaurant [] = result.data.data;
            return today_menus;
            console.log("result::", result);
        }catch(err: any) {
            console.log(`error::::getTodaysMenus: ${err.message}`);
            throw err;

        }    
    }


}
export default RestaurantApiService;
