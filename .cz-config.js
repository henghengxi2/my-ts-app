'use strict';

module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新增一个功能' },
    { value: 'fix', name: 'fix:      修复一个Bug' },
    { value: 'test', name: 'test:     添加一个测试' },
    { value: 'style', name: 'style:    代码格式、UI（不影响功能，例如空格、分号等格式修正）' },
    { value: 'docs', name: 'docs:     更新文档、注释' },
    { value: 'refactor', name: 'refactor: 代码重构' },
    { value: 'perf', name: 'perf:     改善性能' },
    { value: 'revert', name: 'revert:   代码回退' },
    { value: 'ci', name: 'ci:       更改持续集成软件的配置文件和 package 中的 scripts 命令' },
    { value: 'build', name: 'build:    变更项目构建或外部依赖（例如 webpack、gulp、npm 等）' },
    { value: 'chore', name: 'chore:    变更构建流程或辅助工具' },
  ],
  scopes: [{ name: '模块：基础设施' }, { name: '模块：行业标准工时' }],
  messages: {
    type: '选择一种你的提交类型: ',
    scope: '选择一个模块: ',
    customScope: '自定义一个模块 (可选): ',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    confirmCommit: '确定提交说明?',
  },
  subjectLimit: 100,
  allowCustomScopes: true,
  skipQuestions: ['breaking', 'footer'],
};
