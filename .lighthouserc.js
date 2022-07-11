module.exports = {
  ci: {
    collect: {
      staticDistDir: '.next'
    },
    assert: {
      preset: 'lighthouse:recommended'
      // assert options here
    },
    upload: {
      // upload options here
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    }
  }
};
