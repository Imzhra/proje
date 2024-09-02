import axios from "axios";
import {ref} from "vue";
const SelectedItems = ref([{Id: 0, Title: ''}])

const baseurl = "http://localhost:5173/api";
function DeleteItem(ItemId: number) {
    if (!ItemId) {
        console.error("Invalid ItemId");
        return;
    }

    axios.delete(baseurl + `${SelectedItems.value}/${ItemId}`)
        .then(function (response) {
            if (response.status === 200) {
                console.log(`Item with ID ${ItemId} has been deleted successfully.`, response.data);
            } else {
                console.error(`Failed to delete the item with ID ${ItemId}.`, response.data);
            }
        })
        .catch(function (error) {
            console.error(`Error deleting the item with ID ${ItemId}:`, error.message);
        });
}


export default  DeleteItem