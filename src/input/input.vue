<template>
<div class="wrapper" :class="{ error }">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" 
    @change="$emit('change', $event.target.value)" 
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus',$event.target.value)"
    @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
        <Icon name='error' class="icon-error"></Icon>
        <span class="errorMessage">{{ error }}</span>
    </template>
</div>
</template>

<script>
import Icon from '../icon/icon.vue'
export default {
    name: 'DarkInput',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        },
        value: {
            type: String
        }
    },
    components: {
        Icon
    }
}
</script>

<style lang="scss" scoped>
@import '../_var.scss';
.wrapper {
    font-size: $font-size;

    >input {
        height: $height;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        font-size: inherit;

        &:hover {
            border: 1px solid $border-hover-color;
        }

        &:focus {
            box-shadow: inset 0 1px 3px $box-shadow-color;
            outline: none;
        }

        &[disabled],
        &[readonly] {
            border-color: #bbb;
            cursor: not-allowed;
        }
    }

    &.error {
        >input {
            border-color: $red;
        }
    }

    .icon-error {
        fill: $red;
    }

    .errorMessage {
        color: $red;
    }
}
</style>
