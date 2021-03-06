// Import Categories view spec Grid Configuaration

describe("Import Categories view spec Grid Configuaration model", function () {
    var model, gridConfigModel, gridConfig;
    beforeEach(module("budgeting.coaSetup.importCategory"));

    beforeEach(function () {
        gridConfigModel = RealPage.spy();
        gridConfigModel._createMethods(['getMethod']);
        var spy1 = function () {
            return gridConfigModel;
        };

        module(function ($provide) {
            $provide.value("rpGridConfig", spy1);
        });

        function injector(a, b) {
            gridConfig = a();
            model = b;
        }
        inject(['rpGridConfig', 'viewSpecGridConfig', injector]);

    });

    it('To set columns,filters and headers of a grid', function () {
        expect(typeof model.get).toBe('function');
        expect(typeof model.getHeaders).toBe('function');

        var getRtrn = model.get();
        expect(getRtrn.length).toBe(2);

        var getHeadersRtrn = model.getHeaders();
        expect(getHeadersRtrn[0].length).toBe(2);
    });
});
