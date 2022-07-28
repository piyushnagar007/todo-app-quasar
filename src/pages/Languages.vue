<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="bg-grey-2 q-pa-sm rounded-borders">
        Preferred Language:
        <q-option-group
          name="preferred_lang"
          v-model="preferred"
          :options="options"
          color="primary"
          inline
        />
      </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import { i18n } from '../boot/i18n'
export default {
  data () {
    return {
      preferred: 'en',
      accepted: [],

      options: [
        {
          label: 'English',
          value: 'en-US'
        },
        {
          label: 'French',
          value: 'fr'
        }
      ],
    }
  },

  methods: {
    onSubmit (evt) {
      const formData = new FormData(evt.target)

      for (const [ name, value ] of formData.entries()) {
        i18n.locale = value
      }
    }
  }
}
</script>