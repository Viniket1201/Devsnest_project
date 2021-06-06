from flask import Flask,redirect,request
data=""
app=Flask(__name__)
@app.route('/')
def hello_world1():
    global data
    data+='Hello World!'+' '
    return data

@app.route("/greet/goback",methods=['GET'])
def hello_world2():
    return redirect('/')

@app.route("/greet/<string:user>",methods=['GET'])
def hello_world3(user):
    global data
    data+=user+' '
    return data

if __name__=='__main__':
    app.run(debug=True)