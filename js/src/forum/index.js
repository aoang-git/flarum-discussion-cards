import app from 'flarum/app';
import {extend, override} from 'flarum/extend';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import IndexPage from 'flarum/forum/components/IndexPage';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Placeholder from 'flarum/common/components/Placeholder';
import Button from 'flarum/common/components/Button';
import CardItem from './components/CardItem';
import ListItem from './components/ListItem';
import checkOverflowingTags from './helpers/checkOverflowingTags';

app.initializers.add('aoang-git-discussion-cards', () => {

  extend(DiscussionList.prototype, 'oncreate', checkOverflowingTags);
  extend(DiscussionList.prototype, 'onupdate', checkOverflowingTags);

  extend(DiscussionListState.prototype, 'requestParams', function (params) {
    if (app.current.matches(IndexPage)) {
      params.include.push(['firstPost', 'posts', 'posts.user']);
    }
  });

  override(DiscussionList.prototype, 'view', function (original) {
    const settings = {};
    for (const key in app.forum.data.attributes) {
      if (key.startsWith('walsgitDiscussionCards')) {
        let newKey = key.replace('walsgitDiscussionCards', '');
        newKey = newKey.replace(/^./, newKey.charAt(0).toLowerCase());
        settings[newKey] = app.forum.data.attributes[key];
      }
    }
    
    // 解析 allowedTags JSON 字符串为数组，确保始终是数组
    if (settings.allowedTags && typeof settings.allowedTags === 'string') {
      try {
        settings.allowedTags = JSON.parse(settings.allowedTags);
      } catch (e) {
        console.error('Failed to parse allowedTags:', e);
        settings.allowedTags = [];
      }
    }
    
    // 确保 allowedTags 是数组
    if (!Array.isArray(settings.allowedTags)) {
      settings.allowedTags = [];
    }
    
    const state = this.attrs.state;
    const params = state.getParams();
    let loading;
    if (state.isInitialLoading() || state.isLoadingNext()) {
      loading = <LoadingIndicator/>;
    } else if (state.hasNext()) {
      loading = Button.component(
        {
          className: 'Button',
          onclick: state.loadNext.bind(state),
        },
        app.translator.trans('core.forum.discussion_list.load_more_button')
      );
    }
    if (state.isEmpty()) {
      const text = app.translator.trans('core.forum.discussion_list.empty_text');
      return <div className="DiscussionList">{m(Placeholder, {text})}</div>;
    }
    
    const isTagPage = m.route.get().split('?')[0].startsWith('/t/');
    let tag = null;
    
    if (isTagPage && params.tags) {
      // 查找标签对象（只查找一次）
      const tagObject = app.store.all('tags').find(t => t.slug() === params.tags);
      
      if (tagObject) {
        // 确保 tag ID 是字符串类型，以便与 allowedTags 数组中的字符串匹配
        tag = String(tagObject.data.id);
        
        // 安全地解析标签设置
        const tagSettingsAttr = tagObject.data.attributes.walsgitDiscussionCardsTagSettings;
        if (tagSettingsAttr) {
          try {
            const tagSettings = JSON.parse(tagSettingsAttr);
            // 合并标签特定设置到全局设置
            if (tagSettings && typeof tagSettings === 'object') {
              for (const key in tagSettings) {
                if (settings.hasOwnProperty(key) && tagSettings[key] !== null && tagSettings[key] !== undefined) {
                  settings[key] = tagSettings[key];
                }
              }
            }
          } catch (e) {
            console.error('Failed to parse tag settings:', e);
          }
        }
      }
    }
    
    // 判断是否显示卡片视图
    const shouldShowCards = app.current.matches(IndexPage) && (
      // 情况1：在标签页面且该标签在允许列表中
      (tag && settings.allowedTags.length > 0 && settings.allowedTags.includes(tag)) ||
      // 情况2：在首页且开启了首页卡片显示
      (!params.tags && Number(settings.onIndexPage) === 1)
    );
    
    if (shouldShowCards) {
      return (
        <div className={'DiscussionList' + (state.isSearchResults() ? ' DiscussionList--searchResults' : '')}>
          <div class="DiscussionList-discussions flexCard">
            {state.getPages().map((pg, o) => {
              return pg.items.map((discussion, i) => {
                return (i < Number(settings.primaryCards) && o === 0)
                  ? m(CardItem, {discussion: discussion})
                  : m(ListItem, {discussion: discussion})
              });
            })}
          </div>
          <div className="DiscussionList-loadMore">{loading}</div>
        </div>
      );

    } else {
      return original();
    }
  })
}, -1);


// Expose compat API
import extCompat from './compat';
import {compat} from '@flarum/core/forum';

Object.assign(compat, extCompat);
