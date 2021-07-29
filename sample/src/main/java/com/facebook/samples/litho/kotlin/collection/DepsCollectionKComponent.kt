/*
 * Copyright (c) Facebook, Inc. and its affiliates.
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

package com.facebook.samples.litho.kotlin.collection

import android.graphics.Color
import com.facebook.litho.Column
import com.facebook.litho.Component
import com.facebook.litho.ComponentScope
import com.facebook.litho.KComponent
import com.facebook.litho.Row
import com.facebook.litho.Style
import com.facebook.litho.core.padding
import com.facebook.litho.dp
import com.facebook.litho.flexbox.flex
import com.facebook.litho.sections.widget.Collection
import com.facebook.litho.sp
import com.facebook.litho.useState
import com.facebook.litho.widget.Text

class DepsCollectionKComponent : KComponent() {

  override fun ComponentScope.render(): Component? {
    val color = useState { Color.RED }
    val size = useState { 14.sp }

    return Column(style = Style.padding(16.dp)) {
      child(
          Row {
            child(
                Button("Toggle Color") {
                  color.update(if (color.value == Color.RED) Color.BLUE else Color.RED)
                })
            child(Button("Toggle Size") { size.update(if (size.value == 14.sp) 28.sp else 14.sp) })
          })
      child(
          Collection(
              style = Style.flex(grow = 1f),
          ) {
            staticChild {
              Text("deps = null (all props)", textColor = color.value, textSize = size.value)
            }
            staticChild(deps = arrayOf(color.value)) {
              Text("deps = arrayOf(color.value)", textColor = color.value, textSize = size.value)
            }
            staticChild(deps = arrayOf(size.value)) {
              Text("deps = arrayOf(size.value)", textColor = color.value, textSize = size.value)
            }
            staticChild(deps = arrayOf()) {
              Text("deps = arrayOf()", textColor = color.value, textSize = size.value)
            }
          })
    }
  }
}
