/**
 * Header as Jumbotron
 */
var HeaderIntro = React.createClass({
    render: function() {
        return(
            <section className="jumbotron jumbotron-fluid">
                {this.props.children}
            </section>
        );
    }
});
/**
 * Heading for Jumbotron Header
 */
HeaderIntro.Heading = React.createClass({
    render: function() {
        return(
            <div className="container">
                <h1 className="display-3">Jobify App</h1>
                <p className="lead">Your First Professional Social Network for Job Seekers</p>
            </div>
        );
    }
});
/**
 * Container for Profiles
 */
var Profiles = React.createClass({
    render: function() {
        return(
            <section className="container">
            {this.props.children}
            </section>
        );
    }
});
/**
 * Card Columns in Masonry Style
 */
Profiles.Cards = React.createClass({
    render: function() {
        var profiles = this.props.users.map(function(user, id) {
            return <Profiles.Card key={id} user={user} />
        });
        return(
            <div className="card-columns">
                {profiles}
            </div>
        );
    }
});
/**
 * Profiles in Card Shape
 */
Profiles.Card = React.createClass({
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    render: function() {
        var firstName = this.capitalize(this.props.user.name.first),
            lastName = this.capitalize(this.props.user.name.last),
            thumb = this.props.user.picture.large;
        return(
            <div className="card mb-sm-2">
                <img className="card-img ml-3 mt-3" src={thumb} alt={firstName + ' ' + lastName} />
                <div className="card-block">
                    <h4 className="card-title">{firstName} {lastName}</h4>
                    <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={"mailto:" + this.props.user.email} className="btn btn-sm btn-outline-primary">Hire me!</a>
                </div>
            </div>
        );
    }
});
/**
 * The Actual App
 */
var App = React.createClass({
    render: function() {
        return(
            <div>
                <HeaderIntro>
                    <HeaderIntro.Heading />
                </HeaderIntro>
                <Profiles>
                    <Profiles.Cards users={this.props.users} />
                </Profiles>
            </div>
        );
    }
});

var users = [
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "dolores",
        "last": "wagner"
      },
      "email": "dolores.wagner@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/22.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "clayton",
        "last": "jenkins"
      },
      "email": "clayton.jenkins@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/1.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "gustav",
        "last": "johansen"
      },
      "email": "gustav.johansen@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/87.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "jeffrey",
        "last": "parker"
      },
      "email": "jeffrey.parker@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "norma",
        "last": "elliott"
      },
      "email": "norma.elliott@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/30.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/30.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/30.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "nina",
        "last": "howell"
      },
      "email": "nina.howell@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/67.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "jared",
        "last": "hamilton"
      },
      "email": "jared.hamilton@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/27.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "zoe",
        "last": "butler"
      },
      "email": "zoe.butler@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/45.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "andreas",
        "last": "møller"
      },
      "email": "andreas.møller@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/9.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "isabella",
        "last": "andersen"
      },
      "email": "isabella.andersen@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/92.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "morgane",
        "last": "colin"
      },
      "email": "morgane.colin@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/11.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "سام",
        "last": "صدر"
      },
      "email": "سام.صدر@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "begüm",
        "last": "denkel"
      },
      "email": "begüm.denkel@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "purificacion",
        "last": "moreno"
      },
      "email": "purificacion.moreno@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "mathieu",
        "last": "martinez"
      },
      "email": "mathieu.martinez@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/21.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "eduardo",
        "last": "gimenez"
      },
      "email": "eduardo.gimenez@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "ثنا",
        "last": "احمدی"
      },
      "email": "ثنا.احمدی@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/62.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "lamia",
        "last": "fuhler"
      },
      "email": "lamia.fuhler@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/38.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "noemie",
        "last": "berger"
      },
      "email": "noemie.berger@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "emma",
        "last": "savela"
      },
      "email": "emma.savela@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/60.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "frieda",
        "last": "dietrich"
      },
      "email": "frieda.dietrich@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "ricky",
        "last": "mason"
      },
      "email": "ricky.mason@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/53.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "monsieur",
        "first": "owen",
        "last": "roger"
      },
      "email": "owen.roger@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "monsieur",
        "first": "aubin",
        "last": "masson"
      },
      "email": "aubin.masson@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "nooa",
        "last": "saarinen"
      },
      "email": "nooa.saarinen@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/87.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "frida",
        "last": "mortensen"
      },
      "email": "frida.mortensen@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/78.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/78.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/78.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "ceylan",
        "last": "sepetçi"
      },
      "email": "ceylan.sepetçi@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/32.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/32.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/32.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "jimi",
        "last": "karvonen"
      },
      "email": "jimi.karvonen@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/78.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
      }
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "ella",
        "last": "davies"
      },
      "email": "ella.davies@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
      }
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "livio",
        "last": "bertrand"
      },
      "email": "livio.bertrand@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/37.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
      }
    }
  ];


ReactDOM.render(
    <App users={users}/>,
    document.getElementById('app')
);