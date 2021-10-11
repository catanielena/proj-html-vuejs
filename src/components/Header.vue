<template>
    <header class="Header">
        <!-- header-top -->
        <div class="header-top">
            <div class="wrapper">
                <Social/>
                <div class="header-top--user-bar">
                    <button class="btn text--sm">Shopping Cart</button>
                    <button class="btn text--sm btn--border">
                        <span>My Account</span>
                        <i class="fas fa-chevron-down text--xs"></i>
                    </button>
                    <button class="btn text--sm btn--filled btn-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span>CART</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- /header-top -->
        <!-- header-bottom -->
        <div class="header-bottom">
            <div class="wrapper">
                <!-- logo -->
                <div class="header-bottom__logo">
                    <img src="../assets/img/classic_shop_logo2x.png" alt="classic_shop_logo">
                </div>
                <!-- /logo -->
                <!-- nav -->
                <nav class="header-bottom__nav">
                    <ul class="nav__list">
                        <li class="list__item" v-for="item in mainNav" :key="item.title">
                            <a href="#" class="btn" :class="{active: item.active}">
                                <span>{{item.title}}</span>                                
                                <i class="fas fa-chevron-down text--xs"></i>
                            </a>
                        </li>
                        <li><a class="btn btn--sm btn--filled">shop now!</a></li>
                        <li><a class="btn"><i class="fas fa-search"></i></a></li>
                    </ul>
                </nav>
                <!-- /nav -->
            </div>
        </div>
        <!-- /header-bottom -->
    </header>
</template>

<script>
import Social from './Social.vue';

export default {
    name:"Header",
    components: {
        Social
    },
    props: {
        mainNav: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';

.Header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;

    & > * {
        border-bottom: 1px solid $grey-500;
    }

    .wrapper {
        @include flex--SB-C;
    }

    .header-top {
        color: $grey;
        .btn {
            color: $grey;
            padding: $gutter--md $gutter;
        }

        .btn-cart {
            width: 15rem;
            font-weight: 500;
        }
    }

    .header-bottom__logo {
        height: 2.8rem;

        img {
            height: 100%;
        }
    }

    .header-bottom__nav {
        .nav__list {
            @include inlineList;
            align-items: center;
        }
        .list__item {
            .btn {
                padding: $gutter--lg 0;
            }
        }

        .btn {
            position: relative;
            margin: 0 $gutter--md;

            &.active {
                color: $cbHavelockBlue;

                &::after {
                    content: '';
                    position: absolute;
                    display: inline-block;
                    top: 0;
                    left: 0;
                    height: 3px;
                    width: 100%;
                    background-color: $cbHavelockBlue;
                }
            }
        }
    }

}

</style>