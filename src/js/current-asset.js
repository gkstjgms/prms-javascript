import { addCurrentAsset } from "../api/add-current-asset";
import { getCurrentAsset } from "../api/get-current-asset";
import { toShow, toHidden } from "./util";

const $currentAssetValue = document.querySelector(".current-asset-value");
const $currentAssetLoader = document.querySelector(".current-asset-loader");
const $currentAssetInput = document.querySelector(".current-asset-input");
const $currentAssetButton = document.querySelector(".current-asset-button");
const $currentAssetButtonLoader = document.querySelector(".current-asset-button-loader");
const $addItemButton = document.querySelector(".add-item-button");

export const initCurrentAsset = () => {
    handleGetCurrentAsset();

    $currentAssetButton.addEventListener("click", function () {
        const inputValue = $currentAssetInput.value;
        if (inputValue > 0) {
            handleAddCurrentAsset(inputValue);
        } else {
            console.warn("0원 이상을 입력하세요.");
        }
    });
};

// 데이터를 조회하여 UI 업데이트
const handleGetCurrentAsset = async () => {
    toShow($currentAssetLoader);

    try {
        const { price } = await getCurrentAsset();
        if (price > 0) {
            $currentAssetValue.textContent = price.toLocaleString();
            toHidden($currentAssetInput);
        } else {
            toShow($currentAssetInput);
            toShow($currentAssetButton);
            toHidden($addItemButton);
        }
    } catch (err) {
        console.error("현재 자산을 조회할 수 없습니다.");
    }

    toHidden($currentAssetLoader);
};

const handleAddCurrentAsset = async (inputValue) => {
    toShow($currentAssetButtonLoader);
    toHidden($currentAssetButton);

    await addCurrentAsset(Number(inputValue));

    toHidden($currentAssetButtonLoader);
    toShow($currentAssetButton);

    await handleGetCurrentAsset();
};
