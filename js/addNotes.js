$(document).ready(function(){
    let dataArr = []
    $('input').keypress(function(e){
        if(e.which ==13){
            dataArr.unshift({
                content: this.value,
                status:true
            });

            $('ul').html(function(){
                let res = ''
                dataArr.map((e,i)=>{
                    
                    res += `<li class="note-item flex ${(e.status)?'':'completed'}" data-key= ${i}>
                    <div class="task-status">
                      <div class="outer">
                        <div class="inner">
                          <i class="fas fa-check"></i>
                        </div>
                      </div>
                    </div>
                    <p>${e.content}</p>
                    <div class="remove-note">
                      <span>X</span>
                    </div>
                  </li>`
                })
                this.innerHTML = res;
            })
            this.value = ''    
        }
    })

    $(document).on('click','.remove-note span',function(){
        const deleteIndex = parseInt($(this).parent().parent().attr('data-key'));
        dataArr.splice(deleteIndex,1);

        $('ul').html(function(){
            let res = ''
            dataArr.map((e,i)=>{
                res += `<li class="note-item flex ${(e.status)?'':'completed'}" data-key= ${i}>
                <div class="task-status">
                  <div class="outer">
                    <div class="inner">
                      <i class="fas fa-check"></i>
                    </div>
                  </div>
                </div>
                <p>${e.content}</p>
                <div class="remove-note">
                  <span>X</span>
                </div>
              </li>`
            })
            this.innerHTML =res;
        })

    })

    $('.notes').on('click','li',function(){
      $(this).toggleClass('completed');
      const completeIndex = parseInt($(this).attr('data-key'));
      if(dataArr[completeIndex].status) {
        dataArr[completeIndex].status = false
      }else{
        dataArr[completeIndex].status= true
      }
    })



})