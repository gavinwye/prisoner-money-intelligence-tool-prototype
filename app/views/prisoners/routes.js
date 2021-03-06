module.exports = function (router, content) {

  router.post('/prisoners/', function (req, res) {
    res.redirect('/prisoners/results')
  })

  router.post('/prisoners/results', function (req, res) {
    res.redirect('/prisoners/global-results')
  })

  // This is for the credits data
  router.get('/prisoners/', function(req, res) {
    // location of credit data json file
    var prisonerData = require('../../data/prisoner_list.json');
    res.render('prisoners/index',
    {
      prisoners: prisonerData
    });
  });

  // This is for the credits data
  router.get('/prisoners/results', function(req, res) {
    // location of credit data json file
    var prisonerData = require('../../data/prisoner_list.json');
    let terms = (req.session.data.prisonerSearch || '').trim().split(/\s+/).map(term => term.toLowerCase())
    let prisoners = prisonerData.filter(function (prisoner) {
      for (let term of terms) {
        for (let field of [prisoner.prisoner_name, prisoner.prisoner_number]) {
          if ((field || '').toLowerCase().indexOf(term) >= 0) {
            return true
          }
        }
      }
      return false
    })
    res.render('prisoners/results',
    {
      prisoners: prisoners
    });
  });

  // This is for the credits data
  router.get('/prisoners/results-other-prisons', function(req, res) {
    // location of credit data json file
    var prisonerData = require('../../data/prisoner_list.json');
    let terms = (req.session.data.prisonerSearch || '').trim().split(/\s+/).map(term => term.toLowerCase())
    let prisoners = prisonerData.filter(function (prisoner) {
      for (let term of terms) {
        for (let field of [prisoner.prisoner_name, prisoner.prisoner_number]) {
          if ((field || '').toLowerCase().indexOf(term) >= 0) {
            return true
          }
        }
      }
      return false
    })
    res.render('prisoners/results-other-prisons',
    {
      prisoners: prisoners
    });
  });


  // END__######################################################################################################
}
