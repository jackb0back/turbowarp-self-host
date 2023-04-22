(function(Scratch) {
  'use strict';

  class JavaScriptCommand {
    getInfo () {
      return {
        id: 'SJS',
        name: 'Scratch JS',
        blocks: [
          {
            opcode: 'run',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Run JavaScript [code]',
            arguments: {
              code: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'console.log("Hello, world!");'
              }
            },
            blockIconURI: 'data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 70 70%22%3E%3Crect width%3D%2270%22 height%3D%2270%22 fill%3D%22black%22%2F%3E%3C%2Fsvg%3E'
          }
        ]
      };
    }

    run (args, util) {
      const code = args.code;
      try {
        eval(code);
      } catch (error) {
        console.error(error);
      }
    }
  }

  Scratch.extensions.register(new JavaScriptCommand());
})(Scratch);
