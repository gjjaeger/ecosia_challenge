import { renderComponent , expect } from '../test_helper';
import TreeTile from '../../src/components/tree_tile';
import 'jsdom-global/register';


describe('TreeTile' , () => {
  let component;
  let cleanup;


  afterEach(() => cleanup());

  beforeEach(() => {
    const state=
      { "trees": {
          "Baobab": {
            "name": "Baobab",
            "species_name": "Adansonia",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg"
          },
          "Red Mangrove": {
            "name": "Red Mangrove",
            "species_name": "Rhizophora mangle",
            "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg"
          }
        }
      }
    // const ownProps = { name: "Baobab" };
    cleanup = require('jsdom-global')()
    const props = { name: "Baobab", species_name: "Adansonia", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg" };
    component = renderComponent(TreeTile,props,state);

  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a tree-tile', () => {
    expect(component.find('.tree-tile')).to.exist;
  });

  describe('clicking button' , () => {
    beforeEach(() => {
      component.find('.image-button').simulate('click');
    });

    it('changes button text', () => {
      expect(component.find('.image-button')).to.have.text('Hide Image');
    });


    it('shows image', () => {
      expect(component.find('.tree-image')).to.exist;
    });
    describe('clicking button again' , () => {
      beforeEach(() => {
        component.find('.image-button').simulate('click');
      });

      it('changes button text', () => {
        expect(component.find('.image-button')).to.have.text('Show Image');
      });


      it('shows image', () => {
        expect(component.find('.tree-image')).not.to.exist;
      });

    });
  });


});
