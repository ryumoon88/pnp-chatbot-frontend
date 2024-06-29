<template>
    <UCard class="" :ui="ui">
        <template #header class="h-12 absolute top-0">
            <div class="flex justify-between">
                <span>Chatbot</span>
                <UButton variant="ghost" icon="i-heroicons-minus-16-solid" title="Minimize Chat Widget" @click="$emit('onClose')"></UButton>
            </div>
        </template>
        <div class="flex flex-col gap-3 overflow-auto px-4 py-5 sm:p-6" ref="messagesContainer">
            <Chat :type="convo.type" v-for="convo in conversations" :value="convo.value" />
        </div>
        <template #footer>
            <UForm :state="state" @submit="submit">
                <UButtonGroup class="w-full">
                    <UInput placeholder="Question..." class="w-full" v-model="state.question"> </UInput>
                    <UButton class="cursor-pointer" icon="i-heroicons-paper-airplane-20-solid" title="Send Question" type="submit"></UButton>
                </UButtonGroup>
            </UForm>
        </template>
    </UCard>
</template>

<script lang="ts">
export default defineNuxtComponent({
    props: {
        conversations: Array,
    },
    setup() {
        let ui = {
            base: "h-full flex flex-col relative w-full",
            body: {
                base: "h-full ps flex flex-col gap-3",
                padding: "",
            },
            header: {
                base: " sticky top-0 w-full z-[10] bg-white dark:bg-gray-900",
            },
            footer: {
                base: "sticky bottom-0 w-full z-[10] bg-white dark:bg-gray-900",
            },
        };

        let state = reactive({
            question: undefined as String | undefined,
        });
        return {
            ui,
            state,
        };
    },
    mounted() {
        console.log("mounted");
        this.scrollToEnd();
    },
    renderTriggered(e) {
        console.log("rendered");
    },
    emits: ["onClose", "onSubmit"],
    methods: {
        scrollToEnd() {
            setTimeout(() => {
                let container = (this.$refs.messagesContainer as HTMLElement | null)!;
                let last_child = container.children[container.children.length - 1];
                if (last_child != null)
                    container.scrollTo({
                        top: last_child.clientHeight,
                    });
            }, 0);
        },
        submit() {
            if (this.state.question == undefined) return;
            this.$emit("onSubmit", this.state.question);
            this.state.question = undefined;
        },
    },
});
</script>
