require(function(){


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
			var a='<div className="commentBox"><h1 className="comment-title">Comments</h1><CommentList className="commentList" data={this.state.data}/>	<CommentForm className="commentForm" /></div>';

			return (
					a
				);
		}
	});

	var CommentList=React.createClass({

		render:function(){
			var b='<Comment author={comment.author} key={comment.id} text={comment.text.length>32? comment.text.substring(0,32)+" ...":comment.text} img={comment.img}></Comment>'
			var commentNodes=this.props.data.map(function(comment){
				return (
					b
				);
			});
			
			var c='<div>\
							{commentNodes}\
					</div>';
			return (
					c	
				);
		}
	});

	var Comment=React.createClass({

		render:function(){
		var d  = '<div className="commentItem">\
					<img className="item-img" src={this.props.img} alt="" />\
					<div className="item-info">\
						<h3 className="item-author">{this.props.author}</h3>\
						<p>{this.props.text}</p>\
					</div>\
					<a href="#"><div className="item-reply">Reply</div></a>\
				</div>';

			return (
				d
			);
		}
	});

	var CommentForm=React.createClass({

		render:function(){

			var f='<form>\
					<p className="">\
						<label htmlFor="name">name:</label>\
						<input type="text" name="author" placeholder="your name" />\
						<label htmlFor="img">img:</label>\
						<input type="text" placeholder="img" />\
					</p>\
					<p>\
						<input type="text" placeholder="say something . . ." className="form-input" />\
					</p>\
					<input type="button" value="Send" className="form-botton" />\
				</form>'

			return (
				f
				
			);
		}
	});
	

	// var g='';
	ReactDOM.render(

		<CommentBox url="comments.php" />,
		document.getElementById("commentBox")
	);



});
