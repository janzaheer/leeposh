<template>
  <div>
    <section class="text-gray-600 body-font relative" id="contact">
      <div class="text-center">
        <h1 class="text-4xl text-goldColor">Contact Us</h1>
        <p class="leading-relaxed text-pinkColor my-6">
          have a question? Let us know.
        </p>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-2 p-6">
        <div>
          <div
            class="bg-gray-300 rounded-lg overflow-hidden relative h-[400px] sm:h-[400px]"
          >
            <iframe
              class="absolute inset-0 w-full h-full"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.6860498782803!2d66.98337757624236!3d30.217506774836927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2e13af8a4400f%3A0xf1eeada5a7265667!2sLeeposh%20Beauty%20Salon!5e0!3m2!1sen!2s!4v1726399490123!5m2!1sen!2s"
              style="filter: contrast(1.2) opacity(0.9)"
            ></iframe>
          </div>
        </div>
        <div class="bg-white flex flex-col w-full">
    <h2 class="text-gray-900 text-lg font-medium title-font">
      Feedback
    </h2>
    <p class="leading-relaxed text-gray-600">SEND US A MESSAGE</p>
    <form @submit.prevent="sendToWhatsApp">
      <div class="relative mb-2">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>
      <div class="relative mb-2">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>
      <div class="relative mb-2">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          class="w-full mb-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-white bg-goldColor border-0 py-2 px-6 focus:outline-none hover:bg-goldHoverColor rounded text-lg"
      >
        Submit
      </button>
    </form>
  </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      whatsappNumber: "+923344443606",
    };
  },

  mounted() {},
  
  methods: {
    sendToWhatsApp() {
      const { name, email, message } = this.form;

      // Construct the WhatsApp URL
      const whatsappURL = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
        `Feedback Leeposh Clients\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
      )}`;

      

      // Show success message
      this.$swal({
        title: "Feedback Sent",
        text: "Thank you for your feedback! We will get back to you shortly.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Open WhatsApp in a new tab
      window.open(whatsappURL, "_blank");
        // Reset form after the popup is closed
        this.resetForm();
      });
    },
    resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>
