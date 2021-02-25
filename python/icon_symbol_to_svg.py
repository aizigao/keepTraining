import os
import shutil
import re
import requests
import sys


def get_svgs_from_js_link(fileLink):
    # -- 获取内容
    file_content = str(requests.get(fileLink).content)

    # --- 从js中获取svg内容
    svg_str_regex = r"\<svg\>(.*?)\<\/svg\>"
    matches = re.findall(svg_str_regex, file_content)

    # 有svg时
    if len(matches):
        svg_str = re.sub(r'symbol', 'svg', matches[0])
        svg_str = re.sub('</svg>', '</svg>@@@', svg_str)
        svg_list = svg_str.split('@@@')

        # 清理dist
        if os.path.exists('./dist'):
            shutil.rmtree("./dist")
        os.mkdir('./dist')

        for svgContent in svg_list:
            if svgContent:
                fileName = re.findall(r'id=\"(.*?)\"', svgContent)[0]
                print('写入icon %s' % fileName)
                f = open("./dist/%s.svg" % fileName, "a")
                f.write(svgContent)
                f.close()

    print('搞定啦!!!')


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print('使用方式\n python3 ./icon_symbol_to_svg http://at.alicdn.com/t/font_1760743_cqc31zkvkvd.js')
    else:
        get_svgs_from_js_link(sys.argv[1])
