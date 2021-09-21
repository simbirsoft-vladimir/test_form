<template>
  <base-form class="realty-search-form">
    <div class="realty-search-form__main-block">
      <div class="realty-search-form__search-controls">
        <base-form-group>
          <base-input
            v-if="isSearchByTitle"
            v-model="estateTitle"
            placeholder="Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)"
            class="realty-search-form__search-by-title"
          />
          <template v-else>
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
          <base-button
            class="realty-search-form__search-button"
            @click="showCurrentParams"
          >
            Найти
          </base-button>
        </base-form-group>
      </div>
      <div
        v-if="estateParameterType && !isSearchByTitle"
        class="realty-search-form__params-block"
      >
        <component
          :is="estateParameterComponent"
          v-bind.sync="currentParameters"
          @add-estate-params="estateParameterType = $event"
        />
      </div>
    </div>
    <div class="realty-search-form__footer">
      <realty-search-form-toggle
        :checked="isSearchByTitle"
        @toggle="isSearchByTitle = !isSearchByTitle"
      />
      <realty-search-form-params-toggler
        v-if="!isSearchByTitle"
        :estateParameterType="estateParameterType"
        @add-estate-params="estateParameterType = $event"
      />
    </div>
  </base-form>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from './ui/BaseButton.vue'
import BaseForm from './ui/BaseForm.vue'
import BaseFormGroup from './ui/BaseFormGroup.vue'
import BaseSelect from './ui/BaseSelect.vue'
import BaseInput from './ui/BaseInput.vue'
import RealtySearchFormToggle from './RealtySearchFormToggle.vue'
import RealtySearchFormParamsToggler from './RealtySearchFormParamsToggler.vue'
import RealtySearchFormPriceEditor from './RealtySearchFormPriceEditor.vue'
import RealtySearchFormAreaEditor from './RealtySearchFormAreaEditor.vue'
import {capitalize} from '@/utils/formatText'
import {cities} from '../mocks/cities'
import {actions} from '../mocks/actions'
import {estate} from '../mocks/estate'
import {measuringMethods} from '../mocks/measuringMethods'

interface Range {
  from: null | number
  to: null | number
}

export default Vue.extend({
  name: 'RealtySearchForm',
  components: {
    BaseForm,
    BaseSelect,
    BaseButton,
    BaseFormGroup,
    BaseInput,
    RealtySearchFormToggle,
    RealtySearchFormParamsToggler,
    RealtySearchFormPriceEditor,
    RealtySearchFormAreaEditor,
  },

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
      estateTitle: '',
      estateParameterType: '',
      estatePrice: {
        from: null,
        to: null,
        options: measuringMethods,
        selectValue: measuringMethods[0]?.value,
      },
      estateArea: {from: null, to: null},
    }
  },
  computed: {
    estateParameterComponent(): string | null {
      if (!this.estateParameterType) return null

      const currentParameter = capitalize(this.estateParameterType)
      return `RealtySearchForm${currentParameter}Editor`
    },
    currentParameters(): Range {
      return this.estateParameterType === 'price'
        ? this.estatePrice
        : this.estateArea
    },
  },
  methods: {
    showCurrentParams() {
      const params = {
        city: this.cities.find(city => city.id === this.currentCity)?.title,
        action: this.actions.find(action => action.id === this.currentAction)?.title,
        estate: this.estate.find(premises => premises.id === this.currentEstate)?.title,
        estate_title: this.estateTitle || 'Название не выбрано',
        price_from: this.estatePrice.from ?? 0,
        price_to: this.estatePrice.to ?? 0,
        measure_type: this.estatePrice.selectValue,
        area_from: this.estateArea.from ?? 0,
        area_to: this.estateArea.to ?? 0,
      }
      const paramsArray = Object.entries(params).map(paramsPair => `${paramsPair[0]}: ${paramsPair[1]}`)
      const paramsString = ['Данные формы: \n', ...paramsArray].join('\n')
      alert(paramsString)
    }
  }
})
</script>

<style lang="scss">
  @import'@/styles/variables.scss';

  .realty-search-form {
    max-width: 940px;

    &__main-block {
      padding: 36px 20px;
      background-color: #8cbbe6;
    }

    &__search-controls {
      padding-bottom: 28px;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
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

    &__search-by-title {
      flex: 1;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &__search-button {
      background-color: $success;
      color: white;
      font-size: 20px;
    }
  }
</style>
