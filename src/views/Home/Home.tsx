import './home.styles.scss';
import {useState} from 'react';
import {
  Paper,
  Grid,
  Button,
  Container,
  Typography  
} from '@mui/material';

const Home = () => {
  const [values, setValues] = useState<any>({
    ml: null,
    percent: null,
    result: null,
  });
  const [messageError, setMessageError] = useState<string>('');

  const handleChange = (event: any) => {
    setValues({...values, [event.target.name]: event.target.value});
  };

  const handleCalculate = () => {
    if (
      values.ml === null ||
      values.percent === null ||
      values.ml === '' ||
      values.percent === ''
    ) {
      setMessageError('por favor preencha todos os campos');
    } else {
      const res = values.ml * (values.percent * 0.25);

      setValues({...values, result: res});

      setMessageError('');
    }
  };

  const handleClear = () => {
    setValues({ml: '', percent: '', result: null});
  };

  return (
    <Container maxWidth="sm" sx={{height: '100vh', paddingTop: '16px'}}>
      <Paper
        elevation={6}
        sx={{height: '100%', borderRadius: '8px'}}
        className="content">
        <Grid container>
          <Grid item xs={12} className="login-images">
            <Paper
              elevation={6}
              sx={{
                width: '50%',
                margin: '0 auto',
                marginTop: '16px',
                background: 'transparent',
                padding: '24px',
                borderRadius: '24px',
              }}>
              <Typography className="title">CK Aromas</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography className="subtitle">
              Calculadora para diluição de óleos essenciais
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="text-number-ml">
              Qual a quantidade de óleo vegetal que será utilizada?
            </Typography>
          </Grid>
          <Grid item xs={12} className="input-area">
            <input
              required
              type="number"
              className="input"
              placeholder="Exemplo: 10"
              name="ml"
              value={values.ml}
              onChange={handleChange}
            />
            <span>ML</span>
          </Grid>
          <Grid item xs={12}>
            <Typography className="text-number-percent">
              E qual a porcentagem de diluição desejada do óleo essencial?
            </Typography>
          </Grid>

          <Grid item xs={12} className="input-area">
            <input
              required
              type="number"
              className="input"
              placeholder={'Exemplo: 5'}
              name="percent"
              value={values.percent}
              onChange={handleChange}
            />{' '}
            <span>%</span>
          </Grid>
          {messageError !== '' && (
            <Grid item xs={12}>
              <Typography className="text-error">{messageError}</Typography>
            </Grid>
          )}

          <Grid item xs={12} className="footer-button">
            <Button
              onClick={values.result ? handleClear : handleCalculate}
              variant="contained"
              sx={{padding: '16px 48px'}}
              color="success">
              {values.result ? 'Limpar' : 'Calcular'}
            </Button>
          </Grid>
          {values.result && (
            <Paper
              elevation={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '8px',
                alignItems: 'center',
                width: '20%',
                margin: '0 auto',
                marginBottom: '16px',
                background: 'transparent',
                minHeight: '40px',
                minWidth: '40px',
                fontSize: '1.2rem',
                color: '#454545',
                borderRadius: '8px',
              }}>
              {Math.round(values.result)}
              <span className="result-span">gota(s)</span>
            </Paper>
          )}
          {values.result && (
            <Paper elevation={6} className="result-content">
              <Typography className="result-text">
                Para uma concentração de <strong>{`${values.percent}%`}</strong>{' '}
                em <strong>{`${values.ml}ml`}</strong> de óleo vegetal, você
                deve diluir <strong>{`${values.result} gota(s)`}</strong>
                <span>* </span> (valor não arredondado) do óleo essencial em seu
                frasco!{' '}
              </Typography>
            </Paper>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
