import { IGlobalState } from '@/store';
import { computed, onMounted, Ref } from 'vue';
import { Store } from 'vuex';
import _ from 'lodash';
/*
 * @description:
 * @author: steve.deng
 * @Date: 2020-11-25 18:02:28
 * @LastEditors: steve.deng
 * @LastEditTime: 2020-11-26 16:08:09
 */
export function useLoadMore(
    refreshElm: Ref<null | HTMLElement>,
    store: Store<IGlobalState>,
    type: string
) {
    let element: HTMLElement;

    function _loadMore() {
        // 获取可视区高度 卷去的高度 整个高度
        let containerHeight = element.clientHeight; // 可视区高度
        let scrollTop = element.scrollTop; // 卷去的高度
        let scrollHeight = element.scrollHeight; // 整个高度
        if (containerHeight + scrollTop + 20 >= scrollHeight) {
            store.dispatch(type);
        }
    }
    onMounted(() => {
        element = refreshElm.value as HTMLElement;
        // 防抖lodash
        element.addEventListener('scroll', _.debounce(_loadMore, 200));
    });
    const isLoading = computed(() => {
        return store.state.home.lessons.loading;
    });
    const hasMore = computed(() => {
        return store.state.home.lessons.hasMore;
    });
    //test
    return {
        isLoading,
        hasMore
    };
}
