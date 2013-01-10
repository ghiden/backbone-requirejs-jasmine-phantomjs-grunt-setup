define(['models/todo'], function(Todo) {
  describe('Model::Todo', function () {

    describe('model', function () {
      it('should have default values', function () {
        var t = new Todo();

        expect(t.get("title")).toEqual("");
      });
    });

  });
});
