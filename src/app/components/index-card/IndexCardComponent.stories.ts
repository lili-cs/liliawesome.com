import { Meta, Story } from '@storybook/angular';
import { IndexCardComponent } from './index-card.component';

export default {
    title: 'IndexCardComponent',
    component: IndexCardComponent
} as Meta;

const Template: Story = (args) => ({
    props: args
});

export const ProfileIndexCard = Template.bind({});
ProfileIndexCard.args = {
    imgSrc: 'assets/images/swing.jpg',
    shape: 'circle'
};