<template>
    <UCard :ui="ui" :class="type == 'question' ? 'ms-auto' : ''">
        <div class="flex gap-3">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" class="mt-2" :class="type == 'question' ? 'order-2' : ''" />
            <div class="flex flex-col ring-1 ring-gray-200 dark:ring-gray-800 p-3" :class="type == 'question' ? 'ms-[calc(32px+0.75rem)]' : 'me-[calc(32px+0.75rem)]'">
                <span class="font-bold" :class="type == 'question' ? 'text-end' : ''">{{ type == "answer" ? "Bot" : "You" }}</span>
                <div class="text-xs w-full">
                    <p style="white-space: pre-line">{{ value }}</p>
                </div>
            </div>
        </div>
    </UCard>
</template>

<script>
export default defineNuxtComponent({
    props: {
        type: "answer" | "question",
        value: String,
    },
    setup: (props) => {
        let ui = {
            base: "",
            background: "bg-white dark:bg-gray-900",
            divide: "divide-y divide-gray-200 dark:divide-gray-800",
            ring: "",
            rounded: "rounded-lg",
            shadow: "shadow",
            body: {
                base: "",
                background: "",
                padding: "",
            },
            header: {
                base: "",
                background: "",
                padding: "px-4 py-5 sm:px-6",
            },
            footer: {
                base: "",
                background: "",
                padding: "px-4 py-4 sm:px-6",
            },
        };
        console.log(props.type);
        return {
            ui,
        };
    },
});
</script>
