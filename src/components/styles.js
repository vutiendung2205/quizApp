const styles = (theme) =>{
    return({
        menuButton: {
            marginRight: theme.spacing(2),
          },
          title: {
            flexGrow: 1,
            textAlign: 'left',
          },
          formControl: {
            margin: theme.spacing(2),
            minWidth: 200,
          },
          selectEmpty: {
            marginTop: theme.spacing(2),
          },
          container_1: {
            position: 'absolute',
            top : '40%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '100%'
          },
          question: {
            fontWeight: '600',
            opacity: 1,
            textAlign: 'left',
            display: 'block',
            paddingLeft: '35px'
          },
          Form_Question: {
            display: 'block',
            margin: '20px 0px'
          },
          dialogAction :{
            justifyContent: 'space-between'
          },
          results: {
            
          },
          quizInfomation: {
            textAlign: 'center',
            // paddingLeft: '100px',
            // paddingRight: '100px'
          },
          resultsDsc: {
            fontWeight: '600',
            float: 'right'
          },
          result_btn: {
            paddingLeft: '50px',
            paddingRight: '50px',
            margin: '20px 10px'
          },
          disabledAnswer: {
            textDecoration: 'line-through'
          },
          showAnswer: {
            color: '#f30909de',
          }
    })
};
export default styles;