/* global describe, it */

var usedCarInventory = [
  {brand: 'BMW', color: 'Blue'},
  {brand: 'Mercedes', color: 'Red'},
  {brand: 'Audi', color: 'orange'}];

var carAge = [10,1,5]

;(function () {
    'use strict';


    describe('Use of _.pluck method', function () {
      describe('Plucking the brands from the objects in the array', function () {

            it('Expected to return the brands of the cars, the values', function () {

                expect(_.pluck(usedCarInventory, 'brand')).to.deep.equal(["BMW", "Mercedes", "Audi"]);
            });
        });

      describe('Plucking the brands from the objects in the array', function () {

            it('Expected to return that it is an array, the type', function () {

            expect(_.pluck(usedCarInventory, 'brand')).to.be.an("array");
            });
        });

      describe('Plucking the brands from the objects in the array', function () {

            it('Expected to return nothing', function () {

            expect(_.pluck()).to.deep.equal([]);
            });
        });

      describe('Plucking the brands from the objects in the array', function () {

      it('Expected to not be equal', function () {

            expect(_.pluck()).to.not.equal([]);
            });
        });
    });


    describe('Use of _.first method', function () {
      describe('Testing to get the first car age in the array', function () {

            it('Expected to return the first car age, the value', function () {

                expect(_.first(carAge)).to.equal(10);
            });
        });

      describe('Testing to be a number', function () {

            it('Expected to return that it is a number, the type', function () {

            expect(_.first(carAge)).to.be.a("number");
            });
        });

      describe('Testing to return nothing', function () {

            it('Expected to return nothing', function () {

            expect(_.first()).to.equal();
            });
        });

      describe('Testing for a bad argument', function () {

      it('Expected to be a bad argument', function () {

            expect(_.first()).to.not.equal(0);
            });
        });
    });

describe('Use of _.last method', function () {
  describe('Testing to get the last car age in the array', function () {

        it('Expected to return the last car age, the value', function () {

            expect(_.last(carAge)).to.equal(5);
        });
    });

  describe('Testing to be a number', function () {

        it('Expected to return that the last car age is a number, the type', function () {

        expect(_.last(carAge)).to.be.a("number");
        });
    });

  describe('Testing to return nothing', function () {

        it('Expected to return nothing', function () {

        expect(_.last()).to.equal();
        });
    });

  describe('Testing for a bad argument', function () {

  it('Expected to be a bad argument', function () {

        expect(_.last()).to.not.equal(0);
        });
    });
});

})();
