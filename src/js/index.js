import "../style/index.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";

import { initAddItem } from "./add-item";
import { initConsumptionDetails } from "./consumption-details";
import { initCurrentAsset } from "./current-asset";

const initApp = () => {
    initCurrentAsset();
    initConsumptionDetails();
    initAddItem();
};

initApp();
