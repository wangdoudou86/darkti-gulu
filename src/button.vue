<template>
<button class="d-button" :class="[iconPosition && `icon-${iconPosition}`]" @click="$emit('click')">
    <d-icon class="icon" v-if="icon && !loading" :name="icon"></d-icon>
    <d-icon class="icon loading" v-if="loading" name="loading"></d-icon>
    <div class="content">
        <slot></slot>
    </div>
</button>
</template>

<script>
import Icon from './icon.vue'
export default {
    name: 'DarkButton',
    props: {
        icon: {
            type: String
        },
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(value) {
                return value === 'left' || value === 'right'
            }
        }
    },
    components: {
        'd-icon': Icon
    }
}
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.d-button {
    height: $button-height;
    font-size: $font-size;
    padding: 0 1em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background-color: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;

    &:hover {
        /*&表示当前的选择器*/
        border-color: $border-color-hover;
    }

    &:active {
        background-color: $button-active-bg;
    }

    &:focus {
        outline: none;
    }

    >.icon {
        order: 1;
        margin-right: .2em;
    }

    >.content {
        order: 2;
    }

    &.icon-right {
        >.icon {
            order: 2;
            margin-left: .3em;
        }

        >.content {
            order: 1;
        }
    }

    >.loading {
        animation: spin 1s linear infinite;
    }
}
</style>
