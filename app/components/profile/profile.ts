import { Component, Injectable } from 'angular2/core';
import { UsersModel } from '../users/userModel';

@Injectable()
@Component({
    templateUrl: './app/components/profile/profile.html',
    selector: 'my-profile'
})


export class MyProfile {
    avaInput;
    myProfileObj: UsersModel = new UsersModel('', '', '', '', './app/static/images/dist/no_ava.png');
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
    saveMyProfile(e) {
        e.preventDefault();
        this.isEdit = true;
        if (self.croppedPhoto){
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
