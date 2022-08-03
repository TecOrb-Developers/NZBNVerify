

exports.messages = (data) => {
    var language = data;
    if (language == 'arabic') {
        var messages = {
            'BadRequest': 'طلب غير صحيح',
            'login': 'تم تسجيل الدخول بنجا',
            'deactive': 'تم تعطيل حسابك من قبل المشرف',
            'signUp': 'تم الاشتراك بنجاح',
            'notExists': 'المستخدم غير موجود',
            'usrAlready': 'المستخدم موجود بالفعل',
            'somethingWrong': 'هل هناك خطأ ما',
            'logout': 'تم تسجيل الخروج بنجاح',
            'loginAgain': 'قد انتهى الوقت المسموح به. الرجاء تسجيل الدخول مرة أخرى',
            'invalidPass': 'كلمة مرور خاطئة',
            'success': 'نجاح',
            'notFound': 'لم يتم العثور على السجل',
            'forgotMail': 'بريدك يمكنك التحقق من كلمة المرور المرسلة على',
            'oldPassword': 'كلمة المرور القديمة غير متطابقة',
            'AlreadyExists': 'موجود بالفعل',
            'notDeletebooking': 'لا يمكنك حذف هذا الحجز',
            'emailAlready': 'البريد الالكتروني موجود بالفعل',
            'alreadyRating': 'لقد قمت بأرسال مراجعة و تقييم بالفعل',
            'AlreadyBook': 'اليوم لا يمكنك حجز خدمة لهذه السيارة لأنك قمت بالفعل بحجز خدمة لهذه السيارة',
            'holidayBooking': 'لديك بالفعل حجوزات بين هذه الأيام. يرجى إلغائها أولاً',
            'BookOnHoliday': 'لا يمكنك حجز خدمة لهذا التاريخ',
            'notCorrectId': 'الرجاء إدخال المعرف الصحيح',
            'serverError':'Internal Server Error',
            'accountDeactivate' :'Account is deactivated by Admin',
            'notApproved':'Account is not approved by admin',
            "notLogin":'This is not your login time',
            'notCorrectOtp': 'Please enter correct Otp',
            "invalidEmail":"Please enter valid email"




        }

        return messages;
    } else {
        var messages = {
            'BadRequest': 'Invalid request',
            'login': 'Logged in successfully',
            'deactive': 'Your account is deactivated by admin',
            'signUp': 'SignUp  successfully',
            'notExists': 'User is not exists',
            'usrAlready': 'User already exists',
            'somethingWrong': 'Something wrong',
            'logout': 'Logout successfully',
            'loginAgain': 'Your session has been expired. Please login again',
            'invalidPass': 'Invalid password',
            'success': 'Success',
            'notFound': 'Record is not found',
            'forgotMail': 'Password sent on your mail can you please check',
            'oldPassword': 'Old password is not match',
            'AlreadyExists': 'Already exists',
            'notDeletebooking': 'You can not delete this booking',
            'emailAlready': 'Email already exists',
            'alreadyRating': 'You have already send review and rating',
            'AlreadyBook': 'Today You can not book service for this vehicle because you have already book service for this vehicle',
            'holidayBooking': 'You have already bookings between these days.please cancel them first',
            'BookOnHoliday': 'You can not book a service for this date.because vendor closed',
            'notCorrectId': 'please enter correct Id',
            'notCorrectOtp': 'please enter correct Otp',
            'AppUpdate': 'New app version available. please update.',
            'serverError':'Internal Server Error',
            'accountDeactivate' :'Account is deactivated by Admin',
            'notApproved':'Account is not approved by admin',
            "notLogin":'Please try login in your working hours',
            "invalidEmail":"Please enter valid email"
        }
        return messages;
    }
}