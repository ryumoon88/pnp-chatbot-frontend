<template>
    <div class="flex flex-col aspect-[3/4] w-[400px]">
        <div>
            <UButton
                icon="i-heroicons-chat-bubble-left-ellipsis-16-solid"
                size="xl"
                color="primary"
                variant="solid"
                :trailing="false"
                :ui="{ rounded: 'rounded-full' }"
                v-if="!isOpen"
                title="Chat widget toggle"
                @click="openChat"
            ></UButton>
        </div>
        <ChatWidget v-if="isOpen" @on-close="closeChat" @on-submit="onSubmit" :conversations="conversations" />
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default defineNuxtComponent({
    data() {
        let isOpen = false;
        let conversations = new Array();
        return {
            isOpen,
            conversations,
        };
    },
    methods: {
        openChat() {
            this.isOpen = true;
        },
        closeChat() {
            this.isOpen = false;
        },
        async onSubmit(question: String) {
            this.conversations.push({ value: question, type: "question" });
            await $fetch("http://localhost:8000/api/v1/chat/get-response", {
                body: {
                    query: question,
                },
                method: "POST",
                responseType: "json",
                onResponse: (data) => {
                    this.conversations.push({ value: data.response, type: "answer" });
                },
            });
        },
    },
});
</script>
