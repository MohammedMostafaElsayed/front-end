$(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method : "GET",
        datatype: "json",
        success :function(res){
            $('button').on('click',function(){
            let table = $(`
            <table>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            `);
            for(let i = 0; i < 20; i++){
                let row = $(`
                <tr>
                    <td>${res[i].id}</td>
                    <td>${res[i].title}</td>
                    <td>${res[i].body}</td>
                </tr>
                `);
                table.append(row);
            }
            $('body').append(table);
        });


        },
        error: function(err){

        }   
    }
    );
})