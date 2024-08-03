<template>
    <div class="w-[100%] h-[100%] flex justify-center items-center">
        <div class="loader">
            <div class="load-inner load-one"></div>
            <div class="load-inner load-two"></div>
            <div class="load-inner load-three"></div>
            <span class="text">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .loader {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        perspective: 780px;
        transform: translateY(-50%);
    }

    .text {
        font-size: 50px;
        font-weight: 700;
        color: white;
        z-index: 10;
    }

    .load-inner {
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 50%;
    }

    .load-inner.load-one {
        left: 0%;
        top: 0%;
        border-bottom: 3px solid var(--loading-1);
        animation: rotate1 1.15s linear infinite;
    }

    .load-inner.load-two {
        right: 0%;
        top: 0%;
        border-right: 3px solid var(--loading-2);
        animation: rotate2 1.15s 0.1s linear infinite;
    }

    .load-inner.load-three {
        right: 0%;
        bottom: 0%;
        border-top: 3px solid var(--loading-3);
        animation: rotate3 1.15s 0.15s linear infinite;
    }

    @keyframes rotate1 {
        0% {
            transform: rotateX(45deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(45deg) rotateY(-45deg) rotateZ(360deg);
        }
    }
    @keyframes rotate2 {
        0% {
            transform: rotateX(45deg) rotateY(45deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(45deg) rotateY(45deg) rotateZ(360deg);
        }
    }
    @keyframes rotate3 {
        0% {
            transform: rotateX(-60deg) rotateY(0deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(-60deg) rotateY(0deg) rotateZ(360deg);
        }
    }
</style>
