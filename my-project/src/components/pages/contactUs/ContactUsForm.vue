<script setup>
import NameField from "./NameField.vue";
import InputField from "./InputField.vue";
import PhoneNumberInput from "./PhoneNumberInput.vue";
import MessageInput from "./MessageInput.vue";
</script>

<template>
  <section class="container mx-auto  pt-[100px]">
    <div
      class="flex flex-col items-center "
    >
      <!-- title -->
      <h2 class="text-[2.5rem] font-bold leading-[140%] mb-[40px]">Contact Us</h2>
      <!-- description -->
      <p
        class="text-sm text-center max-w-[340px] font-normal leading-[160%] mb-[51px]"
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <!-- form -->
      <form>
        <div class="flex flex-col justify-between md:space-x-2 md:flex-row">
          <NameField
            class="mb-[20px]"
            title="First Name"
          />
          <NameField
            class="mb-[20px]"
            title="Last Name"
          />
        </div>
        <div class="flex flex-col ">
          <InputField
            class="mb-[20px]"
            title="Email"
          />
          <PhoneNumberInput
            class="mb-[20px]"
            title="Phone number"
          />
          <MessageInput
            class="mb-[40px]"
            title="Your Message"
          />
        </div>
        <div class="flex justify-center w-full">
          <button
            class="text-white text-xs bg-[#2C3878] hover:bg-[#242F67] active:bg-[#1F2856] w-[168px] h-[49px] border border-[#3C3C3C]"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>