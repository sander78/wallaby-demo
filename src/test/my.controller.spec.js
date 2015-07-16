var module = angular.mock.module;

describe("My controller", function() {
  beforeEach(module("wallaby-test"));

  it("should be awesome", function () {
    assertThat(0).equals(0);
  })

});
