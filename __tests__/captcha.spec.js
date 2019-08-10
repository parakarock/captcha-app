class Captcha{
    
    constructor(leftOperand,operator,rightOperand,mode){
        this.leftOperand = leftOperand
        this.operator = operator
        this.rightOperand = rightOperand
        this.mode = mode
    }
    static wordLeftMode(){ 
        return 'L'
    }

    genNumStr(num){
        let result
        if(num === 1){
            result = 'ONE'
        }
        if(num === 2){
            result = 'TWO'
        }
        if(num === 3){
            result = 'THREE'
        }
        if(num === 4){
            result = 'FOUR'
        }
        if(num === 5){
            result = 'FIVE'
        }
        if(num === 6){
            result = 'SIX'
        }
        if(num === 7){
            result = 'SEVEN'
        }
        if(num === 8){
            result = 'EIGHT'
        }
        if(num === 9){
            result = 'NINE'
        }
        return result

    }

    generate(){
        if(this.mode === Captcha.wordLeftMode()){
            this.leftOperand = this.genNumStr(this.leftOperand)
        }else{
            this.rightOperand = this.genNumStr(this.rightOperand)
        }
        
         return this.leftOperand+" "+this.operator+" "+this.rightOperand
    }

}

describe('CAPTCHA APP' , () => {
    let captcha

    function generateCaptcha(leftOperand,operator,rightOperand,mode){
        captcha = new Captcha(leftOperand,operator,rightOperand,mode)
        return captcha.generate()
    }
     // 1 + ONE
     it('should echo "1 + ONE" when input is 1 + 1', () => {
        //Arrange
        let got = generateCaptcha(1,'+',1)

        //Act

        //Assert
        expect(got).toBe('1 + ONE')

    })
    // 1 + TWO
    it('should echo "1 + TWO" when input is 1 + 2', () => {
        //Arrange
        var num1 = 1
        var num2 = '+'
        var num3 = 2
        let captcha = new Captcha(num1,num2,num3)

        //Act
        let got = captcha.generate()

        //Assert
        expect(got).toBe('1 + TWO')

    })
    // 3 + ONE
    it('should echo "3 + ONE" when input is 3 + 1', () => {
        //Arrange
        var num1 = 3
        var num2 = '+'
        var num3 = 1
        let captcha = new Captcha(num1,num2,num3)

        //Act
        let got = captcha.generate()

        //Assert
        expect(got).toBe('3 + ONE')

    })
    // 9 + ONE
    it('should echo "3 + ONE" when input is 9 + 1', () => {
        //Arrange
        var num1 = 9
        var num2 = '+'
        var num3 = 1
        let captcha = new Captcha(num1,num2,num3)

        //Act
        let got = captcha.generate()

        //Assert
        expect(got).toBe('9 + ONE')

    })
    // TWO + 1
    it('should echo "TWO + 1" when input is 2 + 1', () => {
        //Arrange
        var num1 = 2
        var num2 = '+'
        var num3 = 1
        let captcha = new Captcha(num1,num2,num3,Captcha.wordLeftMode())

        //Act
        let got = captcha.generate()

        //Assert
        expect(got).toBe('TWO + 1')

    })
    
})
