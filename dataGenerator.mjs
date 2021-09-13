function getJumpResult () {
    const jumpResult= [];
    for (let i = 0; i < 3; i++) {
        jumpResult[i] = Math.floor(Math.random() * 3 * 100)/100
        }
        return jumpResult.sort((a, b)=> b-a);
}

export {getJumpResult};
