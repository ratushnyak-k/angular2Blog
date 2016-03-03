import { Component, Injectable } from 'angular2/core';
import { UsersModel } from '../users/userModel';
import { ValidationModel } from './validationModel';

@Injectable()
@Component({
    templateUrl: './app/components/profile/profile.html',
    selector: 'my-profile'
})


export class MyProfile {
    avaInput;
    myProfileObj: UsersModel = new UsersModel('', '', '', 'not specified', './app/static/images/dist/no_ava.png');
    validationObj: ValidationModel = new ValidationModel();
    isEdit: boolean = false;
    self;
    croppedPhoto;
    ngOnInit() {
        self = this;
        if (localStorage.getItem('myInfo')) {
            this.myProfileObj = JSON.parse(localStorage.getItem('myInfo'));
            this.isEdit = true;
        }
    }
    checkValidation(e) {
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const namePattern = /^[A-Za-z ]{2,20}$/;

        var isFirstName = e.target.id === 'firstName';
        var isLastName = e.target.id === 'lastName';
        var isEmail = e.target.id === 'email';
        var thisFieldValue = e.target.value;

        if (thisFieldValue) {
            if (isFirstName) {
                this.validationObj['firstName'] = !namePattern.test(thisFieldValue);
            }
            if (isLastName) {
                this.validationObj['lastName'] = !namePattern.test(thisFieldValue);
            }
            if (isEmail) {
                this.validationObj['email'] = !emailPattern.test(thisFieldValue);
            }
        }
    }
    saveMyProfile(e) {
        e.preventDefault();
        this.isEdit = true;
        if (self.croppedPhoto) {
            this.myProfileObj.ava = self.croppedPhoto;
        }
        localStorage.setItem('myInfo', JSON.stringify(this.myProfileObj));

    }
    editMyProfile(e) {
        e.preventDefault();
        this.isEdit = false;
    }
    readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                self.myProfileObj.ava = e.target.result;
                setTimeout(() =>
                    $('.future-ava').cropbox({
                        width: 200,
                        height: 200,
                        showControls: 'always'
                    })
                    .on('cropbox',
                        (event, results, img) => {
                            self.croppedPhoto = img.getDataURL();
                        }
                    ), 0
                );
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
}
