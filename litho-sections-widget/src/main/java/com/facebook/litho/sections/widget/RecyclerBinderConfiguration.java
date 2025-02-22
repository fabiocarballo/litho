/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho.sections.widget;

import androidx.annotation.Nullable;
import com.facebook.litho.sections.SectionTree;
import com.facebook.litho.sections.config.SectionsConfiguration;
import com.facebook.litho.widget.RecyclerBinder;
import com.facebook.litho.widget.RecyclerBinderConfig;
import com.facebook.rendercore.RunnableHandler;

/** Configuration setting for {@link RecyclerBinder}. */
public class RecyclerBinderConfiguration {
  private final boolean mIsWrapContent;
  // TODO T34627443 make all fields final after removing setters
  private boolean mUseBackgroundChangeSets = SectionsConfiguration.useBackgroundChangeSets;
  @Nullable private RunnableHandler mChangeSetThreadHandler;
  private final boolean mPostToFrontOfQueueForFirstChangeset;

  private final RecyclerBinderConfig mRecyclerBinderConfig;

  public static Builder create() {
    return new Builder();
  }

  public static Builder create(RecyclerBinderConfiguration configuration) {
    return new Builder(configuration);
  }

  private RecyclerBinderConfiguration(
      RecyclerBinderConfig recyclerBinderConfig,
      boolean wrapContent,
      boolean useBackgroundChangeSets,
      @Nullable RunnableHandler changeSetThreadHandler,
      boolean postToFrontOfQueueForFirstChangeset) {
    mIsWrapContent = wrapContent;
    mUseBackgroundChangeSets = useBackgroundChangeSets;
    mChangeSetThreadHandler = changeSetThreadHandler;
    mPostToFrontOfQueueForFirstChangeset = postToFrontOfQueueForFirstChangeset;
    mRecyclerBinderConfig = recyclerBinderConfig;
  }

  public boolean isWrapContent() {
    return mIsWrapContent;
  }

  public boolean getUseBackgroundChangeSets() {
    return mUseBackgroundChangeSets;
  }

  public @Nullable RunnableHandler getChangeSetThreadHandler() {
    return mChangeSetThreadHandler;
  }

  public boolean isPostToFrontOfQueueForFirstChangeset() {
    return mPostToFrontOfQueueForFirstChangeset;
  }

  public RecyclerBinderConfig getRecyclerBinderConfig() {
    return mRecyclerBinderConfig;
  }

  public static class Builder {

    private RecyclerBinderConfig mRecyclerBinderConfig;
    private boolean mWrapContent = false;
    private boolean mUseBackgroundChangeSets = SectionsConfiguration.useBackgroundChangeSets;
    @Nullable private RunnableHandler mChangeSetThreadHandler;
    private boolean mPostToFrontOfQueueForFirstChangeset;

    Builder() {}

    private Builder(RecyclerBinderConfiguration configuration) {
      mRecyclerBinderConfig = configuration.mRecyclerBinderConfig;
      this.mWrapContent = configuration.mIsWrapContent;
      this.mUseBackgroundChangeSets = configuration.mUseBackgroundChangeSets;
      this.mChangeSetThreadHandler = configuration.mChangeSetThreadHandler;
      this.mPostToFrontOfQueueForFirstChangeset =
          configuration.mPostToFrontOfQueueForFirstChangeset;
    }

    /**
     * Sets the {@link RecyclerBinderConfig} to be used by the underlying {@link RecyclerBinder}
     *
     * <p>This is a transitory API, and eventually it will replace both the {@link
     * RecyclerBinderConfiguration} and {@link RecyclerBinder.Builder}
     */
    public Builder recyclerBinderConfig(RecyclerBinderConfig recyclerBinderConfig) {
      mRecyclerBinderConfig = recyclerBinderConfig;
      return this;
    }

    /**
     * @param isWrapContent If true, the underlying RecyclerBinder will measure the parent height by
     *     the height of children if the orientation is vertical, or measure the parent width by the
     *     width of children if the orientation is horizontal.
     */
    public Builder wrapContent(boolean isWrapContent) {
      mWrapContent = isWrapContent;
      return this;
    }

    /**
     * Experimental. See {@link SectionTree.Target#supportsBackgroundChangeSets()} for more info.
     */
    public Builder useBackgroundChangeSets(boolean useBackgroundChangeSets) {
      mUseBackgroundChangeSets = useBackgroundChangeSets;
      return this;
    }

    public Builder changeSetThreadHandler(@Nullable RunnableHandler changeSetThreadHandler) {
      mChangeSetThreadHandler = changeSetThreadHandler;
      return this;
    }

    public Builder postToFrontOfQueueForFirstChangeset(
        boolean postToFrontOfQueueForFirstChangeset) {
      mPostToFrontOfQueueForFirstChangeset = postToFrontOfQueueForFirstChangeset;
      return this;
    }

    public RecyclerBinderConfiguration build() {
      RecyclerBinderConfig builderRecyclerBinderConfig = mRecyclerBinderConfig;

      return new RecyclerBinderConfiguration(
          builderRecyclerBinderConfig != null
              ? builderRecyclerBinderConfig
              : new RecyclerBinderConfig(),
          mWrapContent,
          mUseBackgroundChangeSets,
          mChangeSetThreadHandler,
          mPostToFrontOfQueueForFirstChangeset);
    }
  }
}
