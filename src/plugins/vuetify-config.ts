import { fa } from 'vuetify/locale'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VTreeview } from 'vuetify/labs/VTreeview'
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
export const vuetifyConfig = createVuetify({
    defaults:{
        VTextField: {
            color: "primary",
            variant: 'outlined',
        } ,
        VSelect: {
            color: "primary",
            variant: 'outlined',
        } ,
        VBtn : {
            variant: 'elevated',
            //color: 'primary'
        }

    } ,
    components : {...components , VTreeview},
    directives,
    locale: {
        locale: 'fa',
        fallback: 'fa',
        messages: { fa },
        rtl: { fa: true },
    },

    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})