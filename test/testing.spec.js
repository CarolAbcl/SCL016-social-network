import { topMenu } from '../src/lib/components/topMenu.js';
import { footer } from '../src/lib/components/footer.js';
import { feedBuilt } from '../src/lib/views/feedView.js';
import { profileBuilt } from '../src/lib/views/userProfile.js';
import { editPostModal } from '../src/lib/components/modalPostEdit.js';

describe('html templates', () => {
  it('should be a html template', () => {
    const el = topMenu();
    expect(el instanceof HTMLElement).toBe(true);
  });
  it('it should be a html template', () => {
    const footerhtml = footer();
    expect(footerhtml instanceof HTMLElement).toBe(true);
  });
});
  describe ('verifies if the sentence is a function', () =>{
  it ('should be a function', () => {
    const feed = feedBuilt();
    expect(typeof feed).toBe('function');
  });
  it ('shoul be a function too', () => {
    const profile = profileBuilt();
    expect(typeof profile).toBe('function');
  })
});
