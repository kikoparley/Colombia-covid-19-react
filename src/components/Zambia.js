//importing packages starts here
import React, { useState, useEffect } from "react";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

//importing packages ends here

//component styling starts here
const useStyles = makeStyles((theme) => ({
  root: {
background: "linear-gradient(to right, #363795, #005C97)",
    border: 0,
    borderRadius: 3,

    color: "white",
    padding: "0 30px",
    display: "flex",
    height: "180px",
    width: "350px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(8),
    backgroundColor: "#01579b"
  },
  icon: {
    marginRight: theme.spacing(2)
  },

  card: {
    maxHeight: "100%",
    display: "block",
    flexDirection: "column",
    minWidth: "400px",
    marginLeft: "20.5px",
    marginRight: "20.5px",
    float: "right",
    width: "1200px",
    position: "center",
    borderRadius: "5px",
    justifyContent: "space-evenly",
    boxSizing: "border-box"
  },
  cardMedia: {
    paddingTop: "4.25%", // 16:9
    paddingButtom: "4.25%"
  },
  cardContent: {
    flexGrow: 0
  }
}));
//component styling ends here

//function starts here
export default function Cards() {
  const classes = useStyles();
  const [stats, handleStats] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);

  //data fetching from the api
  const FetchData = async () => {
    const data = await fetch("https://corona.lmao.ninja/countries/Colombia"); //data source
    const stats = await data.json();
    handleStats(stats);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Card starts here */}
        <Container className={classes.cardGrid} maxWidth='600px'>
          <br />
          <br />
          <Grid container spacing={15} justify='space-evenly'>
            {/* <Card className={classes.card} variant='outlined' elevation={3}>
              <CardContent className={classes.cardContent}>
                <CardMedia className={classes.cardMedia} align='center'>
                  <Typography color='secondary' style={{ fontSize: 25 }}>
                    Colombia
                  </Typography>
                  <Divider />
                  <Typography color='primary' style={{ fontSize: 20 }}>
                    Total Casos ({stats.cases}), Casos Hoy ({stats.todayCases}), Total Muertes ({stats.deaths}), Muertes
                    Hoy ({stats.todayDeaths}), Recuperados ({stats.recovered}), Activos ({stats.active}), Criticos (
                    {stats.critical}), Casos*Millon ({stats.casesPerOneMillion})
                  </Typography>
                </CardMedia>
              </CardContent>
            </Card> */}

            <Card className={classes.root} variant='outlined'>
              <CardContent>
              <Typography variant='h5' component='h2'>
                CASOS TOTALES ({stats.cases})
                </Typography>
                  <Typography variant='h5' component='h2'>
                CASOS NUEVOS ({stats.todayCases})
                </Typography>

              </CardContent>
              {/* <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions> */}
            </Card>

            <Card className={classes.root} variant='outlined'>
              <CardContent>
              <Typography variant='h5' component='h2'>
                TOTAL MUERTES ({stats.deaths})
                </Typography>
                  <Typography variant='h5' component='h2'>
                  MUERTES HOY ({stats.todayDeaths})
                </Typography>

              </CardContent>
              {/* <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions> */}
            </Card>

            <Card className={classes.root} variant='outlined'>
              <CardContent>
                <Typography variant='h5' component='h2'>
                RECUPERADOS ({stats.recovered})
                </Typography>
                  <Typography variant='h5' component='h2'>
                ACTIVOS ({stats.active})
                </Typography>

              </CardContent>
              {/* <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
          <br />
          <br />
        </Container>
        {/* Card ends here */}
      </main>
    </React.Fragment>
  );
}
