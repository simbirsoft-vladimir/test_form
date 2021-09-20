<template>
  <base-form class="realty-search-form">
    <div class="realty-search-form__main-block">
      <div class="realty-search-form__search-controls">
        <base-form-group>
          <template v-if="true">
            <base-select
              :options="cities"
              v-bind="optionsParams"
              class="realty-search-form__select realty-search-form__select_first"
              @select="currentCity = Number($event)"
            />
            <base-select
              :options="actions"
              v-bind="optionsParams"
              class="realty-search-form__select"
              @select="currentAction = Number($event)"
            />
            <base-select
              :options="estate"
              v-bind="optionsParams"
              class="realty-search-form__select"
              @select="currentEstate = Number($event)"
            />
          </template>
          <div v-else></div>
          <base-button
            class="realty-search-form__search-button"
          >
            Найти
          </base-button>
        </base-form-group>
      </div>
    </div>
    <div class="realty-search-form__footer">
      <realty-search-form-toggle
        :checked="isSearchByTitle"
        @toggle="isSearchByTitle = !isSearchByTitle"
      />
    </div>
  </base-form>
</template>

<script lang="ts">
import Vue from 'vue'
import RealtySearchFormToggle from './RealtySearchFormToggle.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseForm from './ui/BaseForm.vue'
import BaseFormGroup from './ui/BaseFormGroup.vue'
import BaseSelect from './ui/BaseSelect.vue'
import {cities} from '../mocks/cities'
import {actions} from '../mocks/actions'
import {estate} from '../mocks/estate'

export default Vue.extend({
  name: 'RealtySearchForm',
  components: { BaseForm, BaseSelect, BaseButton, BaseFormGroup, RealtySearchFormToggle },

  data() {
    return {
      cities,
      actions,
      estate,
      currentCity: cities[0].id,
      currentAction: actions[0].id,
      currentEstate: estate[0].id,
      optionsParams: {
        optionKey: 'id',
        optionValue: 'id',
        optionText: 'title',
      },
      isSearchByTitle: false,
    }
  },
})
</script>

<style lang="scss">
  @import'@/styles/variables.scss';

  .realty-search-form {
    max-width: 940px;

    &__main-block {
      padding: 36px 20px 0;
      background-color: #8cbbe6;
    }

    &__search-controls {
      padding-bottom: 28px;
    }

    &__footer {
      height: 45px;
      padding: 0 20px;
      background-color: #E6F2FE;
    }

    &__select {
      margin-left: 1px;

      &_first {
        margin-left: 0;
      }
    }

    &__search-button {
      background-color: $success;
      color: white;
      font-size: 20px;
    }
  }
</style>