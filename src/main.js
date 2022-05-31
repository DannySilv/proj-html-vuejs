import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faCarAlt } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronDown);
library.add(faShoppingCart);
library.add(faArrowAltCircleRight);
library.add(faClock);
library.add(faHamburger);
library.add(faMobileAlt);
library.add(faCarAlt);
library.add(faLeaf);
library.add(faBreadSlice);
library.add(faWineBottle);
library.add(faDrumstickBite);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
