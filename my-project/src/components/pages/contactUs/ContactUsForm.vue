<script setup>
import InputField from "./InputField.vue";
import PhoneNumberInput from "./PhoneNumberInput.vue";
import MessageInput from "./MessageInput.vue";
</script>

<template>
  <section>
    <div
      class="container flex items-center flex-col mx-auto max-w-[840px] bg-pink-100"
    >
      <!-- title -->
      <h2 class="text-[56px] font-bold leading-[140%] mb-[40px]">Contact Us</h2>
      <!-- description -->
      <p
        class="text-lg text-center max-w-[340px] font-normal leading-[160%] mb-[51px]"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <!-- form -->
      <form>
        <div class="max-w-[840px] flex flex-col md:flex-row justify-between">
          <InputField
            class="mb-[20px]"
            width="413px"
            height="62px"
            title="First Name"
          />
          <InputField
            class="mb-[20px]"
            width="413px"
            height="62px"
            title="Last Name"
          />
        </div>
        <div class="max-w-[840px] flex flex-col">
          <InputField
            class="mb-[20px]"
            width="840px"
            height="62px"
            title="Email"
          />
          <PhoneNumberInput
            class="mb-[20px]"
            width="840px"
            height="62px"
            title="Phone number"
          />
          <MessageInput
            class="mb-[40px]"
            width="840px"
            height="178px"
            title="Your Message"
          />
        </div>
        <div class="flex justify-center w-full">
          <button
            class="text-white bg-[#2C3878] hover:bg-[#242F67] active:bg-[#1F2856] w-[168px] h-[49px] border border-[#3C3C3C]"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>