import "../style/index.scss";
import "@fortawesome/fontawesome-free/js/all.js";

import { initCurrentAsset } from "./current-asset";
import { initConsumptionDetails } from "./consumption-detail";

const initApp = () => {
    initCurrentAsset();
    initConsumptionDetails();
};

initApp();
