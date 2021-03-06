import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FD2A36',
    borderRadius: 10,
    fontFamily: 'Barlow',
    position: 'absolute',
  },

  title: {
    flexGrow: 1,
  },

  links: {
    color: 'white',
    fontSize: '1.5em',
    width: '10%',
    padding: 10,
    textDecoration: 'none',
  },

  logo: {
    width: '90%',
  },

  appBar: {
    borderRadius: 20,
  },
}))

export default useStyles
