import { expect } from '../test_helper';
import { LOAD_ERROR, SHOW_IMAGE, HIDE_IMAGE } from '../../src/actions/types';
import { loadError, showImage, hideImage } from '../../src/actions';


describe('actions' , () => {

  describe('load_error' , () => {
    it('has the correct type', () => {
      const action = loadError();
      expect(action.type).to.equal(LOAD_ERROR);
    });


    it('has the correct payload', () => {
      const action = loadError('An error occured while loading');
      expect(action.payload).to.equal('An error occured while loading');
    });
  });

  describe('show_image' , () => {
    it('has the correct type', () => {
      const action = showImage();
      expect(action.type).to.equal(SHOW_IMAGE);
    });

    it('has the correct ID', () => {
      const action = showImage("1234");
      expect(action.id).to.equal("1234");
    });


    it('has the correct payload', () => {
      const action = showImage();
      expect(action.payload).to.deep.equal({shown:true});
    });
  });

  describe('hide_image' , () => {
    it('has the correct type', () => {
      const action = hideImage();
      expect(action.type).to.equal(HIDE_IMAGE);
    });

    it('has the correct ID', () => {
      const action = hideImage("1234");
      expect(action.id).to.equal("1234");
    });


    it('has the correct payload', () => {
      const action = hideImage();
      expect(action.payload).to.deep.equal({shown:false});
    });
  });

});
