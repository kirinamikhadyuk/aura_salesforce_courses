({
    handleCount : function(component, event, helper) {
        let min = component.find('numberOneField').get('v.value');
        let max = component.find('numberTwoField').get('v.value');
        if(min >= max){
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                title: 'Randomizer error!',
                message: "First number can't be greater than or equal to second number.",
                type: 'error'
            });
            toastEvent.fire();
        } else{
            let result = Math.floor(Math.random() * (max - min + 1) + min);
        	component.set("v.result", result);   
        }  
	},
    
    activeButton : function(component, event, helper){
        let numberOneInput = component.find("numberOneField").get("v.value");
        let numberTwoInput = component.find('numberTwoField').get('v.value');
        if(numberOneInput != null || numberTwoInput != null ){
            component.set('v.isButtonActive',false);
        }
    }
})
