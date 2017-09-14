import { renderComponent , expect } from '../test_helper';
import TreeList from '../../src/components/tree_list';


describe('TreeList' , () => {
  let component;

  beforeEach(() => {
    const state=
      { "trees": {
          "Baobab": {
            "name": "Baobab",
            "species_name": "Adansonia",
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg",
            "shown": true
          },
          "Red Mangrove": {
            "name": "Red Mangrove",
            "species_name": "Rhizophora mangle",
            "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg"
          }
        }
      }
    component = renderComponent(TreeList,null,state);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a all tree-tiles', () => {
    expect(component.find('.tree-tile').length).to.equal(2);
  });

});
