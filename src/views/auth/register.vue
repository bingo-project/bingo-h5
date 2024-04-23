<script setup lang="ts" name="Register">
import { ref } from "vue";
const username = ref("");
const password = ref("");
const passwordRepeat = ref("");
const onSubmit = values => {
  console.log("submit", values);
};
</script>

<template>
  <div class="demo-content px-[12px]">
    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/logo_melomini.png"
    />
  </div>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        :label="$t('auth.username')"
        :placeholder="$t('auth.username')"
        :rules="[{ required: true, message: $t('auth.usernameRequired') }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        :label="$t('auth.password')"
        :placeholder="$t('auth.password')"
        :rules="[{ required: true, message: $t('auth.passwordRequired') }]"
      />
      <van-field
        v-model="passwordRepeat"
        type="password"
        name="password_repeat"
        :label="$t('auth.passwordRepeat')"
        :placeholder="$t('auth.passwordRepeat')"
        :rules="[
          { required: true, message: $t('auth.passwordRequired') },
          {
            validator: value => {
              if (value !== password) {
                return false;
              }

              return true;
            },
            message: $t('auth.passwordConfirmFailed')
          }
        ]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        {{ $t("auth.register") }}
      </van-button>
    </div>
  </van-form>

  <van-cell>
    <van-row justify="space-between">
      <a href="#login">{{ $t("auth.login") }}</a>
    </van-row>
  </van-cell>
</template>
