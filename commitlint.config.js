/*
 * @Description:
 * @Version: 0.1
 * @Autor: chenyt
 * @Date: 2020-04-27 15:50:11
 * @LastEditors: chenyt
 * @LastEditTime: 2020-04-27 16:26:57
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能（feature）
                'fix', // 修补bug
                'docs', // 文档（documentation）
                'style', // 格式（不影响代码运行的变动）
                'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
                'test', // 增加测试
                'revert', // 回滚
                'config', // 构建过程或辅助工具的变动
                'chore', // 其他改动
            ],
        ],
    }
}