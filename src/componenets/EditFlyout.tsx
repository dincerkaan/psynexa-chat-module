// import React from 'react';
// import { MeetingType } from '../utils/Types';

// export default function EditFlyout({
// 	closeFlyout,
// 	meetings,
// }: {
// 	closeFlyout: any;
// 	meetings: MeetingType;
// }) {
// 	useAuth();
// 	const [users] = useFetchUsers();
// 	const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);
// 	const [meetingName, setMeetingName] = useState('');
// 	const [selectedUsers, setSelectedUsers] = useState<Array<UserType>>([]);
// 	const [startDate, setStartDate] = useState(moment());
// 	const [createToast] = useToast();
// 	const [size, setSize] = useState(1);
// 	const [anyoneCanJoin, setanyoneCanJoin] = useState(false);
// 	const [showErrors, setshowErrors] = useState<{
// 		meetingName: FieldErrorType;
// 		meetingUsers: FieldErrorType;
// 	}>({
// 		meetingName: {
// 			show: false,
// 			message: [],
// 		},
// 		meetingUsers: {
// 			show: false,
// 			message: [],
// 		},
// 	});

// 	useEffect()

// 	const onUserChange = (selectedOptions: any) => {
// 		setSelectedUsers(selectedOptions);
// 	};

// 	const validateForm = () => {
// 		let errors = false;
// 		const clonedShowErrors = { ...showErrors };
// 		if (!meetingName.length) {
// 			clonedShowErrors.meetingName.show = true;
// 			clonedShowErrors.meetingName.message = ['Please Enter Meeting Name'];
// 			errors = true;
// 		} else {
// 			clonedShowErrors.meetingName.show = false;
// 			clonedShowErrors.meetingName.message = [];
// 		}
// 		if (!selectedUsers.length) {
// 			clonedShowErrors.meetingUsers.show = true;
// 			clonedShowErrors.meetingUsers.message = ['Please Select a User'];
// 		} else {
// 			clonedShowErrors.meetingUsers.show = false;
// 			clonedShowErrors.meetingUsers.message = [];
// 		}
// 		setshowErrors(clonedShowErrors);
// 		return errors;
// 	};
// 	return;
// }
