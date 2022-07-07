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

package com.facebook.litho;

import android.content.Context;
import androidx.annotation.Nullable;
import androidx.annotation.VisibleForTesting;
import androidx.customview.widget.ExploreByTouchHelper;
import com.facebook.infer.annotation.Nullsafe;
import com.facebook.litho.Component.RenderData;
import com.facebook.litho.annotations.LayoutSpec;
import com.facebook.litho.annotations.OnAttached;
import com.facebook.litho.annotations.OnDetached;

/** Base class for all component generated via the Spec API (@LayoutSpec and @MountSpec). */
@Nullsafe(Nullsafe.Mode.LOCAL)
public abstract class SpecGeneratedComponent extends Component implements EventTriggerTarget {

  private final String mSimpleName;

  protected SpecGeneratedComponent(String simpleName) {
    mSimpleName = simpleName;
  }

  @VisibleForTesting
  protected SpecGeneratedComponent(int identityHashCode, String simpleName) {
    super(identityHashCode);
    mSimpleName = simpleName;
  }

  /** Should only be used by logging to provide more readable messages. */
  @Override
  public final String getSimpleName() {
    final Component delegate = getSimpleNameDelegate();
    if (delegate == null) {
      return mSimpleName;
    }

    return mSimpleName + "(" + getFirstNonSimpleNameDelegate(delegate).getSimpleName() + ")";
  }

  /**
   * @return the Component this Component should delegate its getSimpleName calls to. See {@link
   *     LayoutSpec#simpleNameDelegate()}
   */
  protected @Nullable Component getSimpleNameDelegate() {
    return null;
  }

  private static Component getFirstNonSimpleNameDelegate(Component component) {
    Component current = component;
    while (current instanceof SpecGeneratedComponent
        && ((SpecGeneratedComponent) current).getSimpleNameDelegate() != null) {
      current = ((SpecGeneratedComponent) current).getSimpleNameDelegate();
    }
    return current;
  }

  @Override
  protected RenderResult render(ComponentContext c, int widthSpec, int heightSpec) {
    if (Component.isLayoutSpecWithSizeSpec(this)) {
      return new RenderResult(onCreateLayoutWithSizeSpec(c, widthSpec, heightSpec));
    } else {
      return new RenderResult(onCreateLayout(c));
    }
  }

  /**
   * Generate a tree of {@link ComponentLayout} representing the layout structure of the {@link
   * Component} and its sub-components.
   *
   * @param c The {@link ComponentContext} to build a {@link ComponentLayout} tree.
   */
  protected Component onCreateLayout(ComponentContext c) {
    return Column.create(c).build();
  }

  protected Component onCreateLayoutWithSizeSpec(
      ComponentContext c, int widthSpec, int heightSpec) {
    return Column.create(c).build();
  }

  @Override
  protected boolean usesLocalStateContainer() {
    return true;
  }

  @Override
  @Nullable
  public final Object acceptTriggerEvent(
      EventTrigger eventTrigger, Object eventState, Object[] params) {
    try {
      return acceptTriggerEventImpl(eventTrigger, eventState, params);
    } catch (Exception e) {
      if (eventTrigger.mComponentContext != null) {
        ComponentUtils.handle(eventTrigger.mComponentContext, e);
        return null;
      } else {
        throw e;
      }
    }
  }

  protected @Nullable Object acceptTriggerEventImpl(
      EventTrigger eventTrigger, Object eventState, Object[] params) {
    // Do nothing by default
    return null;
  }

  protected void applyPreviousRenderData(RenderData previousRenderData) {}

  protected void bindDynamicProp(int dynamicPropIndex, @Nullable Object value, Object content) {
    throw new RuntimeException("Components that have dynamic Props must override this method");
  }

  // This will not be needed anymore for stateless components.
  protected void copyInterStageImpl(
      final @Nullable InterStagePropsContainer copyIntoInterStagePropsContainer,
      final @Nullable InterStagePropsContainer copyFromInterStagePropsContainer) {}

  // This will not be needed anymore for stateless components.
  protected void copyPrepareInterStageImpl(
      final @Nullable PrepareInterStagePropsContainer copyIntoInterStagePropsContainer,
      final @Nullable PrepareInterStagePropsContainer copyFromInterStagePropsContainer) {}

  protected void createInitialState(ComponentContext c) {}

  protected @Nullable InterStagePropsContainer createInterStagePropsContainer() {
    return null;
  }

  protected @Nullable PrepareInterStagePropsContainer createPrepareInterStagePropsContainer() {
    return null;
  }

  protected void dispatchOnEnteredRange(ComponentContext c, String name) {
    // Do nothing by default
  }

  protected void dispatchOnExitedRange(ComponentContext c, String name) {
    // Do nothing by default
  }

  /**
   * Get extra accessibility node id at a given point within the component.
   *
   * @param x x co-ordinate within the mounted component
   * @param y y co-ordinate within the mounted component
   * @return the extra virtual view id if one is found, otherwise {@code
   *     ExploreByTouchHelper#INVALID_ID}
   */
  protected int getExtraAccessibilityNodeAt(
      final ComponentContext c,
      final int x,
      final int y,
      final @Nullable InterStagePropsContainer InterStagePropsContainer) {
    return ExploreByTouchHelper.INVALID_ID;
  }

  /**
   * The number of extra accessibility nodes that this component wishes to provides to the
   * accessibility system.
   *
   * @return the number of extra nodes
   */
  protected int getExtraAccessibilityNodesCount(
      final ComponentContext c, final @Nullable InterStagePropsContainer interStagePropsContainer) {
    return 0;
  }

  protected final @Nullable InterStagePropsContainer getInterStagePropsContainer(
      final ComponentContext scopedContext,
      final @Nullable InterStagePropsContainer interStagePropsContainer) {
    return interStagePropsContainer;
  }

  protected final @Nullable PrepareInterStagePropsContainer getPrepareInterStagePropsContainer(
      final ComponentContext scopedContext) {
    return scopedContext.getScopedComponentInfo().getPrepareInterStagePropsContainer();
  }

  /**
   * @return true if the component implements {@link OnAttached} or {@link OnDetached} delegate
   *     methods.
   */
  protected boolean hasAttachDetachCallback() {
    return false;
  }

  /**
   * This method is overridden in the generated component to return true if and only if the
   * Component Spec has an OnError lifecycle callback.
   */
  protected boolean hasOwnErrorHandler() {
    return false;
  }

  /** @return true if the Component is using state, false otherwise. */
  protected boolean hasState() {
    return false;
  }

  /**
   * Whether this component will populate any accessibility nodes or events that are passed to it.
   *
   * @return true if the component implements accessibility info
   */
  protected boolean implementsAccessibility() {
    return false;
  }

  /**
   * Whether this component will expose any virtual views to the accessibility framework
   *
   * @return true if the component exposes extra accessibility nodes
   */
  protected boolean implementsExtraAccessibilityNodes() {
    return false;
  }

  /** @return true if Mount uses @FromMeasure or @FromOnBoundsDefined parameters. */
  protected boolean isMountSizeDependent() {
    return false;
  }

  protected boolean needsPreviousRenderData() {
    return false;
  }

  /**
   * Called when the component is attached to the {@link ComponentTree}.
   *
   * @param c The {@link ComponentContext} the Component was constructed with.
   */
  protected void onAttached(ComponentContext c) {}

  /**
   * Called after the layout calculation is finished and the given {@link ComponentLayout} has its
   * bounds defined. You can use {@link ComponentLayout#getX()}, {@link ComponentLayout#getY()},
   * {@link ComponentLayout#getWidth()}, and {@link ComponentLayout#getHeight()} to get the size and
   * position of the component in the layout tree.
   *
   * @param c The {@link Context} used by this component.
   * @param layout The {@link ComponentLayout} with defined position and size.
   */
  protected void onBoundsDefined(
      final ComponentContext c,
      final ComponentLayout layout,
      @Nullable InterStagePropsContainer interStagePropsContainer) {}

  /**
   * Called when the component is detached from the {@link ComponentTree}.
   *
   * @param c The {@link ComponentContext} the Component was constructed with.
   */
  protected void onDetached(ComponentContext c) {}

  /**
   * Called to provide a fallback if a supported lifecycle method throws an exception. It is
   * possible to either recover from the error here or reraise the exception to catch it at a higher
   * level or crash the application.
   *
   * @see com.facebook.litho.annotations.OnError
   * @param c The {@link ComponentContext} the Component was constructed with.
   * @param e The exception caught.
   */
  protected void onError(ComponentContext c, Exception e) {
    EventHandler<ErrorEvent> eventHandler = c.getErrorEventHandler();
    if (eventHandler == null) {
      if (e instanceof RuntimeException) {
        throw (RuntimeException) e;
      } else {
        throw new RuntimeException(e);
      }
    }
    ErrorEvent errorEvent = new ErrorEvent();
    errorEvent.exception = e;
    errorEvent.componentTree = c != null ? c.getComponentTree() : null;
    eventHandler.dispatchEvent(errorEvent);
  }

  protected void onMeasure(
      final ComponentContext c,
      final ComponentLayout layout,
      final int widthSpec,
      final int heightSpec,
      final Size size,
      final @Nullable InterStagePropsContainer interStagePropsContainer) {
    throw new IllegalStateException(
        "You must override onMeasure() if you return true in canMeasure(), "
            + "Component is: "
            + this);
  }
}
