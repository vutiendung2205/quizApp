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
          },
          draggable: {
            zIndex: 1000,
            position: 'fixed',
            bottom: '20%',
            right:0,
            float: 'left',
            fontSize: '20px',
            boxShadow: '0px 0px 20px 0px rgba(253, 29, 29, 0.8)',
            cursor: 'move',
            color: 'black',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            padding: '5px',
            margin: '20px',
            lineHeight: '70px',
            userSelect: 'none',
            backgroundColor: 'aliceblue',
            fontFamily: 'Merriweather',
          },
          footer: {
            marginTop: '30px',
            height: '100px',
            background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 48%, rgba(252,176,69,1) 100%)',
            width: '100%'
          }
    })
};
export default styles;