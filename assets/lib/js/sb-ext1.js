var ext1 = function() {};

/**
 * @return {object} This extension's metadata.
 */
ext1.prototype.getInfo = function() {
    return {
        id: 'ntespExts1',
        name: 'sb-ext1.js',
        iconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DE' + 'UIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
        docsURI: 'https://noteswiper.github.io/documentation/sb-ext1_js/',
        blocks: [
            {
                opcode: 'noop',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'do Nothing',
                func: 'noop'
            },
            {
                opcode:'conditional',
                blockType: Scratch.BlockType.CONDITIONAL,
                branchCount: 4,
                isTerminal: true,
                blockAllThreads: false,
                text: 'choose [BRANCH]',
                arguments: {
                    BRANCH: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    }
                },
                func: 'noop'
            },
            {
                opcode: 'reporter',
                blockType: Scratch.BlockType.REPORTER,
                branchCount: 0,
                isTerminal: true,
                blockAllThreads: false,
                text: 'letter [LETTER_NUM] of [TEXT]',
                arguments: {
                    LETTER_NUM: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    },
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'text'
                    },
                    func: 'reporter',
                    filter: ['ntespExts1.wedo2', 'sprite', 'stage']
                }
            }
        ]
    }
};