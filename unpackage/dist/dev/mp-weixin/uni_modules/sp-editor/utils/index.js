"use strict";
const linkFlag = "#-*=*-*=*-*=*@-link超链接标识link-@*=*-*=*-*=*-#";
function addLink(editorCtx, attr) {
  editorCtx.insertText({
    text: linkFlag
  });
  editorCtx.getContents({
    success(res) {
      let options = res.delta.ops;
      const findex = options.findIndex((item) => {
        var _a;
        return item.insert && typeof item.insert !== "object" && ((_a = item.insert) == null ? void 0 : _a.indexOf(linkFlag)) !== -1;
      });
      if (findex > -1) {
        const findOption = options[findex];
        const findAttributes = findOption.attributes;
        const [prefix, suffix] = findOption.insert.split(linkFlag);
        const handleOps = [];
        if (prefix) {
          const prefixOps = findAttributes ? {
            insert: prefix,
            attributes: findAttributes
          } : {
            insert: prefix
          };
          handleOps.push(prefixOps);
        }
        const linkOps = {
          insert: attr.text,
          attributes: {
            link: attr.href,
            textDecoration: attr.textDecoration || "none",
            // 下划线
            color: attr.color || "#007aff"
          }
        };
        handleOps.push(linkOps);
        if (suffix) {
          const suffixOps = findAttributes ? {
            insert: suffix,
            attributes: findAttributes
          } : {
            insert: suffix
          };
          handleOps.push(suffixOps);
        }
        options.splice(findex, 1);
        options.splice(findex, 0, ...handleOps);
        editorCtx.setContents({
          delta: {
            ops: options
          }
        });
        editorCtx.blur();
      }
    }
  });
}
exports.addLink = addLink;
exports.linkFlag = linkFlag;
