<template>
    <div class="Social">
        <ul class="social-list">
            <li class="social-list__item">
                <a href="#" class="btn"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li class="social-list__item">
                <a href="#" class="btn"><i class="fab fa-twitter"></i></a>                        
            </li>
            <li class="social-list__item">
                <a href="#" class="btn"><i class="fab fa-instagram"></i></a>
            </li>
            <li class="social-list__item">
                <a href="#" class="btn"><i class="fab fa-youtube"></i></a>
            </li>
        </ul>        
    </div>
</template>

<script>
export default {
    name:"Social"
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';

.Social {
    
    .social-list {
        @include inlineList;
    }

    .btn {
        padding: $gutter;
        color: currentColor;
    }

    i {
        font-size: $txt--md;
    }

}
</style>