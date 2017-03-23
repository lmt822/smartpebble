/**
 * GET /
 * MyPebbles page.
 */

exports.getMyPebbles = (req, res) => {
  res.render('MyPebbles', {
    title: 'MyPebbles'
  });
};