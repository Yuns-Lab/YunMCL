<script setup lang="ts">
    const props = defineProps<{
        modelValue: number;
        target: number;
        storageKey: string;
    }>();
    const $emit = defineEmits(["update:modelValue"]);
    const handleClick = () => {
        localStorage.setItem(props.storageKey, String(props.target));
        $emit("update:modelValue", props.target);
    };
</script>

<template>
    <button
        class="flex items-center gap-2"
        @click="handleClick">
        <img
            class="w-6"
            v-if="props.modelValue !== props.target"
            draggable="false"
            src="@t/redstone_lamp.png" />
        <img
            class="w-6"
            v-else
            draggable="false"
            src="@t/redstone_lamp_on.png" />
        <div class="text-white -translate-y-[2px]"><slot></slot></div>
    </button>
</template>
