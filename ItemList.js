const allReferenceList = 
[
    {
        "category": "Window",
        "subcategory":[
            {
                "subName":"",
                "list":[
                    {
                        "name":"Window",
                        "link":"./module/Window.html",
                        "brief":"図形を描画するためのウィンドウを生成する"
                    }
                ]
            },
            {
                "subName":"設定",
                "list":[
                    {
                        "name":"windowMaxSize()",
                        "link":"./module/Window_windowMaxSize.html",
                        "brief":"windowの最大サイズを変更する"
                    }
                ]
            },
            {
                "subName":"関数",
                "list":[
                    {
                        "name":"size()",
                        "link":"./module/Window_size.html",
                        "brief":"生成するウィンドウの大きさをピクセルで指定する"
                    },
                    {
                        "name":"title()",
                        "link":"./module/Window_title.html",
                        "brief":"生成するウィンドウのタイトルを設定する"
                    },
                    {
                        "name":"background()",
                        "link":"./module/Window_background.html",
                        "brief":"ウィンドウの背景色を設定する"
                    },
                    {
                        "name":"show()",
                        "link":"./module/Window_show.html",
                        "brief":"生成したウィンドウを画面に描画する"
                    },
                ]
            }
        ]
    },
    {
        "category":"Draw",
        "subcategory":[
            {
                "subName":"",
                "list":[
                    {
                        "name":"@animation()",
                        "link":"./module/Draw_animation.html",
                        "brief":"ウィンドウに表示する関数を指定し、アニメーションするかを決める"
                    }
                ]
            },
            {
                "subName":"関数",
                "list":[
                    {
                        "name":"animationSpeed()",
                        "link":"./module/Draw_animationSpeed.html",
                        "brief":"アニメーションする速度を変更する"
                    },
                    {
                        "name":"clear()",
                        "link":"./module/Draw_clear.html",
                        "brief":"これまで描画した図形や文字を全て削除する"
                    },
                    {
                        "name":"stop()",
                        "link":"./module/Draw_stop.html",
                        "brief":"描画の繰り返しを停止させる"
                    }
                ]
            }
        ]
    },
    {
        "category":"Shape",
        "subcategory":[
            {
                "subName":"",
                "list":[
                    {
                        "name":"Line",
                        "link":"./module/Shape_Line.html",
                        "brief":"開始と終了の座標を指定して直線をウィンドウに描画する"
                    },
                    {
                        "name":"Triangle",
                        "link":"./module/Shape_Triangle.html",
                        "brief":"3つの頂点の座標を指定して三角形をウィンドウに描画する"
                    },
                    {
                        "name":"Rectangle",
                        "link":"./module/Shape_Rectangle.html",
                        "brief":"左上の座標点、幅と高さを指定して長方形もしくは正方形をウィンドウに描画する"
                    },
                    {
                        "name":"Quad",
                        "link":"./module/Shape_Quad.html",
                        "brief":"4点の座標を指定して任意の四角形をウィンドウに描画する"
                    },
                    {
                        "name":"Ellipse",
                        "link":"./module/Shape_Ellipse.html",
                        "brief":"中心座標と幅、高さを指定して楕円もしくは円をウィンドウに描画する"
                    },
                    {
                        "name":"Point",
                        "link":"./module/Shape_Point.html",
                        "brief":"座標と大きさを指定して点をウィンドウに描画する"
                    },
                    {
                        "name":"Arc",
                        "link":"./module/Shape_Arc.html",
                        "brief":"中心座標と楕円の幅と高さ、開始角度、内角を指定して扇形もしくは円弧をウィンドウに描画する"
                    }
                ]
            },
            {
                "subName":"関数",
                "list":[
                    {
                        "name":"fill()",
                        "link":"./module/Shape_fill.html",
                        "brief":"図形の塗りつぶしの色を変更する"
                    },
                    {
                        "name":"noFill()",
                        "link":"./module/Shape_noFill.html",
                        "brief":"図形の塗りつぶしをなしにする"
                    },
                    {
                        "name":"outlineFill()",
                        "link":"./module/Shape_outlineFill.html",
                        "brief":"図形の枠線の色を変更する"
                    },
                    {
                        "name":"noOutline()",
                        "link":"./module/Shape_noOutline.html",
                        "brief":"図形の枠線をなしにする"
                    },
                    {
                        "name":"outlineWidth()",
                        "link":"./module/Shape_outlineWidth.html",
                        "brief":"図形の枠線の太さを変更する"
                    },
                    {
                        "name":"changeBasePoint()",
                        "link":"./module/Shape_changeBasePoint.html",
                        "brief":"図形の回転の中心となる座標を変更する"
                    },
                    {
                        "name":"rotate()",
                        "link":"./module/Shape_rotate.html",
                        "brief":"回転の中心座標を中心に指定された角度だけ図形を回転させる"
                    },
                    {
                        "name":"lineWeight()",
                        "link":"./module/Shape_lineWeight.html",
                        "brief":"描画した直線の太さを変更する"
                    },
                    {
                        "name":"outlineStyle()",
                        "link":"./module/Shape_outlineStyle.html",
                        "brief":"円弧の枠線のスタイルを変更する"
                    },
                    {
                        "name":"delete()",
                        "link":"./module/Shape_delete.html",
                        "brief":"呼び出された図形を削除する"
                    }
                ]
            }
        ]
    },
    // {
    //     "category":"Text",
    //     "subcategory":[
    //         {
    //             "subName":"",
    //             "list":[
    //                 {
    //                     "name":"Text",
    //                     "link":"./module/Text.html",
    //                     "brief":"指定したテキストをウィンドウに表示する"
    //                 }
    //             ]
    //         },
    //         {
    //             "subName":"関数",
    //             "list":[
    //                 {
    //                     "name":"font()",
    //                     "link":"./module/Text_font.html",
    //                     "brief":"フォントと文字サイズを変更する"
    //                 },
    //                 {
    //                     "name":"fill()",
    //                     "link":"./module/Text_fill.html",
    //                     "brief":"色を指定して文字色を変更する"
    //                 },
    //                 {
    //                     "name":"rotate()",
    //                     "link":"./module/Text_rotate.html",
    //                     "brief":"回転の中心座標を中心に指定された角度だけテキストを回転させる"
    //                 },
    //                 {
    //                     "name":"changeBasePoint()",
    //                     "link":"./module/Text_changeBasePoint.html",
    //                     "brief":"テキストの回転の中心となる座標を変更する"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     "category":"Image",
    //     "subcategory":[
    //         {
    //             "subName":"",
    //             "list":[
    //                 {
    //                     "name":"loadImage()",
    //                     "link":"./module/Image_loadImage.html",
    //                     "brief":"指定したファイルパスの画像を読み込む"
    //                 }
    //             ]
    //         },
    //         {
    //             "subName":"関数",
    //             "list":[
    //                 {
    //                     "name":"scale()",
    //                     "link":"./module/Image_scale.html",
    //                     "brief":"倍率を指定して画像を拡大縮小する"
    //                 },
    //                 {
    //                     "name":"changeAnchor()",
    //                     "link":"./module/Image_changeAnchor.html",
    //                     "brief":"画像を表示する座標の指定方式を切り替える"
    //                 },
    //                 {
    //                     "name":"show()",
    //                     "link":"./module/Image_show.html",
    //                     "brief":"画像をウィンドウに表示する"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        "category":"Color",
        "subcategory":[
            {
                "subName":"",
                "list":[
                    {
                        "name":"colorMode()",
                        "link":"./module/color_colorMode.html",
                        "brief":"カラーモードを指定する"
                    },
                    {
                        "name":"color()",
                        "link":"./module/color.html",
                        "brief":"3値で色を指定する"
                    }
                ]
            },
            {
                "subName":"変数",
                "list":[
                    {
                        "name":"COLOR_MODE",
                        "link":"./module/color_COLOR_MODE.html",
                        "brief":"現在のカラーモード"
                    }
                ]
            }
        ]
    },
    // {
    //     "category":"Mouse",
    //     "subcategory":[
    //         {
    //             "subName":"",
    //             "list":[
    //                 {
    //                     "name":"@mouseMoved",
    //                     "link":"./module/Mouse_mouseMoved.html",
    //                     "brief":"マウスが移動した時に実行したい関数を指定する"
    //                 },
    //                 {
    //                     "name":"@mousePressed",
    //                     "link":"./module/Mouse_mousePressed.html",
    //                     "brief":"マウスのボタンが押された時に実行したい関数を指定する"
    //                 },
    //                 {
    //                     "name":"@mouseClicked",
    //                     "link":"./module/Mouse_mouseClicked.html",
    //                     "brief":"マウスのボタンを押して話した時に実行したい関数を指定する"
    //                 },
    //                 {
    //                     "name":"@mouseDragged",
    //                     "link":"./module/Mouse_mouseDragged.html",
    //                     "brief":"マウスのボタンを押して動かした時に実行したい関数を指定する"
    //                 }
    //             ]
    //         },
    //         {
    //             "subName":"変数",
    //             "list":[
    //                 {
    //                     "name":"X",
    //                     "link":"./module/Mouse_X.html",
    //                     "brief":"マウスカーソルがある現在のX座標"
    //                 },
    //                 {
    //                     "name":"Y",
    //                     "link":"./module/Mouse_Y.html",
    //                     "brief":"マウスカーソルがある現在のY座標"
    //                 },
    //                 {
    //                     "name":"pressX",
    //                     "link":"./module/Mouse_pressX.html",
    //                     "brief":"マウスボタンを押したマウスカーソルのX座標"
    //                 },
    //                 {
    //                     "name":"pressY",
    //                     "link":"./module/Mouse_pressY.html",
    //                     "brief":"マウスボタンを押したマウスカーソルのY座標"
    //                 },
    //                 {
    //                     "name":"clickX",
    //                     "link":"./module/Mouse_clickX.html",
    //                     "brief":"マウスボタンを押して離した時のマウスカーソルのX座標"
    //                 },
    //                 {
    //                     "name":"clickY",
    //                     "link":"./module/Mouse_clickY.html",
    //                     "brief":"マウスボタンを押して離した時のマウスカーソルのY座標"
    //                 },
    //                 {
    //                     "name":"pressButton",
    //                     "link":"./module/Mouse_pressButton.html",
    //                     "brief":"押されたマウスボタンの種類"
    //                 },
    //                 {
    //                     "name":"isPressed",
    //                     "link":"./module/Mouse_isPressed.html",
    //                     "brief":"現在マウスボタンが押されているか"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     "category":"Keyboard",
    //     "subcategory":[
    //         {
    //             "subName":"",
    //             "list":[
    //                 {
    //                     "name":"@keyPressed",
    //                     "link":"./module/Keyboard_keyPressed.html",
    //                     "brief":"キーボードのいずれかのキーが押されている時に実行したい関数を指定する"
    //                 },
    //                 {
    //                     "name":"@keyReleased",
    //                     "link":"./module/Keyboard_keyReleased.html",
    //                     "brief":"キーボードのいずれかのキーが離された時に実行したい関数を指定する"
    //                 }
    //             ]
    //         },
    //         {
    //             "subName":"変数",
    //             "list":[
    //                 {
    //                     "name":"key",
    //                     "link":"./module/Keyboard_key.html",
    //                     "brief":"押されたキー"
    //                 },
    //                 {
    //                     "name":"code",
    //                     "link":"./module/Keyboard_code.html",
    //                     "brief":"押されたキーのキー番号"
    //                 },
    //                 {
    //                     "name":"char",
    //                     "link":"./module/Keyboard_char.html",
    //                     "brief":"押されたキーで入力される文字"
    //                 },
    //                 {
    //                     "name":"isPressed",
    //                     "link":"./module/Keyboard_isPressed.html",
    //                     "brief":"現在キーボードのキーが押されているか"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     "category":"Date",
    //     "subcategory":[
    //         {
    //             "subName":"",
    //             "list":[
    //                 {
    //                     "name":"date()",
    //                     "link":"./module/Data_date.html",
    //                     "brief":"現在の年月日"
    //                 },
    //                 {
    //                     "name":"year()",
    //                     "link":"./module/Data_year.html",
    //                     "brief":"現在の西暦年"
    //                 },
    //                 {
    //                     "name":"month()",
    //                     "link":"./module/Data_month.html",
    //                     "brief":"現在の月"
    //                 },
    //                 {
    //                     "name":"day()",
    //                     "link":"./module/Data_day.html",
    //                     "brief":"現在の日付"
    //                 },
    //                 {
    //                     "name":"hour()",
    //                     "link":"./module/Data_hour.html",
    //                     "brief":"現在の時間"
    //                 },
    //                 {
    //                     "name":"minute()",
    //                     "link":"./module/Data_minute.html",
    //                     "brief":"現在の分"
    //                 },
    //                 {
    //                     "name":"second()",
    //                     "link":"./module/Data_second.html",
    //                     "brief":"現在の秒"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     "category":"Music",
    //     "subcategory":[
    //         {
    //             "subname":"",
    //             "list":[
    //                 {
    //                     "name":"Music",
    //                     "link":"./module/Music.html",
    //                     "brief":""
    //                 }
    //             ]
    //         },
    //         {
    //             "subname":"関数",
    //             "list":[
    //                 {
    //                     "name":"loadFile()",
    //                     "link":"./module/Music_loadFile.html",
    //                     "brief":""
    //                 },
    //                 {
    //                     "name":"play()",
    //                     "link":"./module/Music_play.html",
    //                     "brief":""
    //                 },
    //                 {
    //                     "name":"stop()",
    //                     "link":"./module/Music_stop.html",
    //                     "brief":""
    //                 }
    //             ]
    //         }
    //     ]
    // }
]
