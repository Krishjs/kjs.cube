(function () {

    function Colors(color) {
        this.color = '';
    }

    Object.assign(Colors.prototype, {
        getColorCode: function () {

        }
    });

    Colors.TOP = 'WHITE';
    Colors.BOTTOM = 'YELLOW';
    Colors.LEFT = 'GREEN';
    Colors.RIGHT = 'BLUE';
    Colors.FRONT = 'RED';
    Colors.BACK = 'ORANGE';

    function Side(name) {
        this.Type = name;
        this.Pieces = [];
    }

    Side.TOP = 'WHITE';
    Side.BOTTOM = 'YELLOW';
    Side.LEFT = 'GREEN';
    Side.RIGHT = 'BLUE';
    Side.FRONT = 'RED';
    Side.BACK = 'ORANGE';

    var Cube = function (selector) {
        this.container = selector;
        this.sides = [];
        this.initSides();
    };

    Object.assign(Cube.prototype, {
        initSides: function () {

        },
        createSide: function () {

        },
        createEdges: function () {
            var index = 0;
            var edges = [];
            for (; index < 4;)
            {
                var edge = new Edges()
            }
        },
        createCorner: function () {},
        createCenter: function () {}
    });

    function Piece(name, code, colors) {
        this.Name = name;
        this.Code = code;
        this.Colors = colors;
    }

    function Corner(name, code, colors) {
        Piece.call(this, name, code, colors);
    }

    Corner.prototype = Object.create(Piece.prototype, {});

    Corner.prototype.constructor = Corner;

    function Edges(name, code, colors) {
        Piece.call(this, name, code, colors);
    }

    Edges.prototype = Object.create(Piece.prototype, {});

    Edges.prototype.constructor = Edges;

    function Center(name, code, colors) {
        Piece.call(this, name, code, colors);

    }

    Center.prototype = Object.create(Piece.prototype, {});

    Center.prototype.constructor = Center;

})();