import { getComsumptionDeatils } from "../api/get-comsumption-details";
import { toHidden, toShow } from "./util";

const $consumptionDetails = document.querySelector(".consumption-details");
const $consumptionDetailsLoader = document.querySelector(".consumption-details-loader");

export const initConsumptionDetails = () => {
    handleGetConsumpltionDetails();
};

export const handleGetConsumpltionDetails = async () => {
    toShow($consumptionDetailsLoader);
    const list = await getComsumptionDeatils();

    list.map((item) => {
        const $li = document.createElement("li");
        $li.textContent = JSON.stringify(item);
        $consumptionDetails.appendChild($li);
    });
    toHidden($consumptionDetailsLoader);
};
