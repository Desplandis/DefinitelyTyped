declare namespace echarts {
    namespace EChartOption {
        /**
         * **Theme river**
         *
         * It is a special flow graph which is mainly used to present the changes
         * of an event or theme during a period.
         *
         * **Sample:**
         *
         * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver)
         *
         * **visual encoding:**
         *
         * The ribbon-shape river branches in different colors in theme river
         * encode variable events or themes.
         * The width of river branches encode the value of the original dataset.
         *
         * What's more, the time attribute of the orinigal dataset would map
         * to a single time axis.
         *
         * @see https://echarts.apache.org/en/option.html#series-themeRiver
         */
        interface SeriesThemeRiver {
            /**
             * @default
             * "themeRiver"
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.type
             */
            type?: string | undefined;

            /**
             * Component ID, not specified by default.
             * If specified, it can be used to refer the component in option
             * or API.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.id
             */
            id?: string | undefined;

            /**
             * Series name used for displaying in
             * [tooltip](https://echarts.apache.org/en/option.html#tooltip)
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.name
             */
            name?: string | undefined;

            /**
             * `zlevel` value of all graphical elements in the series.
             *
             * `zlevel` is used to make layers with Canvas.
             * Graphical elements with different `zlevel` values will be placed
             * in different Canvases, which is a common optimization technique.
             * We can put those frequently changed elements (like those with
             * animations) to a seperate `zlevel`.
             * Notice that too many Canvases will increase memory cost, and
             * should be used carefully on mobile phones to avoid crash.
             *
             * Canvases with bigger `zlevel` will be placed on Canvases with
             * smaller `zlevel`.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.zlevel
             */
            zlevel?: number | undefined;

            /**
             * `z` value of all graghical elements in , which controls order
             * of drawing graphical components.
             * Components with smaller `z` values may be overwritten by those
             * with larger `z` values.
             *
             * `z` has a lower priority to `zlevel`, and will not create new
             * Canvas.
             *
             * @default
             * 2
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.z
             */
            z?: number | undefined;

            /**
             * Distance between thmemRiver component and the left side of the
             * container.
             *
             * `left` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`;
             * and it can also be `'left'`, `'center'`, or `'right'`.
             *
             * If the `left` value is set to be `'left'`, `'center'`, or `'right'`,
             * then the component will be aligned automatically based on position.
             *
             * @default
             * 5%
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.left
             */
            left?: number | string | undefined;

            /**
             * Distance between thmemRiver component and the top side of the
             * container.
             *
             * `top` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`;
             * and it can also be `'top'`, `'middle'`, or `'bottom'`.
             *
             * If the `left` value is set to be `'top'`, `'middle'`, or `'bottom'`,
             * then the component will be aligned automatically based on position.
             *
             * @default
             * 5%
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.top
             */
            top?: number | string | undefined;

            /**
             * Distance between thmemRiver component and the right side of the
             * container.
             *
             * `right` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`.
             *
             * @default
             * 5%
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.right
             */
            right?: number | string | undefined;

            /**
             * Distance between thmemRiver component and the bottom side of
             * the container.
             *
             * `bottom` value can be instant pixel value like `20`; it can also
             * be percentage value relative to container width like `'20%'`.
             *
             * @default
             * 5%
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.bottom
             */
            bottom?: number | string | undefined;

            /**
             * Width of thmemRiver component.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.width
             */
            width?: number | string | undefined;

            /**
             * Height of thmemRiver component.
             *
             * **Notes:** The positional information of the whole theme river
             * view reuses the positional information of a single time axis,
             * which are left, top, right and bottom.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.height
             */
            height?: number | string | undefined;

            /**
             * coordinate. The theme river adopts sinle time axis.
             *
             * @default
             * ""single""
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.coordinateSystem
             */
            coordinateSystem?: string | undefined;

            /**
             * The boundary gap of the direction orthogonal with coordinate
             * axis in diagram, which is set to adjust the diagram position,
             * keeping it on the screen center instead of the upside or downside
             * of the screen.
             *
             * @default
             * ["10%", "10%"]
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.boundaryGap
             */
            boundaryGap?: any[] | undefined;

            /**
             * The index of single time axis, which defaults to be 0 because
             * it contains only one axis.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.singleAxisIndex
             */
            singleAxisIndex?: number | undefined;

            /**
             * `label` describes style of text labels with which each ribbon-shape
             * river branch corresponds in theme river.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.label
             */
            label?: {
                /**
                 * Whether to show label.
                 *
                 * @default
                 * "true"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.show
                 */
                show?: boolean | undefined;

                /**
                 * Label position.
                 *
                 * **Followings are the options:**
                 *
                 * + \[x, y\]
                 *
                 * Use relative percentage, or absolute pixel values to represent
                 * position of label relative to top-left corner of bounding
                 * box. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.label)
                 *
                 * + 'top'
                 *
                 * + 'left'
                 * + 'right'
                 * + 'bottom'
                 * + 'inside'
                 * + 'insideLeft'
                 * + 'insideRight'
                 * + 'insideTop'
                 * + 'insideBottom'
                 * + 'insideTopLeft'
                 * + 'insideBottomLeft'
                 * + 'insideTopRight'
                 * + 'insideBottomRight'
                 *
                 * See:
                 * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                 * .
                 *
                 * @default
                 * "left"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.position
                 */
                position?: any[] | string | undefined;

                /**
                 * Distance to the host graphic element.
                 * Works when position is string value (like `'top'`、`'insideRight'`).
                 *
                 * See:
                 * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                 * .
                 *
                 * @default
                 * 5
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.distance
                 */
                distance?: number | undefined;

                /**
                 * Rotate label, from -90 degree to 90, positive value represents
                 * rotate anti-clockwise.
                 *
                 * See:
                 * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                 * .
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rotate
                 */
                rotate?: number | undefined;

                /**
                 * Whether to move text slightly.
                 * For example: `[30, 40]` means move `30` horizontally and
                 * move `40` vertically.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.offset
                 */
                offset?: any[] | undefined;

                /**
                 * text color.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 * @default
                 * '#000'
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.color
                 */
                color?: string | undefined;

                /**
                 * font style
                 *
                 * Options are:
                 *
                 * + `'normal'`
                 * + `'italic'`
                 * + `'oblique'`
                 *
                 * @default
                 * "normal"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.fontStyle
                 */
                fontStyle?: string | undefined;

                /**
                 * font thick weight
                 *
                 * Options are:
                 *
                 * + `'normal'`
                 * + `'bold'`
                 * + `'bolder'`
                 * + `'lighter'`
                 * + 100 | 200 | 300 | 400...
                 *
                 * @default
                 * "normal"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.fontWeight
                 */
                fontWeight?: number | string | undefined;

                /**
                 * font family
                 *
                 * Can also be 'serif' , 'monospace', ...
                 *
                 * @default
                 * "sans-serif"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.fontFamily
                 */
                fontFamily?: string | undefined;

                /**
                 * font size
                 *
                 * @default
                 * 11
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.fontSize
                 */
                fontSize?: number | undefined;

                /**
                 * Line height of the text fregment.
                 *
                 * If `lineHeight` is not set in `rich`, `lineHeight` in parent
                 * level will be used. For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.label)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.lineHeight
                 */
                lineHeight?: number | undefined;

                /**
                 * Background color of the text fregment.
                 *
                 * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                 *
                 * Or image can be used, for example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.label)
                 *
                 * `width` or `height` can be specified when using background
                 * image, or auto adapted by default.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.backgroundColor
                 */
                backgroundColor?: object | string | undefined;

                /**
                 * Border color of the text fregment.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.borderColor
                 */
                borderColor?: string | undefined;

                /**
                 * Border width of the text fregment.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border radius of the text fregment.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.borderRadius
                 */
                borderRadius?: number | undefined;

                /**
                 * Padding of the text fregment, for example:
                 *
                 * + `padding: [3, 4, 5, 6]`: represents padding of `[top, right,
                 * bottom, left]`.
                 * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                 * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.padding
                 */
                padding?: any[] | number | undefined;

                /**
                 * Shadow color of the text block.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.shadowColor
                 */
                shadowColor?: string | undefined;

                /**
                 * Show blur of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text block.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Width of the text block.
                 * It is the width of the text by default.
                 * In most cases, there is no need to specify it.
                 * You may want to use it in some cases like make simple table
                 * or using background image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * `width` can also be percent string, like `'100%'`, which
                 * represents the percent of `contentWidth` (that is, the width
                 * without `padding`) of its container box.
                 * It is based on `contentWidth` because that each text fregment
                 * is layout based on the `content box`, where it makes no sense
                 * that calculating width based on `outerWith` in prectice.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.width
                 */
                width?: number | string | undefined;

                /**
                 * Height of the text block.
                 * It is the width of the text by default.
                 * You may want to use it in some cases like using background
                 * image (see `backgroundColor`).
                 *
                 * Notice, `width` and `height` specifies the width and height
                 * of the content, without `padding`.
                 *
                 * Notice, `width` and `height` only work when `rich` specified.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.height
                 */
                height?: number | string | undefined;

                /**
                 * Storke color of the text.
                 *
                 * If set as `'auto'`, the color will assigned as visual color,
                 * such as series color.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.textBorderColor
                 */
                textBorderColor?: string | undefined;

                /**
                 * Storke line width of the text.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.textBorderWidth
                 */
                textBorderWidth?: number | undefined;

                /**
                 * Shadow color of the text itself.
                 *
                 * @default
                 * "transparent"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.textShadowColor
                 */
                textShadowColor?: string | undefined;

                /**
                 * Shadow blue of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.textShadowBlur
                 */
                textShadowBlur?: number | undefined;

                /**
                 * Shadow X offset of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.textShadowOffsetX
                 */
                textShadowOffsetX?: number | undefined;

                /**
                 * Shadow Y offset of the text itself.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.textShadowOffsetY
                 */
                textShadowOffsetY?: number | undefined;

                /**
                 * "Rich text styles" can be defined in this `rich` property.
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.label)
                 *
                 * For more details, see
                 * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                 * please.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich
                 */
                rich?: {
                    /**
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E
                     */
                    [userStyle: string]: {
                        /**
                         * text color.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * ""#fff""
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.color
                         */
                        color?: string | undefined;

                        /**
                         * font style
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'italic'`
                         * + `'oblique'`
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                         */
                        fontStyle?: string | undefined;

                        /**
                         * font thick weight
                         *
                         * Options are:
                         *
                         * + `'normal'`
                         * + `'bold'`
                         * + `'bolder'`
                         * + `'lighter'`
                         * + 100 | 200 | 300 | 400...
                         *
                         * @default
                         * "normal"
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                         */
                        fontWeight?: string | number | undefined;

                        /**
                         * font family
                         *
                         * Can also be 'serif' , 'monospace', ...
                         *
                         * @default
                         * "sans-serif"
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                         */
                        fontFamily?: string | undefined;

                        /**
                         * font size
                         *
                         * @default
                         * 12
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                         */
                        fontSize?: number | undefined;

                        /**
                         * Horizontal alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'left'`
                         * + `'center'`
                         * + `'right'`
                         *
                         * If `align` is not set in `rich`, `align` in parent
                         * level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.align
                         */
                        align?: string | undefined;

                        /**
                         * Vertical alignment of text, automatic by default.
                         *
                         * Options are:
                         *
                         * + `'top'`
                         * + `'middle'`
                         * + `'bottom'`
                         *
                         * If `verticalAlign` is not set in `rich`, `verticalAlign`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                         */
                        verticalAlign?: string | undefined;

                        /**
                         * Line height of the text fregment.
                         *
                         * If `lineHeight` is not set in `rich`, `lineHeight`
                         * in parent level will be used. For example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                         */
                        lineHeight?: number | undefined;

                        /**
                         * Background color of the text fregment.
                         *
                         * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                         *
                         * Or image can be used, for example:
                         *
                         * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E)
                         *
                         * `width` or `height` can be specified when using background
                         * image, or auto adapted by default.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                         */
                        backgroundColor?: object | string | undefined;

                        /**
                         * Border color of the text fregment.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                         */
                        borderColor?: string | undefined;

                        /**
                         * Border width of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                         */
                        borderWidth?: number | undefined;

                        /**
                         * Border radius of the text fregment.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                         */
                        borderRadius?: number | undefined;

                        /**
                         * Padding of the text fregment, for example:
                         *
                         * + `padding: [3, 4, 5, 6]`: represents padding of
                         * `[top, right, bottom, left]`.
                         * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                         * + `padding: [3, 4]`: represents `padding: [3, 4,
                         * 3, 4]`.
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                         */
                        padding?: any[] | number | undefined;

                        /**
                         * Shadow color of the text block.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                         */
                        shadowColor?: string | undefined;

                        /**
                         * Show blur of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                         */
                        shadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                         */
                        shadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text block.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                         */
                        shadowOffsetY?: number | undefined;

                        /**
                         * Width of the text block.
                         * It is the width of the text by default.
                         * In most cases, there is no need to specify it.
                         * You may want to use it in some cases like make simple
                         * table or using background image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * `width` can also be percent string, like `'100%'`,
                         * which represents the percent of `contentWidth` (that
                         * is, the width without `padding`) of its container
                         * box.
                         * It is based on `contentWidth` because that each text
                         * fregment is layout based on the `content box`, where
                         * it makes no sense that calculating width based on
                         * `outerWith` in prectice.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.width
                         */
                        width?: number | string | undefined;

                        /**
                         * Height of the text block.
                         * It is the width of the text by default.
                         * You may want to use it in some cases like using background
                         * image (see `backgroundColor`).
                         *
                         * Notice, `width` and `height` specifies the width
                         * and height of the content, without `padding`.
                         *
                         * Notice, `width` and `height` only work when `rich`
                         * specified.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.height
                         */
                        height?: number | string | undefined;

                        /**
                         * Storke color of the text.
                         *
                         * If set as `'auto'`, the color will assigned as visual
                         * color, such as series color.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                         */
                        textBorderColor?: string | undefined;

                        /**
                         * Storke line width of the text.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                         */
                        textBorderWidth?: number | undefined;

                        /**
                         * Shadow color of the text itself.
                         *
                         * @default
                         * "transparent"
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                         */
                        textShadowColor?: string | undefined;

                        /**
                         * Shadow blue of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                         */
                        textShadowBlur?: number | undefined;

                        /**
                         * Shadow X offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                         */
                        textShadowOffsetX?: number | undefined;

                        /**
                         * Shadow Y offset of the text itself.
                         *
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                         */
                        textShadowOffsetY?: number | undefined;
                    };
                } | undefined;
            } | undefined;

            /**
             * style of each ribbon-shape river branch in theme river.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle
             */
            itemStyle?: {
                /**
                 * color.
                 *
                 * > Color can be represented in RGB, for example `'rgb(128,
                 * 128, 128)'`.
                 * RGBA can be used when you need alpha channel, for example
                 * `'rgba(128, 128, 128, 0.5)'`.
                 * You may also use hexadecimal format, for example `'#ccc'`.
                 * Gradient color and texture are also supported besides single
                 * colors.
                 * >
                 * > [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.itemStyle)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.color
                 */
                color?: EChartOption.Color | undefined;

                /**
                 * border color, whose format is similar to that of `color`.
                 *
                 * @default
                 * "#000"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.borderColor
                 */
                borderColor?: EChartOption.Color | undefined;

                /**
                 * border width. No border when it is set to be 0.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.borderWidth
                 */
                borderWidth?: number | undefined;

                /**
                 * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                 * `'solid'` by default.
                 *
                 * @default
                 * "solid"
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.borderType
                 */
                borderType?: string | undefined;

                /**
                 * Size of shadow blur.
                 * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                 * `shadowOffsetY` to set shadow to component.
                 *
                 * For example:
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.itemStyle)
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.shadowBlur
                 */
                shadowBlur?: number | undefined;

                /**
                 * Shadow color. Support same format as `color`.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.shadowColor
                 */
                shadowColor?: EChartOption.Color | undefined;

                /**
                 * Offset distance on the horizontal direction of shadow.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.shadowOffsetX
                 */
                shadowOffsetX?: number | undefined;

                /**
                 * Offset distance on the vertical direction of shadow.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.shadowOffsetY
                 */
                shadowOffsetY?: number | undefined;

                /**
                 * Opacity of the component.
                 * Supports value from 0 to 1, and the component will not be
                 * drawn when set to 0.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.itemStyle.opacity
                 */
                opacity?: number | undefined;
            } | undefined;

            /**
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis
             */
            emphasis?: {
                /**
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label
                 */
                label?: {
                    /**
                     * Whether to show label.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.show
                     */
                    show?: boolean | undefined;

                    /**
                     * Label position.
                     *
                     * **Followings are the options:**
                     *
                     * + \[x, y\]
                     *
                     * Use relative percentage, or absolute pixel values to
                     * represent position of label relative to top-left corner
                     * of bounding box. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.label)
                     *
                     * + 'top'
                     *
                     * + 'left'
                     * + 'right'
                     * + 'bottom'
                     * + 'inside'
                     * + 'insideLeft'
                     * + 'insideRight'
                     * + 'insideTop'
                     * + 'insideBottom'
                     * + 'insideTopLeft'
                     * + 'insideBottomLeft'
                     * + 'insideTopRight'
                     * + 'insideBottomRight'
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position)
                     * .
                     *
                     * @default
                     * "left"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.position
                     */
                    position?: any[] | string | undefined;

                    /**
                     * Distance to the host graphic element.
                     * Works when position is string value (like `'top'`、`'insideRight'`).
                     *
                     * See:
                     * [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position)
                     * .
                     *
                     * @default
                     * 5
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.distance
                     */
                    distance?: number | undefined;

                    /**
                     * Rotate label, from -90 degree to 90, positive value represents
                     * rotate anti-clockwise.
                     *
                     * See:
                     * [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation)
                     * .
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rotate
                     */
                    rotate?: number | undefined;

                    /**
                     * Whether to move text slightly.
                     * For example: `[30, 40]` means move `30` horizontally
                     * and move `40` vertically.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.offset
                     */
                    offset?: any[] | undefined;

                    /**
                     * text color.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * '#000'
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.color
                     */
                    color?: string | undefined;

                    /**
                     * font style
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'italic'`
                     * + `'oblique'`
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.fontStyle
                     */
                    fontStyle?: string | undefined;

                    /**
                     * font thick weight
                     *
                     * Options are:
                     *
                     * + `'normal'`
                     * + `'bold'`
                     * + `'bolder'`
                     * + `'lighter'`
                     * + 100 | 200 | 300 | 400...
                     *
                     * @default
                     * "normal"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.fontWeight
                     */
                    fontWeight?: string | number | undefined;

                    /**
                     * font family
                     *
                     * Can also be 'serif' , 'monospace', ...
                     *
                     * @default
                     * "sans-serif"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.fontFamily
                     */
                    fontFamily?: string | undefined;

                    /**
                     * font size
                     *
                     * @default
                     * 11
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.fontSize
                     */
                    fontSize?: number | undefined;

                    /**
                     * Line height of the text fregment.
                     *
                     * If `lineHeight` is not set in `rich`, `lineHeight` in
                     * parent level will be used. For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.label)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.lineHeight
                     */
                    lineHeight?: number | undefined;

                    /**
                     * Background color of the text fregment.
                     *
                     * Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.
                     *
                     * Or image can be used, for example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.label)
                     *
                     * `width` or `height` can be specified when using background
                     * image, or auto adapted by default.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.backgroundColor
                     */
                    backgroundColor?: object | string | undefined;

                    /**
                     * Border color of the text fregment.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.borderColor
                     */
                    borderColor?: string | undefined;

                    /**
                     * Border width of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border radius of the text fregment.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.borderRadius
                     */
                    borderRadius?: number | undefined;

                    /**
                     * Padding of the text fregment, for example:
                     *
                     * + `padding: [3, 4, 5, 6]`: represents padding of `[top,
                     * right, bottom, left]`.
                     * + `padding: 4`: represents `padding: [4, 4, 4, 4]`.
                     * + `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.padding
                     */
                    padding?: any[] | number | undefined;

                    /**
                     * Shadow color of the text block.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.shadowColor
                     */
                    shadowColor?: string | undefined;

                    /**
                     * Show blur of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text block.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Width of the text block.
                     * It is the width of the text by default.
                     * In most cases, there is no need to specify it.
                     * You may want to use it in some cases like make simple
                     * table or using background image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * `width` can also be percent string, like `'100%'`, which
                     * represents the percent of `contentWidth` (that is, the
                     * width without `padding`) of its container box.
                     * It is based on `contentWidth` because that each text
                     * fregment is layout based on the `content box`, where
                     * it makes no sense that calculating width based on `outerWith`
                     * in prectice.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.width
                     */
                    width?: number | string | undefined;

                    /**
                     * Height of the text block.
                     * It is the width of the text by default.
                     * You may want to use it in some cases like using background
                     * image (see `backgroundColor`).
                     *
                     * Notice, `width` and `height` specifies the width and
                     * height of the content, without `padding`.
                     *
                     * Notice, `width` and `height` only work when `rich` specified.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.height
                     */
                    height?: number | string | undefined;

                    /**
                     * Storke color of the text.
                     *
                     * If set as `'auto'`, the color will assigned as visual
                     * color, such as series color.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.textBorderColor
                     */
                    textBorderColor?: string | undefined;

                    /**
                     * Storke line width of the text.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.textBorderWidth
                     */
                    textBorderWidth?: number | undefined;

                    /**
                     * Shadow color of the text itself.
                     *
                     * @default
                     * "transparent"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.textShadowColor
                     */
                    textShadowColor?: string | undefined;

                    /**
                     * Shadow blue of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.textShadowBlur
                     */
                    textShadowBlur?: number | undefined;

                    /**
                     * Shadow X offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.textShadowOffsetX
                     */
                    textShadowOffsetX?: number | undefined;

                    /**
                     * Shadow Y offset of the text itself.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.textShadowOffsetY
                     */
                    textShadowOffsetY?: number | undefined;

                    /**
                     * "Rich text styles" can be defined in this `rich` property.
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.label)
                     *
                     * For more details, see
                     * [Rich Text](https://echarts.apache.org/en/option.htmltutorial.html#Rich%20Text)
                     * please.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich
                     */
                    rich?: {
                        /**
                         * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E
                         */
                        [userStyle: string]: {
                            /**
                             * text color.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * ""#fff""
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.color
                             */
                            color?: string | undefined;

                            /**
                             * font style
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'italic'`
                             * + `'oblique'`
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontStyle
                             */
                            fontStyle?: string | undefined;

                            /**
                             * font thick weight
                             *
                             * Options are:
                             *
                             * + `'normal'`
                             * + `'bold'`
                             * + `'bolder'`
                             * + `'lighter'`
                             * + 100 | 200 | 300 | 400...
                             *
                             * @default
                             * "normal"
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontWeight
                             */
                            fontWeight?: string | number | undefined;

                            /**
                             * font family
                             *
                             * Can also be 'serif' , 'monospace', ...
                             *
                             * @default
                             * "sans-serif"
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontFamily
                             */
                            fontFamily?: string | undefined;

                            /**
                             * font size
                             *
                             * @default
                             * 12
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.fontSize
                             */
                            fontSize?: number | undefined;

                            /**
                             * Horizontal alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'left'`
                             * + `'center'`
                             * + `'right'`
                             *
                             * If `align` is not set in `rich`, `align` in parent
                             * level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.align
                             */
                            align?: string | undefined;

                            /**
                             * Vertical alignment of text, automatic by default.
                             *
                             * Options are:
                             *
                             * + `'top'`
                             * + `'middle'`
                             * + `'bottom'`
                             *
                             * If `verticalAlign` is not set in `rich`, `verticalAlign`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.verticalAlign
                             */
                            verticalAlign?: string | undefined;

                            /**
                             * Line height of the text fregment.
                             *
                             * If `lineHeight` is not set in `rich`, `lineHeight`
                             * in parent level will be used. For example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.lineHeight
                             */
                            lineHeight?: number | undefined;

                            /**
                             * Background color of the text fregment.
                             *
                             * Can be color string, like `'#123234'`, `'red'`,
                             * `rgba(0,23,11,0.3)'`.
                             *
                             * Or image can be used, for example:
                             *
                             * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E)
                             *
                             * `width` or `height` can be specified when using
                             * background image, or auto adapted by default.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.backgroundColor
                             */
                            backgroundColor?: object | string | undefined;

                            /**
                             * Border color of the text fregment.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderColor
                             */
                            borderColor?: string | undefined;

                            /**
                             * Border width of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderWidth
                             */
                            borderWidth?: number | undefined;

                            /**
                             * Border radius of the text fregment.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.borderRadius
                             */
                            borderRadius?: number | undefined;

                            /**
                             * Padding of the text fregment, for example:
                             *
                             * + `padding: [3, 4, 5, 6]`: represents padding
                             * of `[top, right, bottom, left]`.
                             * + `padding: 4`: represents `padding: [4, 4, 4,
                             * 4]`.
                             * + `padding: [3, 4]`: represents `padding: [3,
                             * 4, 3, 4]`.
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.padding
                             */
                            padding?: any[] | number | undefined;

                            /**
                             * Shadow color of the text block.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowColor
                             */
                            shadowColor?: string | undefined;

                            /**
                             * Show blur of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowBlur
                             */
                            shadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetX
                             */
                            shadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text block.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.shadowOffsetY
                             */
                            shadowOffsetY?: number | undefined;

                            /**
                             * Width of the text block.
                             * It is the width of the text by default.
                             * In most cases, there is no need to specify it.
                             * You may want to use it in some cases like make
                             * simple table or using background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * `width` can also be percent string, like `'100%'`,
                             * which represents the percent of `contentWidth`
                             * (that is, the width without `padding`) of its
                             * container box.
                             * It is based on `contentWidth` because that each
                             * text fregment is layout based on the `content
                             * box`, where it makes no sense that calculating
                             * width based on `outerWith` in prectice.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.width
                             */
                            width?: number | string | undefined;

                            /**
                             * Height of the text block.
                             * It is the width of the text by default.
                             * You may want to use it in some cases like using
                             * background image (see `backgroundColor`).
                             *
                             * Notice, `width` and `height` specifies the width
                             * and height of the content, without `padding`.
                             *
                             * Notice, `width` and `height` only work when `rich`
                             * specified.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.height
                             */
                            height?: number | string | undefined;

                            /**
                             * Storke color of the text.
                             *
                             * If set as `'auto'`, the color will assigned as
                             * visual color, such as series color.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderColor
                             */
                            textBorderColor?: string | undefined;

                            /**
                             * Storke line width of the text.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textBorderWidth
                             */
                            textBorderWidth?: number | undefined;

                            /**
                             * Shadow color of the text itself.
                             *
                             * @default
                             * "transparent"
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowColor
                             */
                            textShadowColor?: string | undefined;

                            /**
                             * Shadow blue of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowBlur
                             */
                            textShadowBlur?: number | undefined;

                            /**
                             * Shadow X offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetX
                             */
                            textShadowOffsetX?: number | undefined;

                            /**
                             * Shadow Y offset of the text itself.
                             *
                             * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.label.rich.%3Cuser%20defined%20style%20name%3E.textShadowOffsetY
                             */
                            textShadowOffsetY?: number | undefined;
                        };
                    } | undefined;
                } | undefined;

                /**
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle
                 */
                itemStyle?: {
                    /**
                     * color.
                     *
                     * > Color can be represented in RGB, for example `'rgb(128,
                     * 128, 128)'`.
                     * RGBA can be used when you need alpha channel, for example
                     * `'rgba(128, 128, 128, 0.5)'`.
                     * You may also use hexadecimal format, for example `'#ccc'`.
                     * Gradient color and texture are also supported besides
                     * single colors.
                     * >
                     * > [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.itemStyle)
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.color
                     */
                    color?: EChartOption.Color | undefined;

                    /**
                     * border color, whose format is similar to that of `color`.
                     *
                     * @default
                     * "#000"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.borderColor
                     */
                    borderColor?: EChartOption.Color | undefined;

                    /**
                     * border width. No border when it is set to be 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.borderWidth
                     */
                    borderWidth?: number | undefined;

                    /**
                     * Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`.
                     * `'solid'` by default.
                     *
                     * @default
                     * "solid"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.borderType
                     */
                    borderType?: string | undefined;

                    /**
                     * Size of shadow blur.
                     * This attribute should be used along with `shadowColor`,`shadowOffsetX`,
                     * `shadowOffsetY` to set shadow to component.
                     *
                     * For example:
                     *
                     * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.emphasis.itemStyle)
                     *
                     * @default
                     * 20
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.shadowBlur
                     */
                    shadowBlur?: number | undefined;

                    /**
                     * Shadow color. Support same format as `color`.
                     *
                     * @default
                     * "rgba(0,0,0,0.8)"
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.shadowColor
                     */
                    shadowColor?: EChartOption.Color | undefined;

                    /**
                     * Offset distance on the horizontal direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.shadowOffsetX
                     */
                    shadowOffsetX?: number | undefined;

                    /**
                     * Offset distance on the vertical direction of shadow.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.shadowOffsetY
                     */
                    shadowOffsetY?: number | undefined;

                    /**
                     * Opacity of the component.
                     * Supports value from 0 to 1, and the component will not
                     * be drawn when set to 0.
                     *
                     * @see https://echarts.apache.org/en/option.html#series-themeRiver.emphasis.itemStyle.opacity
                     */
                    opacity?: number | undefined;
                } | undefined;
            } | undefined;

            /**
             * Data array of series, which can be in the following forms:
             *
             * Notice, if no `data` specified in series, and there is
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * in option, series will use the first
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * as its datasource. If `data` has been specified,
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * will not used.
             *
             * `series.datasetIndex` can be used to specify other
             * [dataset](https://echarts.apache.org/en/option.html#dataset)
             * .
             *
             * Basically, data is represented by a two-dimension array, like
             * the example below, where each colum is named as a "dimension".
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver)
             *
             * + In
             * [cartesian (grid)](https://echarts.apache.org/en/option.html#grid)
             * , "dimX" and "dimY" correspond to
             * [xAxis](https://echarts.apache.org/en/option.html#xAxis)
             * and
             * [yAxis](https://echarts.apache.org/en/option.html#yAxis)
             * repectively.
             * + In
             * [polar](https://echarts.apache.org/en/option.html#polar)
             * "dimX" and "dimY" correspond to
             * [radiusAxis](https://echarts.apache.org/en/option.html#radiusAxis)
             * 和
             * [angleAxis](https://echarts.apache.org/en/option.html#anbleAxis)
             * repectively.
             * + Other dimensions are optional, which can be used in other place.
             * For example:
             * + [visualMap](https://echarts.apache.org/en/option.html#visualMap)
             * can map one or more dimensions to viusal (color, symbol size
             * ...).
             * + [series.symbolSize](https://echarts.apache.org/en/option.html#series.symbolSize)
             * can be set as a callback function, where symbol size can be calculated
             * by values of a certain dimension.
             * + Values in other dimensions can be shown by
             * [tooltip.formatter](https://echarts.apache.org/en/option.html#tooltip.formatter)
             * or
             * [series.label.formatter](https://echarts.apache.org/en/option.html#series.label.formatter)
             * .
             *
             * Especially, when there is one and only one category axis (axis.type
             * is `'category'`), data can be simply be represented by a one-dimension
             * array, like:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver)
             *
             * **Relationship between "value" and
             * [axis.type](https://echarts.apache.org/en/option.html#xAxis.type)
             * **
             *
             * + When a dimension corresponds to a value axis (axis.type
             * is `'value'` or `'log'`):
             *
             * The value can be a `number` (like `12`) (can also be a number
             * in a `string` format, like `'12'`).
             *
             * + When a dimension corresponds to a category axis (axis.type
             * is `'category'`):
             *
             * The value should be the ordinal of the axis.data
             * (based on `0`), the string value of the axis.data.
             * For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver)
             *
             * There is an example of double category axes:
             * [Github Punchcard](https://echarts.apache.org/examples/en/editor.html?c=scatter-punchCard)
             * .
             *
             * + When a dimension corresponds to a time axis (type is `'time'`),
             * the value can be:
             *
             * + a timestamp, like `1484141700832`, which represents a UTC time.
             * + a date string, in one of the formats below:
             * + a subset of
             * [ISO 8601](http://www.ecma-international.org/ecma-262/5.1/#se
             * c-15.9.1.15)
             * , only including (all of these are treated as local time unless
             * timezone is specified, which is consistent with
             * [moment](https://momentjs.com/)
             * ):
             * + only part of year/month/date/time are specified: `'2012-03'`,
             * `'2012-03-01'`, `'2012-03-01 05'`, `'2012-03-01 05:06'`.
             * + separated by `"T"` or a space: `'2012-03-01T12:22:33.123'`,
             * `'2012-03-01 12:22:33.123'`.
             * + timezone specified: `'2012-03-01T12:22:33Z'`, `'2012-03-01T12:22:33+8000'`,
             * `'2012-03-01T12:22:33-05:00'`.
             * + other date string format (all of these are treated as local
             * time): `'2012'`, `'2012-3-1'`, `'2012/3/1'`, `'2012/03/01'`,
             * `'2009/6/12 2:00'`, `'2009/6/12 2:05:08'`, `'2009/6/12 2:05:08.123'`.
             * + a JavaScript Date instance created by user:
             * + Caution, when using a data string to create a Date instance,
             * [browser differences and inconsistencies](http://dygraphs.com/date-formats.html)
             * should be considered.
             * + For example: In chrome, `new Date('2012-01-01')` is treated
             * as a Jan 1st 2012 in UTC, while `new Date('2012-1-1')` and `new
             * Date('2012/01/01')` are treated as Jan 1st 2012 in local timezone.
             * In safari `new Date('2012-1-1')` is not supported.
             * + So if you intent to perform `new Date(dateString)`, it is strongly
             * recommended to use a time parse library (e.g.,
             * [moment](https://momentjs.com/)
             * ), or use `echarts.number.parseDate`, or check
             * [this](http://dygraphs.com/date-formats.html)
             * .
             *
             * **Customize a data item:**
             *
             * When needing to customize a data item, it can be set as an object,
             * where property `value` reprensent real value. For example:
             *
             * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver)
             *
             * **Empty value:**
             *
             * `'-'` or `null` or `undefined` or `NaN` can be used to describe
             * that a data item is not exists (ps：_not exist_ does not means
             * its value is `0`).
             *
             * For example, line chart can break when encounter an empty value,
             * and scatter chart do not display graphic elements for empty values.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.data
             */
            data?:
                | Array<void | number | string | SeriesThemeRiver.DataObject>
                | Array<Array<void | number | string | SeriesThemeRiver.DataObject>>
                | undefined;

            /**
             * tooltip settings in this series.
             *
             * @see https://echarts.apache.org/en/option.html#series-themeRiver.tooltip
             */
            tooltip?: BaseTooltip | undefined;
        }

        namespace SeriesThemeRiver {
            interface DataObject {
                /**
                 * the time attribute of time and theme.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.data.date
                 */
                date?: string | undefined;

                /**
                 * the value of an event or theme at a time point.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.data.value
                 */
                value?: number | number[] | undefined;

                /**
                 * the name of an event or theme.
                 *
                 * [see doc](https://echarts.apache.org/en/option.html#series-themeRiver.themeRiver.data)
                 *
                 * **data specification:**
                 *
                 * As what is shown above, the data format of theme river is
                 * double dimensional array.
                 * Each item of the inner array consists of the time attribute
                 * , the value at a time point and the name of an event or theme.
                 * It needs to be noticed that you should provide an event or
                 * theme with a complete time quantum as main river.
                 * Other events and themes are based on the main river.
                 * The default value of time point should be set as 0.
                 * That is to say other events or themes are included in the
                 * main river.
                 * Once they are beyond the main river, the layout would be
                 * wrong.
                 * That is because a baseline should be calculated to draw each
                 * event as ribbon shape when the whole diagram layout is calculated.
                 * As the example above, the event "SS" is a main river.
                 * After dispose, we would complete these 3 default time points
                 * with the format of \["2015/11/08",0,"DQ"\], \["2015/11/12",0,"DQ"\],
                 * ［"2015/11/13",0,"DQ"］, making it align with the main river.
                 * From what is mentioned, we could set default value on any
                 * position of a complete time period.
                 *
                 * @see https://echarts.apache.org/en/option.html#series-themeRiver.data.name
                 */
                name?: string | undefined;
            }
        }
    }
}
