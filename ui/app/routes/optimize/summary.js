import Route from '@ember/routing/route';

export default class OptimizeSummaryRoute extends Route {
  breadcrumbs(model) {
    if (!model) return [];

    return [
      {
        label: model.slug.replace('/', ' / '),
        args: ['optimize.summary', model.slug],
      },
    ];
  }

  async model({ jobNamespace, slug }) {
    return this.modelFor('optimize').find(summary => summary.slug === slug && summary.jobNamespace === jobNamespace);
  }

  async afterModel(model) {
    if (!model) {
      this.transitionTo('optimize');
    }
  }
}
