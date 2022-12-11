import React, {useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {RadioButton} from "react-native-radio-buttons-group";
import CustomMainButton from "../../component/CustomMainButton";


const CompensationJudge = ({navigation, route}) => {

    const type = "S";

    const subjects = [
        {
            id : 1,
            label: '보험 가입자'
        },
        {
            id : 2,
            label: '전쟁 및 테러'
        },
        {
            id : 3,
            label: '자연재해'
        },
    ];



    const carCauses = [
        {
            id : 1,
            label: '경미한 과실(실수)로 발생했을 경우'
        },
        {
            id : 2,
            label: '상대방의 실수로 발생 했을 경우'
        },
        {
            id : 3,
            label: '운전자가 보험가입자가 아닌 경우'
        },
        {
            id : 4,
            label: '고객이 고의로 사고를 일으킨 경우'
        },
        {
            id : 5,
            label: '고객이 자동차를 이용한 영업 행위(유사운송)였을 경우'
        },
        {
            id : 6,
            label: '고객이 시험용 또는 경기용으로 운행 했을 경우'
        },
        {
            id : 7,
            label: '고객이 음주 및 무면허 운행 했을 경우'
        },
    ];

    const seaCauses = [
        {
            id : 1,
            label: '경미한 과실(실수)로 발생했을 경우'
        },
        {
            id : 2,
            label: '고객이 고의적 비행에 기인한 멸실, 손상으로 발생 했을 경우'
        },
        {
            id : 3,
            label: '원자력 및 핵의 분열 혹은 융합으로 인해 방사능으로 발생 했을 경우'
        },
        {
            id : 4,
            label: '선박 또는 부선의 불내항으로 인해 발생 했을 경우'
        },
        {
            id : 5,
            label: '화물 적재의 부적합으로 인해 발생 했을 경우'
        },
    ];

    const fireCauses = [
        {
            id : 1,
            label: '경미한 과실(실수)로 발생했을 경우'
        },
        {
            id : 2,
            label: '불 혹은 폭발로 인한 사고일 경우'
        },
        {
            id : 3,
            label: '친족 혹은 고용인의 고의인 경우'
        },
        {
            id : 4,
            label: '전기기기 또는 전기적 사고로 발생 했을 경우'
        },
    ];

    const [subjectSelect, setSubjectSelect] = useState([]);
    const [carCauseSelect, setCarCauseSelect] = useState([]);
    const [fireCauseSelect, setFireCauseSelect] = useState([]);
    const [seaCauseSelect, setSeaCauseSelect] = useState([]);

    const [subjectValue, setSubjectValue] = useState();
    const [carCauseValue, setCarCauseValue] = useState();
    const [fireCauseValue, setFireCauseValue] = useState();
    const [seaCauseValue, setSeaCauseValue] = useState();


    function selectSubject(index) {
        setSubjectValue(index);
        setSubjectSelect([]);
        for (let i = 0; i < subjects.length; i++) {
            if (i === index-1) {
                setSubjectSelect(subjectSelect => [...subjectSelect, true]);
            } else {
                setSubjectSelect(subjectSelect => [...subjectSelect, false]);
            }
        }


    }

    function selectCarCause(index) {
        setCarCauseValue(index);
        setCarCauseSelect([]);
        for (let i = 0; i < carCauses.length; i++) {
            if (i === index-1) {
                setCarCauseSelect(carCauseSelect => [...carCauseSelect, true]);
            } else {
                setCarCauseSelect(carCauseSelect => [...carCauseSelect, false]);
            }
        }

    }

    function selectFireCause(index) {
        setFireCauseValue(index);
        setFireCauseSelect([]);
        for (let i = 0; i < fireCauses.length; i++) {
            if (i === index-1) {
                setFireCauseSelect(fireCauseSelect => [...fireCauseSelect, true]);
            } else {
                setFireCauseSelect(fireCauseSelect => [...fireCauseSelect, false]);
            }
        }

    }

    function selectSeaCause(index) {
        setSeaCauseValue(index);
        setSeaCauseSelect([]);
        for (let i = 0; i < seaCauses.length; i++) {
            if (i === index-1) {
                setSeaCauseSelect(seaCauseSelect => [...seaCauseSelect, true]);
            } else {
                setSeaCauseSelect(seaCauseSelect => [...seaCauseSelect, false]);
            }
        }

    }

    function selectComplete() {

    }




    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.selectView}>
                    <Text style={styles.selectViewText}>사고 발생 주체</Text>
                {subjects.map((subject) =>
                    <RadioButton id={subject.id}
                                 key={subject.id}
                                 label={subject.label}
                                 onPress={id => selectSubject(id)}
                                 selected={subjectSelect[subject.id-1]}
                                 containerStyle={styles.selectButton}
                                 labelStyle={styles.selectText}
                    />
                )}
                </View>

                <View style={styles.selectView}>
                    <Text style={styles.selectViewText}>사고 발생 원인</Text>
                {type === "C" ? (
                    carCauses.map((carCause) =>
                        <RadioButton id={carCause.id}
                                     key={carCause.id}
                                     label={carCause.label}
                                     onPress={id => selectCarCause(id)}
                                     selected={carCauseSelect[carCause.id-1]}
                                     containerStyle={styles.selectButton}
                                     labelStyle={styles.selectText}
                        />
                    )
                ) : (
                    type === "F" ? (
                        fireCauses.map((fireCause) =>
                            <RadioButton id={fireCause.id}
                                         key={fireCause.id}
                                         label={fireCause.label}
                                         onPress={id => selectFireCause(id)}
                                         selected={fireCauseSelect[fireCause.id-1]}
                                         containerStyle={styles.selectButton}
                                         labelStyle={styles.selectText}
                            />
                        )
                    ) : (
                        seaCauses.map((seaCause) =>
                            <RadioButton id={seaCause.id}
                                         key={seaCause.id}
                                         label={seaCause.label}
                                         onPress={id => selectSeaCause(id)}
                                         selected={seaCauseSelect[seaCause.id-1]}
                                         containerStyle={styles.selectButton}
                                         labelStyle={styles.selectText}
                            />
                    )
                ))}
                </View>
                <CustomMainButton buttonText={"선택 완료"} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    selectView: {
        margin: 10,
    },
    selectViewText: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    selectButton: {
        height: 50,
        borderRadius: 10,
        backgroundColor: "#f5f6fa"
    },
    selectText: {
        fontSize: 17,
    },

});


export default CompensationJudge;
