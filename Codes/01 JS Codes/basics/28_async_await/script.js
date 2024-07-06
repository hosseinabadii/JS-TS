function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if (dogwalked) {
                resolve("You walk the dog.")
            }
            else {
                reject("You didn't walk dog!!!")
            }
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false
            if (kitchenCleaned) {
                resolve("You clean the kitchen.")
            }
            else {
                reject("You didn't clean the kitchen!!!")
            }
        }, 2500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true
            if (trashTakenOut) {
                resolve("You take out the trash.")
            }
            else {
                reject("You didn't take out the trash!!!")
            }
        }, 500)
    })
}


async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("All chores done.")
    }
    catch (error) {
        console.error(error);
    }
}

doChores();