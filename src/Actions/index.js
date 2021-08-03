//--ActionObjs
export const partsActionsCreator = (indexObj, valueObj, partType) => {
    return {
        type: partType,
        payload: {
        index: indexObj,
        value: valueObj
        }
        }
    }
//--End Actions