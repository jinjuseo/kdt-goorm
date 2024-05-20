package sec05.chap04.ex02;

import sec05.chap04.ex01.SmartPhone;

public class Main {
    public static void main(String[] args) {
        //  ⭐️ 다른 패키지에서 사용하면 상단에 임포트되어야 함 (IDE 안내)
//        SmartPhone smartPhone = new SmartPhone();
//
//        String pb = smartPhone.powerButton; // ⚠️ 불가
//        String ss = smartPhone.sdCardSlot;


        Button button1 = new Button('1', 1);

//        Button.mode = "OCEAN"; // ⚠️ 불가
        Button.switchMode();

//        button1.space = 3; // ⚠️ 불가
        button1.setSpace(3);
        button1.setSpace(-1); // 걸러짐

//        char button1Print = button1.print; // ⚠️ 불가
        String button1Info = button1.getButtonInfo();
    }
}
