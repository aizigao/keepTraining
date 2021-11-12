// https://easings.net/#easeOutQuint
function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
}

function easeOutBounce(x) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
}
function easeInOutBounce(x) {
    return x < 0.5
        ? (1 - easeOutBounce(1 - 2 * x)) / 2
        : (1 + easeOutBounce(2 * x - 1)) / 2;
}
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const defualtArgs = {
    from: 0,
    to: 200,
    onProgress: () => {},
    onFinish: () => {},
    duration: 200,
    easing: easeOutQuint,
};

function rafEasing(args) {
    let requestId;
    let lastRunArgs = {};
    return {
        run(runArgs, isResume = false) {
            const { from, to, onProgress, duration, easing, onFinish } = {
                ...defualtArgs,
                ...args,
                ...lastRunArgs,
                ...runArgs,
            };
            lastRunArgs = { ...runArgs };
            if (from === to) {
                return;
            }
            let start;
            const changeDelta = to - from;
            window.cancelAnimationFrame(requestId);
            const step = (timestamp) => {
                if (start === undefined) start = timestamp;
                const elapsed =
                    Math.min(timestamp - start, duration) / duration;
                const targetPrecent = easing(elapsed);

                const processV = from + changeDelta * targetPrecent;
                onProgress(processV, elapsed, timestamp);
                if (elapsed < 1) {
                    requestId = window.requestAnimationFrame(step);
                } else {
                    onFinish(timestamp);
                }
            };
            requestId = window.requestAnimationFrame(step);
            return this;
        },
        stop() {
            window.cancelAnimationFrame(requestId);
            return this;
        },
        resume(args = {}) {
            // TODO: 时间咋算呢？ 不搞了
            this.run(args, true);
            return this;
        },
    };
}

// rafEasing({
//     from: 120,
//     to: 0,
//     duration: 200,
//     onProgress(v, timestamp) {
//         console.log("onProgress", v, timestamp);
//     },
//     onFinish(timestamp) {
//         console.log("finish", timestamp);
//     },
// }).run();

const EASING = {
    easeOutQuint,
    easeInOutBounce,
    easeOutBounce,
};
export { rafEasing, EASING };
