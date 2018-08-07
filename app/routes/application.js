// app/routes/application.js
import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

export default Route.extend({
    model() {
        let doubt = EmberObject.create({
            title: 'Doubt',
            description: `
                But he said to them, “Unless I see the nail marks in his hands
                and put my finger where the nails were, and put my hand into his
                side, I will not believe.” John 20:24-29
                `,
            infectious: 3
        })

        let isolation = EmberObject.create({
            title: 'Isolation',
            description: `
                I know always that I am an outsider; a stranger in this century
                and among those who are still men. -HP Lovecraft, "The Outsider"
            `,
            infectious: 2
        })

        let paranoia = EmberObject.create({
            title: 'Paranoia',
            description: `
                There is no such thing as paranoia. Your worst fears can come
                true at any moment. - Hunter Thompson
            `,
            infectious: 1
        })

        return A([doubt, isolation, paranoia]);
    }
});
