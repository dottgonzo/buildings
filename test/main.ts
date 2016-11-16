import Place from '../index'

import * as chai from 'chai'




const expect = chai.expect
let P: Place
before(() => {
    P = new Place()
})

describe('basic tests', () => {
    it('works', () => {
        expect(P).to.be.ok
        console.log(P)
    })

})
