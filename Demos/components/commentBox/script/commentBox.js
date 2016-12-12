require(['CommentBox.html'],function(CB){

var CommentBox=React.createClass({

    getInitialState:function(){
      return {data:[] };
    },

    componentDidMount: function(){
      console.log(this.props.url);
      var loc=this.props.url;
      $.ajax({
        
        url: loc,
        dataType:'json',
        cache:false,
        success:function(data){
          console.log(data);
          this.setState({data:data});
        }.bind(this),
        error:function(xhr,status,err){

          console.log("failed");
          console.error(loc,status,err.toString());
        }.bind(this)

      });

    },

		render:function(){
			return (
					CB;
				);
		}
	});

	return {
		render
	}
});